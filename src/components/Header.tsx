import "./Header.css"
import Menu from "./Menu"
import {Link} from "react-router-dom"

export default function Header() {
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
        <Menu />
        </>
    )
}

