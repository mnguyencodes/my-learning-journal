import "./Menu.css"
import {useContext} from "react"
import {MenuContext} from "./Menu"
import {ReactNode} from "react"

interface MenuDropdownProps {
    children: ReactNode
}

export default function MenuDropdown({children}: MenuDropdownProps) {
    const {open} = useContext(MenuContext)
    return open && (
        <div className="menu-dropdown">
            {children}
        </div>
    )
}