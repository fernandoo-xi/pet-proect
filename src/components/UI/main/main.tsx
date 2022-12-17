import React, { FC } from 'react';

import './Main.css';

const Main: FC = () => {

    return (

            <React.Fragment>

                <header>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>

                    <a href="https://github.com/fernandoo-xi/pet-proect" className="logo"></a>

                    <section className="header-content">
                        <h1>Welcome</h1>
                        <p> Welcome to our studio. We are a passionated group of people,
                            making high quality products designed to make your life easier.</p>
                        <button>Know more</button>
                        <button>Meet us</button>
                    </section>
                </header>
            </React.Fragment>

    );
};

export default Main;