"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react";
import SideBar from "./sidebar/SideBar";
import Header from "./header/Header";

type Props = {
    children?: ReactNode;
    title?: string;
};

const DefaultLayout = ({ children }: Props) => {
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
        <>
            <div className="default-layout-container ">
                <div ref={popupRef}>
                    <SideBar showBar={sideBar}  handleLinkClick={handleLinkClick} />
                </div>
                <main className={`position-relative ${sideBar ? "container bg-white" : "default-close"}`}>
                    <Header toggleSideBar={toggleSideBar} />
                    <div>
                        <div>{children}</div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default DefaultLayout;
