import React from "react";
import { Topbar } from "./topbar";
import { GuidesSection } from "./guide-section";
import { ToolsSection } from "./tools-section";
import { ComparisonSection } from "./comparison-section";
import { StaticFrontEndGuide } from "./static-frontend-guide";
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
        </div>
    );
};
