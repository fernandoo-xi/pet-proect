import React, {FC, useEffect} from 'react';

import './Main.css';
import {useNavigate} from "react-router-dom";
import About from "../about/about";

const Main: FC = () => {

    return (
        <div>
        <div className="container-fluid">
            <div className="background">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
            </div>

            <header>
                <nav>
                    <ul>
                        <li><a href="/">Войти</a></li>
                        <li><a href="/">Зарегестрироваться</a></li>
                    </ul>
                </nav>

                <a href="https://github.com/fernandoo-xi/pet-proect" className="logo"></a>

                <section className="header-content">
                    <h1>Добро пожаловать</h1>
                    <p>ЛОхчи гучи купи мои агучи. Йоу собаки я Наруто Узумаки</p>
                    <button>Зачем то</button>
                    <button>Что то</button>
                </section>
            </header>
        </div>
            <div className={"devider"}><p>Ведь если че-то то есть о чем и как</p></div>

        <About />
        </div>
    );
};

export default Main;