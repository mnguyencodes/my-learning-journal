import "./Header.css"
import Menu from "./Menu/index"
import {Link} from "react-router-dom"


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
                <Link to=".">
                    <div className="container">
                        <img src="/images/logo.png" alt="My Learning Journal logo" />
                        <p>My Learning Journal</p>
                    </div>
                </Link>
                <Menu.Menu onOpen={increment}>
                    <Menu.MenuIcon />
                    <Menu.MenuDropdown>
                        <Menu.MenuItem to=".">Item1</Menu.MenuItem>
                        <Menu.MenuItem to=".">Item2</Menu.MenuItem>
                        <Menu.MenuItem to=".">Item3</Menu.MenuItem>
                    </Menu.MenuDropdown>
                </Menu.Menu>
            </nav>
        </header>

        </>
    )
}
