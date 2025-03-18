import "./AboutMe.css"

export default function AboutMe() {
    return (
        <main>
            <section className="u-padding hero-about-me">
                <h1>Welcome to Mark's Learning Journal</h1>
                <h2>The CCNA Changed My Life</h2>
                <img src="/images/ccna.png" alt="CCNA"/>
            </section>
            <section className="u-padding">
                <article>
                    <h3>The Start of my Learning Journey</h3>
                    <p>
                        It all began in June of 2024 when I had an unexpected and fateful reunion with an old acquaintance. They had recently passed the CCNA certification exam and, after some friendly small talk, they encouraged me to pursue the same path. Despite my initial doubts—having no prior knowledge of networking—and grappling with a mid-life crisis about my career direction, I took a leap of faith. Without overthinking it, I embarked on my journey to earn my first certification: the CCNA.
                    </p>
                </article>
            </section>
        </main>
    )
}