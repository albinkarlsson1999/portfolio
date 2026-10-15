import texts from "../data/texts.js";
function Hero() {
    const t = texts.sv.hero
    return (
        <section id="hero">
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
            <a href="cv.pdf">{t.cvButton}</a>
        </section>
    )
}
export default Hero