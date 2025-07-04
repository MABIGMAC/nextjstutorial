import Card from "@/components/card";

export default function ComplexDashboardLayout({children, users, revenue, notifications}:{ children: React.ReactNode; users: React.ReactNode; revenue: React.ReactNode; notifications: React.ReactNode; login: React.ReactNode }) {
    const isLoggedIn = true;
    return isLoggedIn? (
        <>
        <div>
            {children}

        </div>
        <div style={{ display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>{users}</div>
                <div>{revenue}</div>

            </div>
            <div style={{display: 'flex', flex: 1}}>
                {notifications} </div>
        </div>
        </>
    ): (
        <Card>
            login
        </Card>
    )
}