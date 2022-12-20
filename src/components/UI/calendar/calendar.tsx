// @ts-nocheck
import React, {FC, useRef, useState} from 'react';
import classnames from 'classnames';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';

import * as calendar from "./caledarfuck";

import './Calendar.css';

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
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };

    const [date, setDate] = useState(initialState.date);
    const [monthSelect, setMonthSelect] = useState(<select value={0}></select> as unknown as HTMLSelectElement["value"]);
    const [yearSelect, setYearSelect] = useState(<select value={0}></select> as unknown as HTMLSelectElement["value"]);
    const [currentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);


    const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());
    const dayTime = ['20:00', '21:00'];

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
        initialState.onChange(date);
    };

    const choiceTime = (e) => {
        setSelectedTime(e.target.textContent)
    };

        return (
        <div className={"calendar"}>
            <div>
                <button onClick={handlePrevMonthButtonClick} disabled={currentDate >= date}>{"<"}</button>

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

                <button onClick={handleNextMonthButtonClick} disabled={Math.ceil( (date - currentDate) / (1000 * 60 * 60 * 24 * 30) % 12) > 1}>{">"}</button>
            </div>
            <table>
                <thead>
                <tr>
                    {weekDayNames.map((name) =>
                        <th key={name}>{name}</th>
                    )}
                </tr>
                </thead>
                <tbody>
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
                            <td key={index} />
                        )}
                    </tr>
                )}
                </tbody>
            </table>
            <div>
                {selectedDate  && <p>{format(new Date(selectedDate), 'd MMMM, iiii', {locale: ru})}</p>}
            </div>
            <div>
                {selectedDate && dayTime.map(time => <div onClick={choiceTime}>{time}</div>)}
            </div>

        </div>
    )
}

export default Calendar;