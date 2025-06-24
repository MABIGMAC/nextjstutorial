"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientPage() {
    const { colors} = useTheme();
    const result = clientSideFunction();
    return (
        <div>
            <h1 style={{ color: colors.secondary }}>Client Page</h1>
            {result}
        </div>
    )
}