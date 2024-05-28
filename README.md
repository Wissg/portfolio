# Portfolio

## Description
This project is a personal portfolio website aimed at showcasing my professional skills, experiences, and projects. It serves as a centralized hub where visitors can learn more about me, my background, and the work I've done. The portfolio is designed to be visually appealing, user-friendly, and informative, providing a comprehensive overview of my expertise and achievements.

## Technologies Used:
- Next.js/React
- HTML5
- CSS3
- TypeScript
- Tailwind
- Shadcn/ ui
- lucide-react

## Features
### Done:
- Dynamic Navigation bar customizable via JSON
- Donation system using a drawer
- ligth/dark theme
- Hero page with animation (frame motion)
- background animation particles
- custom error page (404)
- Logger utilities for debugging using pino/pino-pretty, with the usage of appenders (console/file) as well as transformers for console pretty formatting.
- Building docker image 
- About Me Section
- Portfolio Showcase
- Resume/CV Download
- Experience Timeline
- Education Timeline
- Skills List

### Work in Progress:
- Contact Form
- i18n (Internationalization)
- Backend (REST API) with private (only acessible be my front app) and public API
- Authentication using IdP (KeyCloak or Authentik)
- Todo send to logger collector ([Logtrail](https://betterstack.com/docs/logs/javascript/pino/))

## Getting Started
### Using Docker and Makefile
To utilize this setup, ensure you have both make and docker installed on your system.

#### Development Environment (for development only)

```bash
make build-development
make start-development
```

Open [http://localhost:3000](http://localhost:3000)

#### Production Environment

```bash
make build-production
make start-production
```

Open [http://localhost:3000](http://localhost:3000)

### Running Locally
Ensure that Node.js is installed.#### Install Packages:

```bash
npm install
```

#### Run app:
To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the result.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - deploy your Next.js app 

## Author:
Wissal GHOUDI - wissal.ghoudi@gmail.com