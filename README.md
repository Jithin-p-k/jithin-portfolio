# ⚡ Modern Full-Stack Engineer Portfolio

A sleek, responsive, and interactive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed with a modern dark-mode Bento Grid layout, ambient glassmorphism, interactive CLI terminal, and smooth micro-interactions.

---

## 🚀 Features

- **Modern Bento Grid Layout**: Minimalist dark theme with subtle glows, glassmorphism, and responsive grid arrangement.
- **Interactive Terminal Widget**: Functional CLI terminal supporting commands like `help`, `skills`, `projects`, `contact`, `hire`, `clear`, plus quick-action chip buttons.
- **Command Palette (`Ctrl+K` / `⌘K`)**: Fast global keyboard navigation to jump across sections, inspect the resume, or copy email.
- **Technical Deep Dive Modals**: Inspect detailed architecture flows, technical highlights, and benchmark metrics for production projects.
- **Project Filtering**: Categorized by `All`, `Full-Stack`, and `Backend & APIs`.
- **Interactive Tech Stack Matrix**: Categorized toolchain with proficiency levels, experience duration, and visual gradients.
- **Career Timeline**: Work history detailing real-world engineering achievements, metrics, and technology stacks.
- **Interactive Resume Modal**: Print or save full curriculum vitae directly as a PDF.
- **Live Local Time & Contact**: Real-time timezone clock, direct email copy with toast notification, and message dispatch with confetti.
- **Fully Customizable via a Single File**: All data, projects, links, skills, and bio are cleanly configured in `src/data/portfolioData.js`.

---

## 🛠️ Quick Start

### 1. Run the Development Server
```powershell
npm.cmd run dev
```
Open your browser at `http://localhost:5173`.

### 2. Build for Production
```powershell
npm.cmd run build
```
Production assets are generated in the `dist/` directory.

### 3. Preview Production Build
```powershell
npm.cmd run preview
```

---

## ✏️ How to Personalize for Yourself

All content is centralized in **[`src/data/portfolioData.js`](file:///c:/Users/USER/Downloads/Portfolio/src/data/portfolioData.js)**. You don't need to hunt through component files!

Simply open `src/data/portfolioData.js` and modify:
1. **`personalInfo`**:
   - `name`: Your name
   - `role`: Your target job title
   - `tagline`: Your headline / pitch
   - `bio`: Your summary
   - `location` & `timezone`: Your city and time zone (e.g., `'America/New_York'`, `'Asia/Kolkata'`, `'Europe/London'`)
   - `email`: Your direct email address
   - `socials`: Links to GitHub, LinkedIn, Twitter/X, and LeetCode
   - `stats`: Key metrics (years of experience, apps shipped, etc.)
2. **`skillsData`**:
   - Add, edit, or categorize your skills (React, Node, Go, Python, AWS, Docker, etc.)
3. **`projectsData`**:
   - Add your own projects, tech tags, metrics, architecture diagrams, and links.
4. **`experienceData`**:
   - Add your work history, companies, dates, and key accomplishments.

---

## 🌐 Free Instant Deployment

### Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**!

### Netlify
1. Drag and drop the `dist/` folder into Netlify Drop, or link your GitHub repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
