
# QuantUM Website (Static)

A sleek, lightweight website for the University of Michigan's undergraduate quantum organization, built as plain HTML/CSS/JS for easy GitHub Pages hosting.

## Structure
- `index.html` — Home (about, offerings, exec board, links)
- `events.html` — Upcoming events
- `projects.html` — Project team + Quantum Arcade
- `highlights.html` — 2024 Qiskit Fall Fest recap
- `speakers.html` — Past speaker series
- `css/style.css` — Maize & Blue theme
- `js/main.js` — Tiny enhancement
- `assets/` — Logo, hero, gallery placeholders

## Replace content
- Swap your logo at `assets/logo.png`. Keep the filename the same.
- Replace hero & gallery images: `assets/hero-quantum.jpg`, `assets/hack-*.jpg`.
- Update links (Instagram, Calendar, RSVP, Meeting Slides) to your exact URLs in the HTML files.

## Deploy on GitHub Pages (no build step)
1. Create a new GitHub repo, e.g. `quantum-site`.
2. Upload these files (or `git init && git add . && git commit -m "Initial" && git branch -M main && git remote add origin ... && git push -u origin main`).
3. In your repository settings → **Pages**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` and `/ (root)`
4. Save. Your site will appear at `https://<your-username>.github.io/quantum-site/`

## Local preview
Open `index.html` in your browser. Everything is static.

## Customization ideas
- Add an `assets/schedule.pdf` and link it from Events.
- Create `team.html` with photos and bios.
- Add a simple contact form using Formspark or Netlify Forms.
