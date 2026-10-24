# Aju — Personal Portfolio

A modern, dark-themed personal portfolio website for **Aju**, a first-year B.Tech Artificial Intelligence & Data Science student.

Built with **React + Vite + TypeScript + Tailwind CSS** and **Lucide React** icons.

## Features

- Dark theme with glowing accents and smooth scroll-reveal animations
- Sections: Hero, About, Skills, Projects, Contact, plus a footer
- Fully responsive (mobile and desktop)
- Animated typewriter role text and active-section nav highlighting
- Clean, component-based structure

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── components/      # Navbar, Hero, About, Skills, Projects, Contact, Footer
├── hooks/          # useScrollReveal, useActiveSection
├── App.tsx         # Root component
├── index.css       # Tailwind layers + custom utilities
└── main.tsx        # Entry point
```

## Customizing

- **Content** (name, bio, skills, projects, contact details): edit the component files in `src/components/`.
- **Colors & fonts**: adjust `tailwind.config.js` and `src/index.css`.
- **Social links**: update the `href` values in `Hero.tsx` and `Footer.tsx`.

---

## Saving the Project to GitHub

### One-time setup

1. **Create an empty repo on GitHub**
   Go to [github.com/new](https://github.com/new), name it (e.g. `portfolio`), and click **Create repository**. Don't initialize it with a README — leave it empty.

2. **Turn this project into a git repo** (run these commands in the project folder):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Aju's portfolio"
   ```

3. **Connect it to GitHub** (replace `<your-username>` and `<repo-name>`):
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

### When you make changes later

```bash
git add .
git commit -m "Describe what you changed"
git push
```

### Optional: deploy for free with GitHub Pages or Vercel

- **Vercel (recommended)**: import the repo at [vercel.com](https://vercel.com) — it auto-detects Vite and deploys instantly.
- **Netlify**: drag-and-drop the `dist/` folder after `npm run build`, or connect the repo.
- **GitHub Pages**: run `npm run build`, then publish the `dist/` folder via the repo Settings → Pages.
