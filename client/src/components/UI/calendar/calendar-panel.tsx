// @ts-nocheck
import React, {FC, useEffect, useState} from "react";
import classnames from 'classnames';

import './calendar-panel.css';
import {format} from "date-fns";
import {ru} from "date-fns/locale";

const CalendarPanel: FC = (propsDate: Date) => {
    const {selectedDate} = propsDate;
    const dayTime = ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
    const [selectedTime, setSelectedTime] = useState(null);
    const [isClosed, setIsClosed] = useState(true);


    const choiceTime = (e:any) => {
        setSelectedTime(e.target.textContent)
    };

    useEffect(() => {
        setIsClosed(false);
    }, [selectedDate]);

    const closeAside = () => {
        setIsClosed(true);
    }



    return (
        <aside className={classnames('aside', {
            'hide-aside': isClosed
        })}>
            <div className={'hide'}
                 onClick={() => {
                     setSelectedTime(null);
                     closeAside();
                 }}
            ></div>
            <h2 className={'panel-header'}>{format(new Date(selectedDate), 'd MMMM, iiii', {locale: ru})}</h2>
            <div className={'time-block'}>
            {dayTime.map(time => (
                <div key={time} className={classnames('time', {
                            'active-time' : selectedTime == time
                })}
                     onClick={choiceTime}>
                <span>{time}</span>
                </div>
            ))}
            </div>
            <div className={'message'}>
                <h2>Добавить коментарий</h2>
                <textarea className={"aside-textarea"} rows="3"></textarea>
            </div>
            <button className={'panel-button'}>Выбрать</button>
        </aside>
    );
};

export default CalendarPanel;