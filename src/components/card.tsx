export default function Card({children}: {children: React.ReactNode}) {
    const style = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",}
    
        return <div style={style}> {children}</div>

} 