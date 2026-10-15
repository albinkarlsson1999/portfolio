import texts from "../data/texts.js"
function Navbar({ lang, setLang }) {
    const t = texts[lang].nav
    return (
        <nav id="navbar">
            <a href="#hero">
                <span className="name-long">Albin Karlsson</span>
                <span className="name-short">AK</span>
            </a>
        <div className="nav-right">
            <ul>
                <li>
                    <a href="#about">
                        <span className="name-long">{t.about}</span>
                        <span className="name-short">Om</span>
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <span className="name-long">{t.projects}</span>
                        <span className="name-short">Projekt</span>
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        {t.contact}
                    </a>
                </li>
            </ul>

            <button
                className={`lang-toggle ${lang === "en" ? "is-en" : ""}`}
                onClick={() => setLang(lang === "sv" ? "en" : "sv")}
                role="switch"
                aria-checked={lang === "en"}
                aria-label="Språk / Language"
            >
                <span>SV</span>
                <span>EN</span>
            </button>
        </div>
        </nav>)
}

export default Navbar