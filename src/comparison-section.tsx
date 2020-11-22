import React, { useRef, useState } from "react";
import Enter from "./assets/enter.svg";
import Coffee from "./assets/latte.svg";
import "./comparison-section.scss";

export const ComparisonSection = (): any => {
    const sliderStartPosition = 115;
    const [visibilitySliderValue, setVisibilitySliderValue] = useState(0);
    const visibilitySliderRef = useRef();
    const dividerRef = useRef();

    const clipDistance = (): number => {
        const visibilitySlider: HTMLInputElement = visibilitySliderRef.current;

        if (visibilitySlider) {
            const { width } = visibilitySlider.getBoundingClientRect();
            return sliderStartPosition + 0.01 * visibilitySliderValue * (width - 30);
        }

        return sliderStartPosition;
    };

    return (
        <section id="comparison-section">
            <div id="new-coding">
                <p className="coding-style">
                    How you <em>can be</em> creating projects <i className="far fa-laugh-beam" />
                </p>

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
            </div>

            <div id="current-coding" style={{ clipPath: `polygon(${clipDistance()}px 0, 100% 0, 100% 100%, ${clipDistance()}px 100%)` }}>
                <p className="coding-style">
                    How you <em>are</em> creating projects <i className="far fa-frown" />
                </p>

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
            </div>

            <div id="coding-divider" ref={dividerRef} style={{ left: `${clipDistance() - 3}px` }} />

            <input
                type="range"
                id="visibility-slider"
                ref={visibilitySliderRef}
                value={visibilitySliderValue}
                onChange={e => setVisibilitySliderValue(parseFloat(e.target.value))}
                step={0.01}
                max={100}
                min={0}
            />

            <div id="drag-slider-hint" style={{ opacity: visibilitySliderValue > 2 ? 0 : 1 }}>
                Drag the slider <span>&nbsp;</span> <i className="fa fa-arrows-alt-h" />
            </div>
        </section>
    );
};
