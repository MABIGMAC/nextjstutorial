"use client";

import { useTheme } from "@/components/theme-provider";

export default function ClientPage() {
    const { colors} = useTheme();
    return (
        <div>
            <h1 style={{ color: colors.secondary }}>Client Page</h1>
            Client Page 
        </div>
    )
}