import React from "react";
import { Topbar } from "./topbar";
import Coffee from "./assets/latte.svg";
import Enter from "./assets/enter.svg";
import "./app.scss";

export const App = (): any => {
    return (
        <div id="app">
            <Topbar />

            <section id="description-section">
                <div className="container">
                    <blockquote className="mb-5">
                        <p>mkts is a tool that takes you from an empty folder to a running Typescript application base in literal seconds</p>
                        <p>or minutes, if your internet connection is slow <i className="fa fa-laugh"/></p>
                    </blockquote>

                    <div id="install">
                        <code>yarn global add mkts</code>
                        <span className="ml-4 mr-4">or</span>
                        <code>npm install -g mkts</code>
                    </div>
                </div>
            </section>

            <section id="comparison-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div id="current-coding">
                                <ul className="mb-5">
                                    <li>Create project</li>
                                    <li>Setup NPM</li>
                                    <li>Install and configure Typescript</li>
                                    <li>Install and configure ESlint</li>
                                    <li>Install and configure Prettier</li>
                                    <li>Install and configure Babel</li>
                                    <li>Install Webpack</li>
                                    <li>Configure Webpack to compile React TSX/JSX</li>
                                    <li>Configure Webpack to compile SASS and CSS</li>
                                    <li>Configure Webpack to link assets</li>

                                    <p id="some-time-later">One eternity later...</p>

                                    <li>Install node modules</li>
                                </ul>

                                <p className="coding-style mb-0">
                                    How you <em>are</em> creating projects <i className="far fa-frown" />
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div id="new-coding">
                                <div id="new-coding-content">
                                    <ul>
                                        <li>Open terminal at project location</li>
                                        <li>
                                            Run <code>mkts</code>
                                        </li>
                                        <li>Enter project name</li>
                                        <li>Select project type</li>
                                        <li>Select package manager</li>
                                    </ul>

                                    <div id="enter-btn">
                                        <img src={Enter} alt="Enter key" />
                                    </div>

                                    <div id="coffee-break" className="mb-4">
                                        <img src={Coffee} alt="coffee" />
                                        <span>Sips coffee &amp; and watches magic happens</span>
                                    </div>

                                    <p className="coding-style mb-0">
                                        How you <em>can be</em> creating projects <i className="far fa-laugh-beam" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
