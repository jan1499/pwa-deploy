// src/components/common/ServiceWorkerRegister.tsx
"use client";

import { useEffect } from "react";

const ServiceWorkerRegister = () => {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/sw.js")
                .then((registration) => {
                    console.log("Service Worker registered with scope:", registration.scope);
                })
                .catch((error) => {
                    console.error("Service Worker registration failed:", error);
                });
        }
    }, []);

    return null; // No UI is rendered by this component
};

export default ServiceWorkerRegister;
