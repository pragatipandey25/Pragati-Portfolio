# Pragati Portfolio

A modern personal portfolio built with Next.js, TypeScript, Tailwind CSS, and motion-first UI components.

This repository is structured with a root workspace and an app inside the `portfolio` folder. The root `package.json` provides convenient scripts so you can run everything from the repository root.

## Highlights

- Responsive, component-driven portfolio UI
- Animated sections powered by Framer Motion and custom UI effects
- Reusable design blocks such as bento grids, spotlight effects, moving borders, and interactive cards
- 3D/visual elements using Three.js ecosystem packages
- Sentry integration files included for client, server, and edge monitoring
- Ready-to-deploy setup with Vercel script support

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js + React Three Fiber + Drei
- Sentry for error monitoring

## Project Structure

```text
.
├─ package.json                 # root scripts (delegates to /portfolio)
├─ README.md
└─ portfolio/
	├─ app/                      # Next.js app router pages, layout, providers
	├─ components/               # page sections + reusable UI components
	├─ data/                     # portfolio content/data sources
	├─ lib/                      # shared utilities
	├─ public/                   # static assets (icons, images, etc.)
	├─ package.json              # app dependencies and scripts
	└─ tsconfig.json
```

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd Pragati-Portfolio
npm install
npm --prefix portfolio install
```

### 2. Run in development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts (Root)

Run these from repository root:

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the production bundle
- `npm run start` - Start production server
- `npm run lint` - Run lint checks
- `npm run deploy` - Trigger Vercel production deploy command

## Environment Variables

If you plan to use monitoring or third-party integrations, create a `.env.local` file inside `portfolio/` and add required keys (for example, Sentry DSN and auth/project settings as needed).

```bash
# portfolio/.env.local
NEXT_PUBLIC_SENTRY_DSN=your_public_dsn
SENTRY_AUTH_TOKEN=your_auth_token
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
```

Only define variables you actually use in your deployment setup.

## Deployment

### Vercel (recommended)

```bash
npm run deploy
```

Or connect the GitHub repository to Vercel and set `portfolio` as the project root if required by your Vercel configuration.

## Customization Guide

- Update portfolio data in `portfolio/data/index.ts`
- Edit section components in `portfolio/components/`
- Adjust global styles in `portfolio/app/globals.css`
- Update page composition in `portfolio/app/page.tsx`

## Troubleshooting

- If modules are missing, run install in both root and `portfolio/`.
- If build fails, run `npm run lint` and resolve reported issues.
- Confirm Node.js version is current LTS (Node 18+ recommended for Next.js 14).

## License

This project is for personal portfolio use. Add your preferred license if you plan to distribute it publicly.
