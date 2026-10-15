import texts from '../data/texts.js';
import contact from '../data/contact.js';
function Contact() {
    const t = texts.sv.contact
    const c = contact;
    return (
        <section id="contact">
            <h2>{t.title}</h2>
            <p>{t.text}</p>
            <a href={`mailto:${c.email}`}>{c.email}</a>
            <a href={c.github} target="_blank" rel="noopener noreferrer" >GitHub</a>
            <a href={c.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </section>)
}

export default Contact