import type React from "react"

interface IContainer{
children: React.ReactNode
}

function Container({children}: IContainer) {
    return (
        <div className="container mx-auto">
            <div>
                {children}
            </div>
        </div>
    )
}
export default Container;