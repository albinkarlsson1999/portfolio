import texts from '../data/texts.js';
import contact from '../data/contact.js';
function Contact({ lang }) {
    const t = texts[lang].contact
    const c = contact;
    return (
        <section id="contact">
            <h2>{t.title}</h2>
            <p>{t.text}</p>
            <div className="contact-links">
                <a className="button" href={`mailto:${c.email}`}>{c.email}</a>
                <a className="button" href={c.github} target="_blank" rel="noopener noreferrer" >GitHub</a>
                <a className="button" href={c.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </section>)
}

export default Contact