# Ember House

A frontend-only restaurant website for Ember House, a fictional wood-fired dining room in Jakarta Selatan. The site is built to make the restaurant identity clear quickly, show menu and atmosphere, surface practical details, and move visitors toward a reservation.

The experience is image-led, dark, warm, and practical: guests can scan the menu, understand the room, check hours and location, and start a WhatsApp reservation without digging through the page.

This project does not include a backend, database, CMS, authentication, or server-side booking system. Reservation requests are handled on the frontend by opening WhatsApp with a prepared message.

## Features

- Immersive first viewport with restaurant photography, brand copy, and clear reservation/menu actions.
- Responsive navigation with desktop links and a mobile menu.
- Signature experience section for the restaurant story and dining-room positioning.
- Featured menu grid with dish descriptions, prices, and dietary/category metadata.
- Editorial story and gallery sections using real food and dining-room imagery.
- Reservation form with validation, step progress, date shortcuts, guest controls, time selection, and WhatsApp handoff.
- Location and hours section with maps, phone, and WhatsApp actions.
- Balanced footer with brand sign-off, navigation, opening hours, address, phone, email, and social/contact links.
- Mobile sticky action bar for fast access to Menu, Reserve, and Maps.
- Dark OKLCH-based visual system with accessible contrast, focus states, and reduced-motion handling.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Hook Form
- Zod
- Lucide React icons

## Frontend-Only Scope

This repository contains only the client-side website. All restaurant data is stored locally in TypeScript files under `src/data/`, and the production build outputs static assets in `dist/`.

Included:

- Static restaurant landing page.
- Client-side reservation form validation.
- WhatsApp reservation handoff.
- Local menu, gallery, hours, and contact data.
- Responsive UI and frontend interactions.

Not included:

- Backend API.
- Database.
- Admin dashboard.
- Online payment processing.
- Real-time table availability.
- Email delivery service.
- CMS integration.

## Getting Started

### Prerequisites

Install Node.js and npm. This project was built with a modern Node environment and Vite.

### Install Dependencies

```bash
npm install
```

On Windows PowerShell, if script execution policy blocks `npm`, use:

```bash
npm.cmd install
```

### Start Development Server

```bash
npm run dev
```

PowerShell alternative:

```bash
npm.cmd run dev
```

The Vite server runs on:

```text
http://127.0.0.1:5173
```

If port `5173` is already in use, Vite will usually choose the next available port.

### Build for Production

```bash
npm run build
```

PowerShell alternative:

```bash
npm.cmd run build
```

The production output is generated in:

```text
dist/
```

### Preview Production Build

```bash
npm run preview
```

PowerShell alternative:

```bash
npm.cmd run preview
```

## Available Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Starts the Vite development server on `127.0.0.1`. |
| `npm run build` | Runs TypeScript build checks and creates the production bundle. |
| `npm run preview` | Serves the production build locally for review. |

## Project Structure

```text
.
|-- index.html
|-- package.json
|-- postcss.config.js
|-- tsconfig.json
`-- src/
    |-- main.tsx
    |-- app/
    |   `-- App.tsx
    |-- components/
    |   |-- layout/
    |   |   |-- Footer.tsx
    |   |   |-- MobileStickyBar.tsx
    |   |   `-- Navbar.tsx
    |   |-- menu/
    |   |   `-- MenuCard.tsx
    |   |-- reservation/
    |   |   `-- ReservationForm.tsx
    |   `-- ui/
    |       |-- Badge.tsx
    |       |-- Button.tsx
    |       |-- Container.tsx
    |       |-- Price.tsx
    |       `-- SectionHeader.tsx
    |-- data/
    |   |-- gallery.ts
    |   |-- menu.ts
    |   `-- restaurant.ts
    |-- pages/
    |   `-- HomePage.tsx
    `-- styles/
        `-- globals.css
```

## Key Files

### `src/pages/HomePage.tsx`

The main page composition. It wires together the hero, signature story, menu, gallery, reservation form, location section, footer, and mobile sticky actions.

### `src/data/restaurant.ts`

Restaurant-wide business details:

- Name
- Tagline
- Description
- Address
- Phone
- WhatsApp number
- Email
- Maps URL
- Opening hours
- Hero and story images
- Experience pillars

Update this file first when adapting the site to another restaurant.

### `src/data/menu.ts`

Featured menu data used by the menu section. Each menu item can include name, description, price, category, and supporting metadata.

### `src/data/gallery.ts`

Gallery image data for the dining-room sequence. Images are currently loaded from Unsplash URLs.

### `src/components/reservation/ReservationForm.tsx`

The frontend-only reservation flow. It validates form input in the browser and opens WhatsApp with a prepared message containing the reservation details. It does not store reservations or check live availability.

### `src/styles/globals.css`

The main visual system and custom component styling. It contains the page-level art direction, responsive rules, animation keyframes, reduced-motion handling, and custom classes used across the site.

### `tailwind.config.ts`

Tailwind theme extensions for the Ember House color palette, typography, and shadows.

## Design Direction

Ember House is designed around a dark, fire-adjacent visual system:

- Charred backgrounds and tonal dark surfaces.
- Cream text for strong contrast.
- Ember accent for calls to action and key interface states.
- Olive accents used sparingly for natural/seasonal support.
- Display typography for atmosphere and body typography for readable restaurant details.
- Real food, kitchen, and dining-room imagery instead of generic decorative graphics.

The page avoids generic restaurant-template patterns such as vague marketing copy, overly decorative cards, excessive glow, and hidden practical details.

## Customization Guide

### Change Restaurant Details

Edit:

```text
src/data/restaurant.ts
```

Update the address, contact details, WhatsApp number, maps URL, opening hours, copy, and image URLs.

### Change Menu Items

Edit:

```text
src/data/menu.ts
```

Keep dish copy specific and concise. The menu section is intended to show a focused selection, not a full PDF-style menu.

### Change Gallery Images

Edit:

```text
src/data/gallery.ts
```

Use images that match the same lighting and mood as the rest of the site. Mixed image styles can make the page feel less credible.

### Change Colors or Fonts

Edit:

```text
tailwind.config.ts
src/styles/globals.css
```

The current palette uses OKLCH values for predictable color and contrast. If changing the brand palette, check contrast for body text, buttons, muted text, and focus states.

### Change Reservation Behavior

Edit:

```text
src/components/reservation/ReservationForm.tsx
```

The current implementation sends reservation details to WhatsApp. To connect a real booking backend, replace the WhatsApp handoff in the submit handler with an API request.

Because this project is frontend-only, any real booking storage, availability checking, email delivery, or admin workflow must be added through a separate backend or third-party service.

## Accessibility Notes

The UI includes:

- Semantic page sections and navigation labels.
- Keyboard focus states for links, buttons, and form fields.
- Labeled form fields.
- Reduced-motion handling through `prefers-reduced-motion`.
- High-contrast dark theme tokens.
- Mobile touch targets sized for practical use.

When modifying the design, keep body text contrast at WCAG AA levels and make sure important content does not depend on animation.
