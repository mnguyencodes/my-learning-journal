import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <div className="container">
                    <a href="/index.html"><img src="/images/logo.png" alt="My Learning Journal logo" /></a>
                    <a href="/index.html"><p>My Learning Journal</p></a>
                </div>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/about-me.html">About Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

