import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <div className="container">
                    <Link to="/index.html"><img src="/images/logo.png" alt="My Learning Journal logo" /></Link>
                    <Link to="/index.html"><p>My Learning Journal</p></Link>
                </div>
                <ul>
                    <li><Link to="/index.html">Home</Link></li>
                    <li><Link to="/about-me.html">About Me</Link></li>
                </ul>
            </nav>
        </header>
    )
}

