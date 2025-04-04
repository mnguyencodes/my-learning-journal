import "./_Menu.css"
import clsx from "clsx"
import {NavigationMenuContext} from "../ui/navigation-menu"
import {useContext} from "react"

export default function NavIcon() {

    //open -> dropdownmenu
    //toggleOpen -> button
    const {open} = useContext(NavigationMenuContext)
    const {toggleOpen} = useContext(NavigationMenuContext)

	// return (
	// 	<NavigationMenu.Link asChild active={isActive}>
	// 		<NextLink href={href} className="NavigationMenuLink" {...props} />
	// 	</NavigationMenu.Link>

    const allClasses = clsx("nav-icon", open ? "open" : "")

    return (
        <div onClick={toggleOpen} className={allClasses} aria-label="Menu" aria-controls="navigation" aria-expanded="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}


