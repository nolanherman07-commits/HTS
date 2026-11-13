# Herman Technical Solutions website

Static site, published with GitHub Pages. Open index.html.

Scripts live in src/ (GSAP, ScrollTrigger, Lenis and a three.js scene) and are bundled into js/site.js:

    npm install three gsap lenis esbuild
    npx esbuild src/main.js --bundle --minify --format=iife --outfile=js/site.js

Leads from the contact form go to LEAD_EMAIL in src/main.js (FormSubmit).

The website-quality skill in .claude/skills/ holds the launch and design checklists every site must pass.
