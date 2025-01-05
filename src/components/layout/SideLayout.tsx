"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react";
import BoardSideBar from "./sidebar/BoardSideBar";

type Props = {
    children?: ReactNode;
    title?: string;
};

const SideLayout = ({ children }: Props) => {
    const [sideBar, setSideBar] = useState<boolean>(true);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node)
            ) {
                if (window.innerWidth < 992) {
                    setSideBar(false);
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef]);

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 998) {
                setSideBar(true);
            } else {
                setSideBar(false);
                setTimeout(() => {
                }, 2000);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleLinkClick = () => {
        if (window.innerWidth < 992) {
            setSideBar(false);
        }
    };

    return (
        <div className="default-layout-container position-relative">
            <div ref={popupRef}>
                <BoardSideBar showBar={sideBar} handleLinkClick={handleLinkClick} />
            </div>
            <div className={`board-main position-relative  ${sideBar ? "container bg-white" : "default-close"}`}>
                {children}
            </div>
        </div>
    );
};

export default SideLayout;
