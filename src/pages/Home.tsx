import "./Home.css"
import {Link} from "react-router-dom"
import {blogsData} from "../utils/data"

export default function Home() {

    const blogs = blogsData.map(blog=>{
        return <article key={blog.id}>
            <div className="home-blog-container">
                <Link className="img-link" to={blog.href}><img src={blog.image}/></Link>
                <div className="home-blog-text">
                    <time>{blog.date}</time>
                    <h2 className="m0">{blog.title}</h2>
                    <p className="m0">{blog.description}</p>
                </div>
            </div>
        </article>
    })

    return (
        <main>
            <Link className="img-link" to="/main-blog">
                <section className="home-hero">
                    <time dateTime="2025-01-12">January 12, 2025</time>
                    <h1>My new journey as a bootcamp student</h1>
                    <p>
                        After two months of learning Python in the Python Programming MOOC 2024 course, 
                        I've jumped into the Frontend Developer Career Path on Scrimba to start my 
                        journey to become a fullstack developer.
                    </p>
                </section>
            </Link>
            <section className="home-blog-main">
                {blogs}
            </section>
            <button className="view-more-btn">View More</button>
        </main>
    )
}
