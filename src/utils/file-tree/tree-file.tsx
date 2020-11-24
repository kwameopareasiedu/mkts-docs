import React from "react";
import File from "../../assets/file.svg";
import "./tree-file.scss";

interface ITreeFile {
    label: string;
    onClick?: () => void;
}

export const TreeFile = ({ label, onClick }: ITreeFile): any => {
    return (
        <div className="tree-file" onClick={onClick}>
            <div className="d-flex align-items-center">
                <img src={File} alt="Folder" className="mr-2" />
                <p className="tree-name mb-0">{label}</p>
            </div>
        </div>
    );
};
