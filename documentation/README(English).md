# Project Documentation - React + Bootstrap Landing Page

## Overview

Available languages:
- [English](README(English).md)
- [Português Brasileiro](README(PT-BR).md)
- [Español (España)](README(ES).md)


This project is a modern landing page built with **React** and **Bootstrap 5**. It demonstrates a clean, responsive design with a navigation bar, hero section, slideshow, services, about, portfolio, and footer.

## New in Alpha 2.0
- **Portuguese (Brazilian) Translation Support**: Added `en.json` and `pt.json` files under `src/locales/` to enable multi-language content.
- **Language Selector**: A `<select>` dropdown in the Navbar allows switching between English and Portuguese.
- **Updates Folder**: Introduced a new `updates/` directory where contributors can document release notes, issues, and progress.  
  - Example: `Alpha-2.0` describes the initial translation implementation and the slideshow issue.

## New in Alpha 2.2.0
- **Locale Refinement**: Updated translation route from `pt` to `pt-br` to correctly reflect Brazilian Portuguese standards.
- **Consistency Fix**: Adjusted imports and references in `App.jsx` and `Slideshow.jsx` to use `pt-br.json`.
- **Resolved Issue**: Slideshow captions now translate properly when switching languages.
- **Documentation**: Added `Alpha-2.2.0.md` in the `updates/` folder to record this refinement.

## New in Alpha 2.2.1
- **Documentation Expansion**: Added multilingual README files in the `documentation/` folder:
  - `README(English).md`
  - `README(PT-BR).md`
- **Updates Organization**: Structured the `updates/locales/` directory to separate release notes by language.
- **Consistency**: Ensured documentation files follow the same format for easier navigation and collaboration.
- **Planned Growth**: Future README translations will be added as the landing page expands to support more languages.

## New in Alpha 2.3

- **Spanish (Spain) Translation Support**: Added es.json file under `src/locales/` to enable Spanish content.

**Language Selector Update**: The Navbar dropdown now includes English, Portuguese (Brazil), and Spanish (Spain).

**Documentation Expansion**: Introduced `README(ES).md` in the documentation/ folder to provide full project details in Spanish.

**Consistency**: Ensured all translation files (en.json, pt-br.json, es.json) follow the same structure for easier maintenance.


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
* Texts are loaded from translation files (`en.json` / `pt-br.json`).
* **Status:** Translation bug fixed in Alpha 2.2.0.

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
* Translation support for English and Brazilian Portuguese.
* Easy to extend and customize.

## Limitations
* Slideshow lacks manual navigation controls.
* Footer constrained by container width.
* Accessibility improvements needed.

## Suggested Improvements
1. Add manual navigation controls (arrows, indicators) to slideshow.
2. Overlay captions on slideshow images with semi-transparent background.
3. Use `.container-fluid` for full-width elements (navbar, slideshow, footer).
4. Add descriptive alt text for images.
5. Improve contrast for better readability.

## Conclusion
This project provides a solid foundation for a modern landing page. With multilingual support refined in Alpha 2.2.0 and further enhancements to the slideshow and accessibility, it can evolve into a polished, professional template suitable for real-world use.
