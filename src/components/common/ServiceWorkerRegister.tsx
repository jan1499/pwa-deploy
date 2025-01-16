"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
    useEffect(() => {
        // if ("serviceWorker" in navigator) {
        //     navigator.serviceWorker
        //         .register("/service-worker.js")
        //         .then((registration) => {
        //             console.log("Service Worker registered with scope:", registration.scope);
        //         })
        //         .catch((error) => {
        //             console.error("Service Worker registration failed:", error);
        //         });
        // }

        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
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