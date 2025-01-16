"use client"

import ServiceWorkerRegister from "@/components/common/ServiceWorkerRegister";
import MainLayout from "@/components/layout/MainLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <MainLayout>
                    <ServiceWorkerRegister />
                    {children}
                </MainLayout>
            </body>
        </html>
    )
}
