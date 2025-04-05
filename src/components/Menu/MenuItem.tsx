import "./_Menu.css"

import {Link} from "react-router-dom"

export default function MenuItem({to, children}) {
    return (
        <Link className="menu-item-link" to={to}>{children}</Link>   
    )
}