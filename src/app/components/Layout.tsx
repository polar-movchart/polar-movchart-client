'use client';

import HomeButton from "./HomeButton";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <HomeButton />
            <main>{children}</main>
        </div>
    )
}
