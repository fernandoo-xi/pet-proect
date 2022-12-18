
import React, {FC, useState} from 'react';
import classnames from 'classnames';

import * as calendar from "./caledarfuck";

import './Calendar.css';

const Calendar: FC = () => {
    const initialState = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };



    return (
        <div className={"calendar"}>
            <header>
                <button>{"<"}</button>

                <select></select>
                <select></select>

                <button>{">"}</button>
            </header>
            <table>
                <thead>
                    <tr>

                    </tr>
                </thead>

                <tbody>

                </tbody>
            </table>

        </div>
    )
}

export default Calendar;