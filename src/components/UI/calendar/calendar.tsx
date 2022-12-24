// @ts-nocheck
import React, {FC, useRef, useState} from 'react';
import classnames from 'classnames';

import * as calendar from "./caledarfuck";

import './Calendar.css';
import CalendarPanel from "./calendar-panel";
import {useNavigate} from "react-router-dom";

const Calendar: FC = () => {
    const initialState = {
        date: new Date(),
        years: [2022, 2023],
        monthNames: {
             0: 'Январь',
             1: 'Февраль',
             2: 'Март',
             3: 'Апрель',
             4: 'Май',
             5: 'Июнь',
             6: 'Июль',
             7: 'Август',
             8: 'Сентябрь',
             9: 'Октябрь',
             10: 'Ноябрь',
             11: 'Декабрь'
        },
        weekDayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг' , 'Пятница', 'Суббота', 'Воскресенье'],
        onChange: Function.prototype
    };



    const navigate = useNavigate();

    const [date, setDate] = useState(initialState.date);
    const [monthSelect, setMonthSelect] = useState(<select value={0}></select> as unknown as HTMLSelectElement["value"]);
    const [yearSelect, setYearSelect] = useState(<select value={0}></select> as unknown as HTMLSelectElement["value"]);
    const [currentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const [isClosed, setIsClosed] = useState(true);


    const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());


    const { monthNames, weekDayNames } = initialState;

    const handlePrevMonthButtonClick = () => {
        const changeDate = new Date(date.getFullYear(), date.getMonth() -1);
        setDate(changeDate);
    };


    const handleNextMonthButtonClick = () => {
        const changeDate = new Date(date.getFullYear(), date.getMonth() +1);
        setDate(changeDate);

    };

    const handleSelectChange = () => {
        const year = yearSelect["value"];
        const month = monthSelect["value"];
        const changeDate = new Date(year, month);


        setDate(changeDate);
    };

    const handleDayClick = (date: any) => {
        setSelectedDate(date)
        setIsClosed(false)
        initialState.onChange(date);
    };

    const toMain = () => {
        navigate("/");
    }

    const SignOut = () => {
        localStorage.removeItem('user');
        toMain();
    }


        return (

        <div className={"calendar"}>
            <div className={'header'}>
            <h2 className={'calendar-header'} onClick={() => toMain()}>FlexМекс CALENDAR</h2>
            <div className={'month'}>

                <div className={'month_item'}>
                <div
                    ref={element => {
                        setMonthSelect(element);
                    }}
                    value={date.getMonth()}
                    onChange={handleSelectChange}
                >
                    {monthNames[date.getMonth()]}
                </div>
                <div
                    ref={element => setYearSelect(element)}
                    value={date.getFullYear()}
                    onChange={handleSelectChange}
                >
                    {date.getFullYear()}
                </div>
                </div>
                <div className={'month_buttons'}>
                <button className={"left-arrow_2"}
                        onClick={handlePrevMonthButtonClick}
                        disabled={currentDate >= date}
                ></button>
                    <button className={"right-arrow_2"}
                            onClick={handleNextMonthButtonClick}
                            disabled={Math.ceil( (date - currentDate) / (1000 * 60 * 60 * 24 * 30) % 12) > 1}
                    ></button>
                </div>
                </div>
                <button className={'sign-out-btn'} onClick={SignOut}>Выйти</button>
            </div>
            <div className={'back_days-list'}></div>
            <div className={'back_week-list'}></div>
            <table className={'days-list'}>
                <thead >
                <tr >
                    {weekDayNames.map((name) =>
                        <th className={'week-name'} key={name}>{name}</th>
                    )}
                </tr>
                </thead>
                <tbody className={'days'}>
                {monthData.map((week, index) =>
                    <tr key={index} className="week">
                        {week.map((date, index) => date ?
                            <td
                                key={index}
                                className={classnames('day', {
                                    'today' : calendar.areEqual(date,currentDate),
                                    'selected': calendar.areEqual(date, selectedDate)
                                })}

                                onClick={calendar.areEqual(date,currentDate) || date > currentDate ? () => handleDayClick(date) : null}
                            >{date.getDate()}</td>
                            :
                            <td className={'day'} key={index} />
                        )}
                    </tr>
                )}
                </tbody>
            </table>

            {selectedDate  && <CalendarPanel selectedDate={selectedDate} />}


        </div>
    )
}

export default Calendar;