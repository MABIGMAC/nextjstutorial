import Card from "@/components/card";
import Link from "next/link";

export default function NotificationsAnalytics() {
    return <Card>
        <div>
        Notifications

        </div>
        <div>
            <Link href={"/complex-dashboard/archived"}>Archived</Link>
        </div>

    </Card>
}