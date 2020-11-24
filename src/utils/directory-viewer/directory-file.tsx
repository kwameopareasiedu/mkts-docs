import React from "react";
import File from "../../assets/file.svg";
import "./directory-file.scss";

interface IDirectoryFile {
    label: string;
    onClick?: () => void;
}

export const DirectoryFile = ({ label, onClick }: IDirectoryFile): any => {
    return (
        <div className="directory-file" onClick={onClick}>
            <div className="d-flex align-items-center">
                <img src={File} alt="Folder" className="mr-2" />
                <p className="directory-name mb-0">{label}</p>
            </div>
        </div>
    );
};
