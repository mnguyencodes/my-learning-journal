import "./Header.css"
import * as Menu from "./Menu/index"
import {Link} from "react-router-dom"


import {useState} from "react"

export default function Header() {

    // const links = [
    //     {href: "", text: "Home"},
    //     {href: "about-me", text: "About Me"}
    // ]


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
                <div className="container">
                    <Link to="."><img src="/images/logo.png" alt="My Learning Journal logo" /></Link>
                    <Link to="."><p>My Learning Journal</p></Link>
                </div>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="about-me">About Me</Link></li>
                </ul>
            </nav>
        </header>
        <Menu.Menu onOpen={increment}>
            <Menu.MenuIcon />
            <Menu.MenuDropdown>
                <Menu.MenuItem to=".">Item1</Menu.MenuItem>
                <Menu.MenuItem to=".">Item2</Menu.MenuItem>
                <Menu.MenuItem to=".">Item3</Menu.MenuItem>
            </Menu.MenuDropdown>
        </Menu.Menu>
        </>
    )
}

