import "./MainBlog.css"

export default function MainBlog() {
    return (
        <main className="u-padding">
            <article className="u-flex">
                <time dateTime="2025-01-12">January 12, 2025</time>
                <h1>My new journey as a bootcamp student</h1>
                <p>
                    After two months of learning Python in the Python Programming MOOC 2024 course, I've jumped into the Frontend Developer Career Path on Scrimba to start my journey to become a fullstack developer.
                </p>
                <img className="u-img-margin" src="/images/article-image-hero-large.jpg" />
                <section>
                    <h3>How I Got Started</h3>
                    <p className="u-text-padding">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis id cumque dolorem, consequatur necessitatibus quaerat dolor repellendus nesciunt nihil, nulla a incidunt repellat est deserunt hic ipsum assumenda voluptatibus. Minus!
                    </p>
                    <p className="u-text-padding">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At laboriosam dolor earum odit harum. Sed sequi vitae, doloremque accusantium facere dignissimos. Non eos cupiditate asperiores suscipit corrupti! Saepe, mollitia at!
                    </p>
                </section>
            </article>
        </main>
    )
}


