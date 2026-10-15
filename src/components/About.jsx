import texts from "../data/texts.js"
function About() {
    const a = texts.sv.about
    return (
        <section id="about">
            <h2>{a.title}</h2>
            {a.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </section>
    )
}

export default About