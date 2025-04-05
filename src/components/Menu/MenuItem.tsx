import "./Menu.css"
import {Link} from "react-router-dom"
import {ReactNode} from "react"

interface MenuItemProps {
    children: ReactNode
    to: string
}

export default function MenuItem({children, to}: MenuItemProps) {
    return (
        <Link className="menu-item-link" to={to}>{children}</Link>   
    )
}