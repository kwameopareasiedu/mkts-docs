import React, { useEffect, useRef, MouseEvent } from "react";
import "./guide-section.scss";

export const GuidesSection = (): any => {
    const guideTabsRef = useRef();
    const guideTabsContentRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", onWindowScroll);
        return () => window.removeEventListener("scroll", onWindowScroll);
    }, []);

    const onWindowScroll = (): void => {
        const guideTab: HTMLElement = guideTabsRef.current;
        const guideTabContent: HTMLElement = guideTabsContentRef.current;
        const guideContentButtons = guideTabContent ? Array.from(guideTabContent.children) : [];

        // Compute content width of guide content as window scrolls
        if (guideTab && guideTabContent) {
            const minGuideTabScroll = 76;
            const maxGuideTabScroll = 400;
            const minGuideTabContentWidth = 750;
            const maxGuideTabContentWidth = window.innerWidth;

            const guideTabScroll = guideTab.getBoundingClientRect().top;
            const clampedGuideTabScroll = Math.min(maxGuideTabScroll, Math.max(minGuideTabScroll, guideTabScroll));

            const gradient = (minGuideTabContentWidth - maxGuideTabContentWidth) / (maxGuideTabScroll - minGuideTabScroll);
            const guideContentWidth = gradient * clampedGuideTabScroll + maxGuideTabContentWidth - minGuideTabScroll * gradient;

            guideTabContent.style.width = guideContentWidth + "px";

            if (clampedGuideTabScroll === minGuideTabScroll) {
                guideTabContent.classList.add("fixed");
            } else guideTabContent.classList.remove("fixed");
        }

        // Determine active button className
        for (const button of guideContentButtons) {
            const sectionId = button.getAttribute("data-element-id");
            const section = document.querySelector(sectionId);

            if (section) {
                const { top, bottom } = section.getBoundingClientRect();
                if (top < 151 && bottom > 151) button.classList.add("active");
                else button.classList.remove("active");
            }
        }
    };

    const scrollToGuide = (e: MouseEvent<HTMLButtonElement>): void => {
        const element = e.target as HTMLButtonElement;
        const sectionId = element.getAttribute("data-element-id");
        const section = document.querySelector(sectionId);

        if (section) {
            window.scrollTo({
                behavior: "smooth",
                top: section.getBoundingClientRect().top + window.scrollY - 150,
                left: 0
            });
        }
    };

    return (
        <div id="guides-section">
            <div className="container text-center mb-5">
                <h1>Guides</h1>
                <p>mkts allows for the templating of four types of TypeScript applications</p>
            </div>

            <div id="guide-tabs" className="mb-5" ref={guideTabsRef}>
                <div id="guide-tabs-content" ref={guideTabsContentRef}>
                    <button className="btn" data-element-id="#static-frontend-guide" onClick={scrollToGuide}>
                        Static Frontend Apps
                    </button>
                    <button className="btn" data-element-id="#frontend-server-guide" onClick={scrollToGuide}>
                        Frontend Server Apps
                    </button>
                    <button className="btn" data-element-id="#api-server-guide" onClick={scrollToGuide}>
                        API Server Apps
                    </button>
                    <button className="btn" data-element-id="#full-stack-app-guide" onClick={scrollToGuide}>
                        Full Stack Apps
                    </button>
                </div>
            </div>
        </div>
    );
};
