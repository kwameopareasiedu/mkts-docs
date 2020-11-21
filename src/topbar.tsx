import React from "react";
import "./topbar.scss";

export const Topbar = (): any => {
    return (
        <div id="topbar" className="d-flex align-items-center">
            <h1>mkts</h1>
            <div className="spacer" />
            <a
                className="btn btn-outline-primary btn-lg mr-2"
                href="https://github.com/kwameopareasiedu/mkts"
                rel="noreferrer noopener"
                target="_blank">
                <i className="fa fa-github mr-2" />
                Github
            </a>
            <a
                className="btn btn-outline-primary btn-lg mr-2"
                href="https://www.patreon.com/kwameopareasiedu"
                rel="noreferrer noopener"
                target="_blank">
                <i className="fab fa-patreon mr-2" />
                Patreon
            </a>
            <a className="btn btn-outline-primary" href="https://github.com/kwameopareasiedu" rel="noreferrer noopener" target="_blank">
                <i className="fa fa-user mr-2" />
                Me
            </a>
        </div>
    );
};
