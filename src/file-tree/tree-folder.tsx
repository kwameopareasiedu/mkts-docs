import React from "react";
import Folder from "../assets/folder.svg";
import "./tree-folder.scss";

interface ITreeFolder {
    label: string;
    children?: any;
    onClick?: (description: any) => void;
}

export const TreeFolder = ({ label, children, onClick }: ITreeFolder): any => {
    const childArray = React.Children.toArray(children);

    const interceptOnClick = (): void => {
        if (onClick) onClick(childArray[0]);
    };

    return (
        <div className="tree-folder">
            <div className="d-flex align-items-center" onClick={interceptOnClick}>
                <img src={Folder} alt="Folder" />
                <p className="tree-name mb-0">{label}</p>
            </div>

            {children && <div className="content">{childArray.slice(1)}</div>}
        </div>
    );
};
