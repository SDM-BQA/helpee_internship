export default function ProductLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <div>
            {children}
            <div className="">
                <h2>Featured products section</h2>
            </div>
        </div>
    )
}