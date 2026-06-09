# Jarrett Lipman - Personal Portfolio & Professional Hub

A modern, high-performance web application serving as the professional hub for Jarrett Lipman—Director of Bands at Vandegrift High School and Brass Caption Manager for the Boston Crusaders.

Built with Next.js 14, Tailwind CSS, and Framer Motion, this platform highlights his clinician history, judging experience, and academic publications, while offering directors an avenue to book instructional coaching sessions.

---

## 🚀 Features

- **Modern Aesthetic**: A sleek, premium design built with Tailwind CSS, utilizing glassmorphism and subtle gradient overlays.
- **Flawless Responsiveness**: Responsive fluid typography (`text-balance`), responsive column masonry grids, and optimized padding mappings across all device formats.
- **High-Performance Video Interactivity**: Zero-latency custom YouTube embeds designed via proxy image states and dynamic Framer Motion play overlays.
- **Architectural Scalability**: Monolithic data and rendering separated strictly by Clean Code methodologies into `src/data` (providers) and atomic single-responsibility modules (`src/components/sections`).
- **CMS/Legacy Content Migrated**: Complete static reconstruction of legacy CMS articles routed securely into dynamic `[slug]` endpoints without breaking original URLs.
- **Animations**: Subtle entry transitions and hover events orchestrated beautifully using `framer-motion`.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Directory)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 📁 Project Structure

```text
src/
├── app/                  # Next.js App Router endpoints (Pages & Layout)
├── components/           # Reusable UI architecture
│   ├── layout/           # Shared structures (Navbar, Footer abstractions)
│   ├── sections/         # Abstracted modular single-responsibility features
│   │   ├── about/        # Hero, Bio, Accolades segments
│   │   ├── clinics/      # Pedagogy and operational breakdown
│   │   └── history/      # Timeline and recursive dataset rendering
│   └── ui/               # Standard atomics (Buttons, Cards, VideoPlayers)
├── data/                 # Raw JSON matrices rendering the global UI state
│   ├── history.ts        # Clinician and Adjudication timeline
│   ├── news.ts           # Markdown mapped legacy CMS articles
│   └── videos.ts         # YouTube media parameters
└── lib/                  # Utilities (if any)
```

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/jarrett-lipman.git
   cd jarrett-lipman
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗 Build & Deploy

This project is tailored for frictionless deployment on [Vercel](https://vercel.com/).

To build locally and test the generated static/server components:

```bash
npm run build
npm run start
```

---

_Developed meticulously to support world-class music ensembles and pedagogy._
# JarretLipman
