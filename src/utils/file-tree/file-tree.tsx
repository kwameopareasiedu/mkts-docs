import React, { useEffect, useRef, useState } from "react";
import "./file-tree.scss";

interface ITreeViewer {
    children: (fn: (path: string, description: any) => void) => any;
}

export const FileTree = ({ children }: ITreeViewer): any => {
    const startScrollPosition = 287;
    const [selected, setSelected] = useState(null);
    const cardParentRef = useRef();
    const cardRef = useRef();

    const interceptSetSelected = (path: string, description: any): void => {
        if (path) setSelected({ path, description });
        else setSelected(null);
    };

    const onWindowScroll = () => {
        const cardParent: HTMLElement = cardParentRef.current;
        const card: HTMLElement = cardRef.current;

        if (cardParent && card) {
            const { top: parentTop, bottom: parentBottom } = cardParent.getBoundingClientRect();

            if (parentBottom > startScrollPosition + card.clientHeight) {
                if (parentTop <= startScrollPosition) {
                    card.classList.add("fixed");
                    card.style.top = Math.abs(parentTop - startScrollPosition) + "px";
                } else {
                    card.classList.remove("fixed");
                    card.style.top = "0";
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onWindowScroll);
        return () => window.removeEventListener("scroll", onWindowScroll);
    }, []);

    return (
        <div className="file-tree container-fluid">
            <div className="row">
                <div className="col-6">{children(interceptSetSelected)}</div>

                <div ref={cardParentRef} className="right-div col-6">
                    <div ref={cardRef} className="card">
                        {selected ? (
                            <div className="card-body">
                                <React.Fragment>
                                    <h4>{selected.path}</h4>
                                    <hr />
                                    {selected.description}
                                </React.Fragment>
                            </div>
                        ) : (
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <i>Click a file/folder to view it&apos;s description</i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
