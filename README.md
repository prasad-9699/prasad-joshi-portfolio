# Prasad Joshi — Premium 3D AI & Machine Learning Portfolio

A high-performance personal portfolio website built with **React 19**, **Three.js**, **React Three Fiber (@react-three/fiber)**, **@react-three/drei**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically for recruiters and engineering managers hiring for **AI Engineer**, **Machine Learning Engineer**, **Data Analyst**, and **Software Developer** roles.

---

## 🌟 Key Highlights & Architecture

- **Interactive 3D Quantum AI Core**: Rendered using React Three Fiber, featuring dynamic point lights, multi-axis counter-rotating orbital rings, procedural metallic shaders, floating particle constellations, and smooth mouse-parallax dampening.
- **Configurable 3D Model Loader**: Seamlessly switch between the high-performance procedural 3D core or your own `.glb` / `.gltf` model URL by editing a single variable in `src/data/portfolioData.ts`.
- **Graceful WebGL Fallback**: Automatically displays an animated holographic SVG/CSS representation if WebGL is unavailable on low-end hardware.
- **Genuine Engineering Metrics**: Showcases real evaluation metrics (Accuracy: 99.96%, Precision: 89.32%, Recall: 82.65%, F1: 85.86%, ROC-AUC: 98.26% on imbalanced fraud detection with SHAP explainability).
- **Verified Industry Roles**: Accurate distinction between completed internships (Pidilite Industries - PilTantra+ enterprise RAG with Qdrant & Llama 3) and upcoming commitments (DSP Asset Managers - AI Intern).
- **Case Study Modals**: In-depth technical architecture breakdown and key design decisions for all featured projects.
- **Real PDF Resume**: Embedded and downloadable at `/Prasad_Resume.pdf`.

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Custom geometric PJ monogram favicon
│   └── Prasad_Resume.pdf       # Verified downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx    # Academic foundation (VJTI), engineering pillars & system architecture
│   │   ├── ContactSection.tsx  # Direct email copy, working mailto dispatcher & social links
│   │   ├── EducationSection.tsx# VJTI B.Tech, 8.19 CGPA, minor, coursework, SIH 2025 leadership
│   │   ├── ExperienceTimeline.tsx # Vertical animated timeline (Pidilite & DSP Asset Managers)
│   │   ├── FeaturedProjects.tsx# High-fidelity project cards, metrics, live demos & case studies
│   │   ├── Footer.tsx          # Monogram, copyright, quick links & floating back-to-top
│   │   ├── HeroSection.tsx     # Typography reveal, stats, CTAs, 3D Canvas integration
│   │   ├── Icons.tsx           # Inline SVG brand icons (GitHub, LinkedIn, LeetCode)
│   │   ├── Navbar.tsx          # Frosted fixed navbar with active scroll section tracking
│   │   ├── ScrollProgress.tsx  # Gradient scroll progress bar
│   │   └── ThreeDScene.tsx     # Interactive 3D WebGL Canvas with R3F & error boundaries
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data file (URLs, projects, skills, 3D config)
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces & types
│   ├── App.tsx                 # Main layout
│   ├── index.css               # Design system tokens, glassmorphism & gradients
│   └── main.tsx                # React root mount
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛠️ How to Customize Your Portfolio

All personal information, links, and 3D configuration are centralized in:
👉 [`src/data/portfolioData.ts`](file:///c:/Users/PRASAD/OneDrive/Attachments/Desktop/portfolio/src/data/portfolioData.ts)

### 1. Replacing / Adding a Custom 3D Model (`.glb` / `.gltf`)
1. Place your `.glb` model inside the `public/` directory (e.g., `public/models/my-model.glb`) OR host it on a CORS-enabled server.
2. In `src/data/portfolioData.ts`, update `threeDConfig`:
   ```ts
   export const threeDConfig: ThreeDConfig = {
     customModelUrl: "/models/my-model.glb", // Put your custom path or URL here
     enableMouseInteraction: true,
     rotationSpeed: 0.8,
     bloomEffect: true
   };
   ```
3. If left empty (`""`), the site automatically renders the procedural 3D Quantum AI Core!

### 2. Updating Resume PDF
Replace the file at `public/Prasad_Resume.pdf` with any new version while keeping the same filename.

### 3. Updating External URLs & Social Links
In `src/data/portfolioData.ts`:
- `email`: `prasadjoshi395@gmail.com`
- `github`: `https://github.com/prasad-9699`
- `linkedin`: `https://www.linkedin.com/in/prasad-joshi-634784242/`
- `leetcode`: `https://leetcode.com/u/PrasadsJoshi_9699/`

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 📦 Building for Production

```bash
npm run build
```

The optimized, minified bundle will be generated in the `dist/` directory.

---

## 🚢 Free Deployment to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of 3D portfolio"
   git branch -M main
   git remote add origin https://github.com/prasad-9699/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your `portfolio` repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**. Your website will be live in under 60 seconds with a free `.vercel.app` domain and HTTPS!
