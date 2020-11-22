import React from "react";
import Tools from "./assets/mkts-tools.svg";
import "./tools-section.scss";

export const ToolsSection = (): any => {
    return (
        <section id="tools-section">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={Tools} alt="MKTS Tools" />
                    </div>

                    <div className="col-6 d-flex flex-column justify-content-center">
                        <p className="mb-5">
                            <span>mkts</span> generates a super straightforward, ready-to-go application base, you can start working with right away.
                            It preconfigures your new project with many tools that you&apos;d otherwise have to setup yourself, saving you all the{" "}
                            <span>hassle.</span>
                        </p>

                        <ul>
                            <li>
                                <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopener">
                                    Typescript
                                </a>
                            </li>
                            <li>
                                <a href="https://webpack.js.org" target="_blank" rel="noreferrer noopener">
                                    Webpack
                                </a>
                            </li>
                            <li>
                                <a href="https://www.eslint.org" target="_blank" rel="noreferrer noopener">
                                    ESlint
                                </a>
                            </li>
                            <li>
                                <a href="https://babeljs.io" target="_blank" rel="noreferrer noopener">
                                    Babel
                                </a>
                            </li>
                            <li>
                                <a href="https://prettier.io/" target="_blank" rel="noreferrer noopener">
                                    Prettier
                                </a>
                            </li>
                            <li>
                                <a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">
                                    React
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
