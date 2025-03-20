import "./Footer.css"

export default function Footer() {
    
    const current_year = new Date().getFullYear()

    return (
        <footer>
            <h2 className="m0">My Learning Journal</h2>
            <p id="copyright" className="m0">Copyright ©{current_year}</p>
        </footer>
    )
}

