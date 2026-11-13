# Herman Technical Solutions website

Static site. Open index.html.

The 3D scene and page scripts are in src/ and are bundled into js/site.js with:

    npm install three esbuild
    npx esbuild src/main.js --bundle --minify --format=iife --outfile=js/site.js

Leads from the contact form go to LEAD_EMAIL in src/main.js (FormSubmit).
