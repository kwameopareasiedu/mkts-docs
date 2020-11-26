import React from "react";
import { Topbar } from "./topbar";
import { ToolsSection } from "./tools-section";
import { ComparisonSection } from "./comparison-section";
import { GuidesSection, StaticFrontEndGuide, FrontEndServerGuide, ApiServerGuide, FullStackAppGuide } from "./guides";
import "./app.scss";

export const App = (): any => {
    return (
        <div id="app">
            <Topbar />

            <section id="description-section">
                <div className="container">
                    <blockquote className="mb-5">
                        <p>mkts is a tool that takes you from an empty folder to a running Typescript application base in literal seconds</p>
                        <p>
                            or minutes, if your internet connection is slow <i className="fa fa-laugh" />
                        </p>
                    </blockquote>

                    <div id="install">
                        <code>yarn global add mkts</code>
                        <span className="ml-4 mr-4">or</span>
                        <code>npm install -g mkts</code>
                    </div>
                </div>
            </section>

            <ComparisonSection />

            <ToolsSection />

            <GuidesSection />

            <StaticFrontEndGuide />

            <FrontEndServerGuide />

            <ApiServerGuide />

            <FullStackAppGuide />

            <footer>
                <div className="container-fluid text-center">
                    <h1 className="mb-0">mkts</h1>

                    <p className="mb-4">
                        <i>#make typescript</i>
                    </p>

                    <a className="btn btn-link mr-2" href="https://github.com/kwameopareasiedu/mkts" rel="noreferrer noopener" target="_blank">
                        <i className="fa fa-github mr-2" />
                        Star on Github
                    </a>

                    <a className="btn btn-link mr-2" href="https://www.patreon.com/kwameopareasiedu" rel="noreferrer noopener" target="_blank">
                        <i className="fab fa-patreon mr-2" />
                        Support on Patreon
                    </a>

                    <br />
                    <br />

                    <p className="mb-0">
                        <a className="btn btn-link p-0" href="https://github.com/kwameopareasiedu" rel="noreferrer noopener" target="_blank">
                            Kwame Opare Asiedu
                        </a>
                        <span>, 2020.</span>
                    </p>
                </div>
            </footer>
        </div>
    );
};
