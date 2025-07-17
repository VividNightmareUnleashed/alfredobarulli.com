# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio/linktree website for Alfredo Barulli. It features a luxury-themed design with a collapsible sidebar navigation and responsive layout.

## Tech Stack

- Plain HTML5
- Vanilla CSS3
- Vanilla JavaScript (ES6+)
- Font Awesome 5.15.0 (via CDN)

## Project Structure

```
alfredobarulli.com/
├── index.html       # Main HTML file
├── css/
│   └── styles.css   # All styling
├── js/
│   └── script.js    # Interactive functionality
└── .gitignore
```

## Key Components

### Sidebar Navigation
- Fixed sidebar with toggle functionality (ID: `stickyColumn`)
- Desktop: Collapsible via close button
- Mobile: Full-screen overlay with hamburger menu trigger
- Smooth scrolling for anchor links

### Main Content Area
- Parallax scrolling effect on desktop (ID: `mainContent`)
- Hero section with video placeholder
- Stats grid with hover effects
- Responsive breakpoints at 1024px and 640px

## Development Commands

This is a static site with no build process. To develop:

```bash
# Start a local server (various options):
python -m http.server 8000
# or
npx serve .
# or open index.html directly in browser
```

## Code Style Guidelines

- CSS uses BEM-like naming for components (e.g., `.nav-link`, `.stat-card`)
- Color scheme centers around gold/amber (#BA8E38, #E7AF3E) on black
- Responsive design uses CSS Grid and Flexbox
- JavaScript focuses on DOM manipulation and event handling

## Important Notes

- The site currently has placeholder links (href="#")
- Social media links point to generic URLs
- No build tools, bundlers, or transpilers are used
- All assets are served directly