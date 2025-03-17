import "./Home.css"

export default function Home() {
    return (
        <main>
            <a className="img-link" href="/main-blog.html"><section className="home-hero">
                <time dateTime="2025-01-12">January 12, 2025</time>
                <h1>My new journey as a bootcamp student</h1>
                <p>
                    After two months of learning Python in the Python Programming MOOC 2024 course, 
                    I've jumped into the Frontend Developer Career Path on Scrimba to start my 
                    journey to become a fullstack developer.
                </p>
            </section></a>
            <section className="home-blog-main">
                <article>
                    <div className="home-blog-container">
                        <a className="img-link" href="#"><img src="/images/article-image-01.jpg" /></a>
                        <div className="home-blog-text">
                            <time dateTime="2000-01-01">January 1, 2000</time>
                            <h2 className="m0">Blog 1</h2>
                            <p className="m0">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repellendus 
                                error quia delectus nesciunt distinctio magni eveniet hic eum tempora maxime 
                                perferendis facilis in possimus illo dicta, aperiam doloribus velit.
                            </p>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="home-blog-container">
                        <a className="img-link" href="#"><img src="/images/article-image-02.jpg" /></a>
                        <div className="home-blog-text">
                            <time dateTime="2000-01-01">January 1, 2000</time>
                            <h2 className="m0">Blog 2</h2>
                            <p className="m0">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repellendus 
                                error quia delectus nesciunt distinctio magni eveniet hic eum tempora maxime 
                                perferendis facilis in possimus illo dicta, aperiam doloribus velit.
                            </p>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="home-blog-container">
                        <a className="img-link" href="#"><img src="/images/article-image-03.jpg" /></a>
                        <div className="home-blog-text">
                            <time dateTime="2000-01-01">January 1, 2000</time>
                            <h2 className="m0">Blog 3</h2>
                            <p className="m0">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repellendus 
                                error quia delectus nesciunt distinctio magni eveniet hic eum tempora maxime 
                                perferendis facilis in possimus illo dicta, aperiam doloribus velit.
                            </p>
                        </div>
                    </div>
                </article>
            </section>
            <div className="home-view-more-section">
                <a href="#" target="_blank" rel="noreferrer noopener">View More</a>
            </div>
        </main>
    )
}