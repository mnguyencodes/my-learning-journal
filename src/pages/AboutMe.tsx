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
                    <p className="u-text-padding">
                        It all began in June of 2024 when I had an unexpected and fateful reunion with an old acquaintance. They had recently passed the CCNA certification exam and, after some friendly small talk, they encouraged me to pursue the same path. Despite my initial doubts—having no prior knowledge of networking—and grappling with a mid-life crisis about my career direction, I took a leap of faith. Without overthinking it, I embarked on my journey to earn my first certification: the CCNA.
                    </p>
                    <p className="u-text-padding">
                        On November 16, 2024, I proudly passed the CCNA with flying colors. This accomplishment was a turning point for me--it made me realize that I'm capable of achieving anything I dedicate myself to. I spent the following week reflecting deeply on my next steps in life. Before long, I decided to return to programming, which is my foundation, as I hold a degree in computer science. My passion for video games initially reignited this spark, though game development isn't necessarily my goal. By November 23, 2024, I committed to pursuing a career as a full-stack developer.
                    </p>
                </article>
            </section>
        </main>
    )
}