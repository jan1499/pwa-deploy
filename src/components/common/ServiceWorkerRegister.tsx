"use client";

import { useEffect } from "react";


export default function ServiceWorkerRegister() {
    useEffect(() => {
        if ("serviceWorker" in navigator) {//checks if the browser supports service workers.
            navigator.serviceWorker
                .register("/service-worker.js")
                .then((registration) => {
                    console.log("Service Worker registered successfully:", registration);
                })
                .catch((error) => {
                    console.error("Service Worker registration failed:", error);
                });
        }

    }, []);

    return null;
}