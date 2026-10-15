# Portfolio

My personal portfolio website, built with React and Vite and deployed to GitHub Pages.

🔗 **Live:** https://albinkarlsson1999.github.io/portfolio/

## Features

- **Bilingual** – switch between Swedish and English with a toggle in the navbar
- **Data-driven** – texts and projects live in separate data files, so adding a project means adding one object to an array
- **Responsive** – CSS Grid layout that adapts from desktop to mobile without breakpoints for the project cards
- **Image lightbox** – click a project image to view it full size, built on the native `<dialog>` element
- **Accessible** – semantic HTML, alt texts, ARIA attributes and visible keyboard focus
- **Automatic deployment** – every push to `main` is built and published with GitHub Actions

## Tech

React · Vite · CSS · GitHub Actions · GitHub Pages

## Project structure

src/
├── components/ # Navbar, Hero, About, Projects, ProjectCard, Contact, Footer
├── data/ # texts.js (sv/en), projects.js, contact.js
├── App.jsx # Holds the language state
└── index.css # All styles

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173/portfolio/

## License

The source code is licensed under the [MIT License](LICENSE).
Personal content – texts, images and the CV – is © Albin Karlsson and may not be reused without permission.
