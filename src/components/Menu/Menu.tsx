import "./Menu.css"
import {createContext} from "react"
import {useToggle} from "../../hooks/useToggle"
import {ReactNode} from "react"

interface MenuContextType {
    open: boolean
    toggleOpen: () => void
}

const MenuContext = createContext<MenuContextType>(null!)
export {MenuContext}

interface MenuProps {
    children: ReactNode
    onOpen: () => void
}

export default function Menu({children, onOpen}: MenuProps): React.JSX.Element {
    const [open, toggleOpen] = useToggle({
        initialValue: false,
        onToggle: onOpen
    })
    
    return (
        <MenuContext.Provider value={{open, toggleOpen}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}