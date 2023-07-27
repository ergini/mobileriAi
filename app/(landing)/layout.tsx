export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="h-full bg-black bg-opacity-70 overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>
        </main>
    )
}