import React from "react";
import File from "../assets/file.svg";
import "./tree-file.scss";

interface ITreeFile {
    label: string;
    children?: any;
    onClick?: (description: any) => void;
}

export const TreeFile = ({ label, onClick, children }: ITreeFile): any => {
    const interceptOnClick = (): void => {
        if (onClick) onClick(children);
    };

    return (
        <div className="tree-file" onClick={interceptOnClick}>
            <div className="d-flex align-items-center">
                <img src={File} alt="Folder" className="mr-2" />
                <p className="tree-name mb-0">{label}</p>
            </div>
        </div>
    );
};
