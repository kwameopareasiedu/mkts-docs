import React from "react";
import Folder from "../../assets/folder.svg";
import "./directory-folder.scss";

interface IDirectoryFolder {
    label: string;
    children?: any;
    onClick?: () => void;
}

export const DirectoryFolder = ({ label, children, onClick }: IDirectoryFolder): any => {
    return (
        <div className="directory-folder">
            <div className="d-flex align-items-center" onClick={onClick}>
                <img src={Folder} alt="Folder" />
                <p className="directory-name mb-0">{label}</p>
            </div>

            {children && <div className="content">{children}</div>}
        </div>
    );
};
