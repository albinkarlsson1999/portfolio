import texts from "../data/texts.js"
function Navbar() {
    const t = texts.sv.nav
    return (
        <nav id="navbar">
            <a href="#hero">Albin Karlsson</a>
            <ul>
                <li><a href="#about">{t.about}</a></li>
                <li><a href="#projects">{t.projects}</a></li>
                <li><a href="#contact">{t.contact}</a></li>
            </ul>
        </nav>)
}

export default Navbar