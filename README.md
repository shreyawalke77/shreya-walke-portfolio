# Shreya Walke — Personal Portfolio Website
> **Turning Ideas Into Digital Solutions.**  
> A premium, dynamic, and fully interactive developer portfolio designed and built for **Shreya Shantaram Walke** (Frontend Developer | Computer Engineering Student | AI/ML Enthusiast).

---

## 🌟 Executive Summary

This portfolio website is crafted to stand out to engineering leaders, technical recruiters, and talent acquisition teams at companies like **Google, Microsoft, Amazon, Deloitte, TCS, Infosys, Accenture**, and high-growth technology startups.

It highlights:
- **Real-World Project Portfolios:** Computer vision traffic surveillance (YOLOv8, OpenCV, ByteTrack), SmartYatra rural logistics platform, local LLM RAG chatbots (Ollama, Llama 3), and relational database systems.
- **Verified Competitive Accolades:** Top 20 Overall (out of 100+ teams) and Top 3 in Transportation Tech Domain at the **Smart Kopargaon Hackathon 2026** (Team Ecoverse).
- **Industry Internships:** Frontend Developer Intern at **Athenura** and Google AI-ML Virtual Intern at **AICTE EduSkills**.
- **Student Leadership & Governance:** Elected **Chief Minister** for Career Sansad 2026–27, **GirlScript Summer of Code (GSSoC)** Ambassador, and NCC Sergeant ('A' Certificate).
- **Complete Transparency:** Grounded in genuine metrics with zero fabricated statistics, testimonials, or company logos.

---

## 🚀 Live Demo & Tech Stack

| Technology | Role |
| :--- | :--- |
| **React 18** | Modern Component Architecture & State Management |
| **TypeScript** | Strict Type Safety & Clean Interfaces |
| **Vite 6** | Ultra-Fast Bundling, HMR & Optimized Production Build |
| **Tailwind CSS 3** | Bespoke Charcoal/Purple Futuristic Aesthetics & Glassmorphism |
| **Lucide React** | High-Quality Modern Vector Iconography |
| **HTML5 & CSS3** | Semantic SEO, Accessibility & Print-Ready Resume Styling |

---

## 📁 Repository Structure

```
shreya-portfolio/
├── dist/                          # Production-ready build artifacts
├── public/
│   └── assets/
│       └── shreya.jpg             # Shreya's professional uploaded portrait
├── src/
│   ├── components/
│   │   ├── About.tsx              # Professional introduction & core engineering pillars
│   │   ├── BackgroundEffects.tsx  # Dynamic particle constellation & glowing mesh gradients
│   │   ├── Certifications.tsx     # Credential cards & interactive certificate preview modal
│   │   ├── Contact.tsx            # Fully functional contact form with client validation & mailto fallback
│   │   ├── Education.tsx          # B.Tech Computer Engineering & academic timeline
│   │   ├── Experience.tsx         # Vertical interactive career timeline (Athenura & Google EduSkills)
│   │   ├── Footer.tsx             # Personal branding, credits, and back-to-top button
│   │   ├── Hackathons.tsx         # Smart Kopargaon 2026 showcase (Team Ecoverse, Top 3 Domain)
│   │   ├── Hero.tsx               # Impressive above-the-fold hero with typewriter titles & profile frame
│   │   ├── Highlights.tsx         # Count-up animated stat cards for verified milestones
│   │   ├── Leadership.tsx         # Chief Minister Career Sansad, GSSoC, NCC & SPPU QIP 1st prize
│   │   ├── Navbar.tsx             # Sticky blurred nav, active section indicator, progress bar & mobile menu
│   │   ├── ProjectModal.tsx       # Deep-dive architecture modal with "My Direct Contribution"
│   │   ├── Projects.tsx           # Category & search-filtered showcase of 9+ projects
│   │   └── ResumeModal.tsx        # In-browser ATS-formatted resume with 1-click Print/PDF save
│   ├── data/
│   │   └── portfolioData.ts       # Centralized, single-source-of-truth data file
│   ├── types/
│   │   └── index.ts               # TypeScript type definitions
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Custom scrollbar, glassmorphic utilities & animations
│   └── main.tsx                   # Entry point
├── index.html                     # HTML head, Google Fonts (Inter, JetBrains Mono) & metadata
├── package.json                   # Dependencies and build scripts
├── tailwind.config.js             # Custom dark themes, accents and animations
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🛠️ How to Run Locally

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm**

### Step-by-Step Instructions

1. **Navigate to the project folder:**
   ```bash
   cd "C:\Users\shrey\.gemini\antigravity\scratch\shreya-portfolio"
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to: `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```
   This generates an optimized static bundle in the `dist/` directory ready for deployment.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Shreya Walke Portfolio Website"
   git branch -M main
   git remote add origin https://github.com/shreyawalke77/shreya-walke-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"New Project"**, import `shreya-walke-portfolio`.
4. Leave build settings as default:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **"Deploy"**. Your website will be live in under 60 seconds with SSL and global CDN!

### Option 2: Deploy to GitHub Pages
1. In `vite.config.ts`, verify `base: './'`.
2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings under **Pages**, select branch `gh-pages` and save.

---

## 📝 Customization & Updates

All personal data, projects, links, and content are centralized in one single file for effortless updates:

- **File Path:** `src/data/portfolioData.ts`
  - Update email, LinkedIn, or GitHub handles under `PERSONAL_INFO`.
  - Add or edit projects, code repositories, or live demo URLs under `PROJECTS`.
  - Update academic CGPA / percentages under `EDUCATION_DATA`.
  - Add new skills or certifications under `SKILL_CATEGORIES` and `CERTIFICATIONS`.
  - Replace your profile photo anytime by replacing `public/assets/shreya.jpg` or using the in-browser change button on the Hero card.

### Contact Form Backend Setup
The contact form currently validates inputs and opens the user's default email client pre-populated with the subject and message.  
To connect a direct backend (so emails arrive automatically to your inbox without opening the user's mail client), you can use [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/):
1. Obtain a free Access Key from `web3forms.com`.
2. In `src/components/Contact.tsx`, send a `fetch("https://api.web3forms.com/submit", ...)` POST request with your key.

---

## 📬 Contact & Verification

- **Developer:** Shreya Shantaram Walke
- **Email:** [shreyawalke060905@gmail.com](mailto:shreyawalke060905@gmail.com)
- **LinkedIn:** [linkedin.com/in/shreya-walke](https://linkedin.com/in/shreya-walke)
- **GitHub:** [github.com/shreyawalke77](https://github.com/shreyawalke77)
- **Location:** Chandwad, Maharashtra, India
