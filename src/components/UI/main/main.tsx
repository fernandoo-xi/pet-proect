import React, {FC, useEffect, useState} from 'react';

import './Main.css';
import { useNavigate} from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import About from "../about/about";
import Calendar from "../calendar/calendar";

const Main: FC = () => {

    const navigate = useNavigate();

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('user')) {
            setIsAuth(true)
            console.log(isAuth)
        }
    })

    const SignOut = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

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
                    {!isAuth ? (
                    <ul>
                        <li><a href="/sign-in">Войти</a></li>
                        <li><a href="/sign-up">Зарегестрироваться</a></li>
                    </ul>
                        ) :
                        <button onClick={SignOut} className={'sign-out-btn_main'}>Выйти</button> }
                </nav>

                <a href="https://github.com/fernandoo-xi/pet-proect" className="logo"></a>

                <section className="header-content">
                    <h1>Добро пожаловать</h1>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={2000}
                    >
                        <div className={"arrow-8"}></div>
                    </Link>
                </section>
            </header>
        </div>
            <div className={"devider"}><p>Ведь если че-то то есть о чем и как</p></div>
            <div className={'devider-place'}><span>То даже есть ли да может и где</span></div>

        <About />


        </div>
    );
};

export default Main;