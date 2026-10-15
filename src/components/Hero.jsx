import texts from "../data/texts.js";
function Hero({lang}) {
    const t = texts[lang].hero
    return (
        <section id="hero">
            <img className="avatar" src={import.meta.env.BASE_URL + "images/albin.webp"} alt="Albin Karlsson" />
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
            <a className="button" href={import.meta.env.BASE_URL + t.cvFile} download="Albin-Karlsson-CV.pdf">{t.cvButton}</a>
        </section>
    )
}
export default Hero