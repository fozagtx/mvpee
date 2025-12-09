# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:5173)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Type checking**: `npm run typecheck` (runs svelte-check for TypeScript validation)
- **Install dependencies**: `npm install`

## Architecture Overview

This is a Svelte landing page application for an AI Learning Hub, built with Vite. The project follows a simple component-based architecture:

**Main Application Structure:**
- `src/App.svelte` - Root component that imports and renders Header, Hero, and Features components
- `src/main.js` - Application entry point that mounts the App component to the DOM
- `src/app.css` - Global styles

**Component Structure:**
- `src/components/Header.svelte` - Navigation header
- `src/components/Hero.svelte` - Hero section with main CTA
- `src/components/Features.svelte` - Features showcase section
- `src/components/CTA.svelte` - Call-to-action component (not currently used in App.svelte)
- `src/components/Footer.svelte` - Footer component (not currently used in App.svelte)

**Static Assets:**
- `public/og-image.jpg` - Open Graph image for social sharing (hosted at https://mvpe.fun/og-image.jpg)
- `index.html` - Contains comprehensive Open Graph and Twitter meta tags configured for mvpe.fun domain

## Build & Deployment

The project is configured for Vercel deployment via `vercel.json` with:
- Build command: `npm run build`
- Output directory: `dist`

The application builds to a static site using Vite's build process, outputting to the `dist/` directory.

## Technology Stack

- **Frontend Framework**: Svelte 4.2.8
- **Build Tool**: Vite 5.0.11
- **Module Type**: ES modules
- **Deployment Platform**: Vercel