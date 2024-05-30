'use client';

import { RemarksProvider } from "./remarksContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <RemarksProvider>{children}</RemarksProvider>
    );
}