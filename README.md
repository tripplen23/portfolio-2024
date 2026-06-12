# Nguyen Duc Binh — Portfolio 2024

A personal portfolio showcasing skills, projects, and experience as a software developer.

**Live:** [nguyenducbinh.vercel.app](https://nguyenducbinh.vercel.app/)

## Tech Stack

| Library | Version |
|---------|---------|
| Next.js | 13.5.1 |
| React | 18.2.0 |
| Tailwind CSS | 3.4.1 |
| Framer Motion | 9.0.0 |
| TypeScript | 5.6.2 |

## Prerequisites

- **Node.js** ≥ 18.17 (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **pnpm** ≥ 9 (or npm ≥ 9)

Install pnpm if you haven't:

```sh
npm install -g pnpm
```

## Setup

```sh
# 1. Clone the repository
git clone https://github.com/tripplen23/portfolio-2024.git
cd portfolio-2024

# 2. Install dependencies
pnpm install
# or
npm install

# 3. Build the project (required before dev — generates static assets)
pnpm build
# or
npm run build

# 4. Start the development server
pnpm dev
# or
npm run dev

# 5. Open http://localhost:3000
```

## Features

- **Homepage** — intro, CTA buttons (Resume + Contact), tech stack overview
- **About page** — detailed background, experience timeline, skills, education
- **Blog** — MDX-powered posts with syntax highlighting
- **Dark mode** — system preference + manual toggle
- **Responsive** — mobile-first, works on all screen sizes
- **Framer Motion** — scroll animations and page transitions

## Deployment

Automatically deployed via [Vercel](https://vercel.com/) on push to `main`.

Preview deployments run for every pull request.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server with hot reload |
| `pnpm build` | Production build |
| `pnpm start` | Run production server (after build) |
| `pnpm lint` | Run ESLint |

## Customising

### Update Resume

Replace `public/cv.pdf` with your own file. The filename must stay as `cv.pdf`.

### Add Blog Posts

Add `.mdx` files to the `content/` directory. See existing posts for frontmatter format.

### Experience Timeline

Edit `src/components/Experience.tsx` — each entry is a `<Details />` component with position, company, time range, address, and description.

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes with a clear message
3. Open a pull request against `main`
4. Do not push directly to `main`