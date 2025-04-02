import "./Header.css"
import Menu from "./Menu/index"
import {Link} from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

import {useState} from "react"

export default function Header() {

    const links = [
        {href: "", text: "Home"},
        {href: "about-me", text: "About Me"}
    ]

    // To be rendered only for wider screens.
    // <ul>
    //     <li><Link to="">Home</Link></li>
    //     <li><Link to="about-me">About Me</Link></li>
    // </ul>


    // Used for testing purposes
    const [count, setCount] = useState(0)
    function increment() {
        
        // setCount(prevCount => prevCount++)
        setCount(count + 1)
        console.log(`The current count is: ${count}`)
    }

    return (
        <>
        <header>
            <nav>

                <Link className="nav-item-logo" to=".">
                    <div className="container">
                        <img src="/images/logo.png" alt="My Learning Journal logo" />
                        <p>My Learning Journal</p>
                    </div>
                </Link>
                {/* <h2 className="text-blue-500">Test</h2> */}

                <NavigationMenu className="nav-menu">
                    <NavigationMenuList className="nav-menu-list">
                        <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-red-500">Item One</NavigationMenuTrigger>
                        <NavigationMenuContent className="nav-menu-content">
                            <NavigationMenuLink>Link</NavigationMenuLink>
                            <NavigationMenuLink>Link 2</NavigationMenuLink>
                            <NavigationMenuLink>Link 3</NavigationMenuLink>
                            <NavigationMenuLink>Link 4</NavigationMenuLink>
                            <NavigationMenuLink>Link 5</NavigationMenuLink>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>



            </nav>
        </header>

        </>
    )
}
