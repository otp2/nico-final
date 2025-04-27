# Niso Abuaf - Personal Portfolio Website

This is a personal portfolio website for Niso Abuaf, built with [Next.js](https://nextjs.org/), TypeScript, and Tailwind CSS. It showcases expertise in finance and provides access to a resource library.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Button, Sheet, NavigationMenu, etc.)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Fonts:** Geist Sans / Geist Mono

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the main page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

*   `src/app/`: Contains the core application routing, the root layout (`layout.tsx`), global styles (`globals.css`), and the main homepage (`page.tsx`). Subdirectories here will correspond to page routes (e.g., `src/app/about/page.tsx`).
*   `src/components/`: Contains reusable React components used throughout the application.
    *   `navbar.tsx`: The main navigation component with desktop dropdowns and a mobile sheet drawer.
    *   `hero.tsx`: The hero section displayed on the homepage.
    *   `feature.tsx`: The "Areas of Expertise" section with linked cards.
    *   `logos-slider.tsx`: A component displaying a scrolling list of client logos.
    *   `ui/`: UI primitive components provided by shadcn/ui or custom built.
        *   `button.tsx`, `sheet.tsx`, `navigation-menu.tsx`, etc. (shadcn/ui)
        *   `infinite-slider.tsx`: Handles the infinite scrolling logic.
        *   `progressive-blur.tsx`: Applies a fade/blur effect to edges.
    *   `ds/`: Custom "design system" components (`Section`, `Container`) used for layout.
*   `src/lib/`: Utility functions, such as `cn` in `utils.ts`.
*   `public/`: Static assets like images (e.g., `new-york-city.svg`, `nico-abuaf.svg`).

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production.
*   `npm run start`: Starts a production server.
*   `npm run lint`: Runs ESLint for code analysis.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
