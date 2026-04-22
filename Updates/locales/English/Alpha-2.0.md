# Update Alpha 2.0 - Portuguese Brazilian Version

## Purpose
Introduce Portuguese (Brazilian) translation support across the application.

## Changes Implemented
- Added translation files `en.json` and `pt.json` under `src/locales/`.
- Refactored `App.jsx` to consume text from translation files instead of hardcoded strings.
- Added a `<select>` dropdown in the Navbar to switch between English and Portuguese.
- Updated `Slideshow.jsx` to accept a `lang` prop and attempt to load slide content from translation files.

## Current Status
- **Working:** Navbar, Hero, Services, About, Portfolio, and Footer sections correctly translate between English and Portuguese.
- **Issue:** The `Slideshow` component does not translate properly. Even though `pt.json` contains the `slides` section, the component continues to display English text.

## Known Problem
- The slideshow texts remain in English regardless of the selected language.
- Likely causes:
  - The `lang` prop is not being passed correctly from `App.jsx` to `Slideshow.jsx`.
  - The `pt.json` file may not be structured exactly as expected (`slides` array must match the English version).
  - The slideshow may still be referencing a hardcoded array instead of the JSON data.

## Next Steps
- Verify that `App.jsx` passes `lang={lang}` to `<Slideshow />`.
- Ensure `pt.json` contains a `slides` array with the same structure as `en.json`.
- Confirm that `Slideshow.jsx` uses `translations[lang].slides` instead of a local hardcoded array.
- Test switching languages via the `<select>` dropdown to confirm dynamic updates.

## Notes
This release is marked as **Alpha** because translation support is incomplete. The slideshow issue needs to be resolved before moving to Beta. Publishing this update allows collaborators to review the current implementation and help fix the slideshow translation bug.

### Author
BeknYTProgramador

### Connect
<a href="https://github.com/BeknYTProgramador" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-BeknYTProgramador-black?logo=github" alt="GitHub Profile"/>
</a>
