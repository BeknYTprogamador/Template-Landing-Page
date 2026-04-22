# Project Documentation - React + Bootstrap Landing Page

## Overview

This project is a modern landing page built with **React** and **Bootstrap 5**. It demonstrates a clean, responsive design with a navigation bar, hero section, slideshow, services, about, portfolio, and footer.

## New in Alpha 2.0

- **Portuguese (Brazilian) Translation Support**: Added `en.json` and `pt.json` files under `src/locales/` to enable multi-language content.
- **Language Selector**: A `<select>` dropdown in the Navbar allows switching between English and Portuguese.
- **Updates Folder**: Introduced a new `updates/` directory where contributors can document release notes, issues, and progress.  
  - Example: `Alpha-2.0-Portuguese-Brazilian-Version.md` describes the current translation implementation and the known slideshow issue.

## Components

### Navbar
* Responsive navigation bar built with Bootstrap.
* Links to sections: Services, About, Portfolio.
* Includes a language selector (`<select>` with `<option>`).
* Fixed at the top of the viewport.

### Hero Section
* Displays a welcoming heading and subheading.
* Localized text loaded from JSON files.
* Positioned at the top of the page to introduce the site.

### Slideshow Component (`Slideshow.jsx`)
* Custom React carousel cycling through slides automatically every 5 seconds.
* Each slide includes:
  * Image
  * Title
  * Description
  * Call-to-action button
* Texts are now loaded from translation files (`en.json` / `pt.json`).
* Current limitation:
  * **Known Bug**: Portuguese translation is not yet applied correctly to slideshow captions. Documented in `updates/Alpha-2.0-Portuguese-Brazilian-Version.md`.

### Services Section
* Three columns showcasing services:
  * Web Development
  * Mobile App Development
  * UI/UX Design
* Localized text from JSON files.
* Uses Bootstrap icons and grid system.

### About Section
* Background highlight (`bg-light`).
* Text-centered description of the team and mission.
* Localized text from JSON files.

### Portfolio Section
* Grid of cards showcasing projects:
  * Project A: E-commerce Website
  * Project B: Mobile App for Fitness Tracking
  * Project C: Corporate Website Redesign
* Localized text from JSON files.
* Uses Bootstrap card components.

### Footer
* Full-width footer with copyright.
* Localized text from JSON files.
* Styled with `bg-light` and centered text.

## Styling (`index.css`)
* Global reset with `Poppins` font.
* Neutral background (`#f9f9f9`) and dark text (`#333`).
* Navbar fixed at top, styled with shadow and overrides for Bootstrap.
* Hero section styled with typography and button hover effects.
* Slideshow styled with rounded corners, centered layout, and `object-fit: cover` for proportional images.

## Strengths
* Clean structure and logical sectioning.
* Effective use of Bootstrap for responsiveness.
* Translation support for English and Portuguese.
* Easy to extend and customize.

## Limitations
* Slideshow translation bug (captions remain in English).
* Slideshow lacks manual navigation controls.
* Footer constrained by container width.
* Accessibility improvements needed.

## Suggested Improvements
1. Fix slideshow translation bug to fully support Portuguese captions.
2. Add manual navigation controls (arrows, indicators) to slideshow.
3. Overlay captions on slideshow images with semi-transparent background.
4. Use `.container-fluid` for full-width elements (navbar, slideshow, footer).
5. Add descriptive alt text for images.
6. Improve contrast for better readability.

## Conclusion
This project provides a solid foundation for a modern landing page. With multilingual support introduced in Alpha 2.0 and further enhancements to the slideshow and accessibility, it can evolve into a polished, professional template suitable for real-world use.
