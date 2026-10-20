# Style guides overview

A responsive study guide covering six style guide categories from [Atomic Design, Chapter 1: Designing Systems](https://atomicdesign.bradfrost.com/chapter-1/) by Brad Frost.

## Scope

Pattern libraries, brand identity, writing, voice and tone, code, and design language. Each topic has condensed notes, the chapter's historical example image, and source links. Benefits and challenges are reserved for a later update.

## Design reference

[Material Design 3 typography](https://m3.material.io/styles/typography/fonts): fixed navigation rail, expanding left drawer, sticky rounded section navigation with an animated indicator, right-side section links, dark and light themes, responsive layouts, and reduced-motion support. An independent layout study; not affiliated with Google.

## Run

Serve this directory using any static server, for example `python3 -m http.server 8000`. No build or dependency installation is needed.

## Publish

`.github/workflows/pages.yml` validates JavaScript and deploys the public HTML, CSS, and JavaScript files to GitHub Pages on pushes to `main`. If the repository's GitHub App cannot enable Pages automatically, select **Settings → Pages → Source → GitHub Actions**, then rerun the workflow.

## Edit

Topic content and historical links live in `app.js`; shared layout and responsive styles live in `styles.css`. Routes use hashes so direct links work on GitHub Pages without server redirects.

## Sources and limitations

Notes are paraphrased from Brad Frost. Historical screenshots are embedded from the book's website, attributed in the interface, and link to the original images. Their availability depends on that website. Dalhousie's original writing-guide link currently returns 404; it is retained and labeled for historical accuracy. Mailchimp's old voiceandtone.com link redirects to its current content guide. Google Sans is requested from Google Fonts with a local sans-serif fallback. External fonts and screenshots need a network connection.
