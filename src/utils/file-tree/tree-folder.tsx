import React from "react";
import Folder from "../../assets/folder.svg";
import "./tree-folder.scss";

interface ITreeFolder {
    label: string;
    children?: any;
    onClick?: () => void;
}

export const TreeFolder = ({ label, children, onClick }: ITreeFolder): any => {
    return (
        <div className="tree-folder">
            <div className="d-flex align-items-center" onClick={onClick}>
                <img src={Folder} alt="Folder" />
                <p className="tree-name mb-0">{label}</p>
            </div>

            {children && <div className="content">{children}</div>}
        </div>
    );
};
