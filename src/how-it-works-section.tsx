import React from "react";
import "./how-it-works-section.scss";
import Terminal from "./assets/terminal.svg";
import Keyboard from "./assets/keyboard.svg";
import Rocket from "./assets/rocket.svg";
import Coffee from "./assets/latte.svg";

export const HowItWorksSection = (): any => {
    return (
        <section id="how-it-works-section">
            <div className="container-fluid">
                <h1 className="mb-5">How it works</h1>

                <div className="entries d-flex justify-content-between align-items-center">
                    <div className="entry">
                        <img src={Terminal} alt="Terminal icon" />
                        <p className="mb-0">Open your terminal to the project location</p>
                    </div>

                    <span className="separator" />

                    <div className="entry">
                        <img src={Keyboard} alt="Keyboard icon" />
                        <p className="mb-0">
                            Run the <code>mkts</code> command
                        </p>
                    </div>

                    <span className="separator" />

                    <div className="entry">
                        <img src={Keyboard} alt="Keyboard icon" />
                        <p className="mb-0">Enter a name for your project</p>
                    </div>

                    <span className="separator" />

                    <div className="entry">
                        <img src={Keyboard} alt="Keyboard icon" />
                        <p className="mb-0">
                            Select your <i>project type</i> and <i>package manager</i>
                        </p>
                    </div>

                    <span className="separator" />

                    <div className="entry">
                        <img src={Rocket} alt="Rocket icon" />
                        <p className="mb-0">Press enter</p>
                    </div>

                    <span className="separator" />

                    <div className="entry">
                        <img src={Coffee} alt="Coffee icon" />
                        <p className="mb-0">Wait for setup to complete</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
