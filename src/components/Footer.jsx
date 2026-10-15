import texts from "../data/texts.js"
function Footer({ lang }) {
    const f = texts[lang].footer

    return (
        <footer className="footer">
            <p>© {new Date().getUTCFullYear()} Albin Karlsson, {f.rights}</p>
            <p>{f.builtWith} · <a href="https://github.com/albinkarlsson1999/portfolio" target="_blank" rel="noopener noreferrer">{f.source}</a></p>

        </footer>
    )
}
export default Footer;