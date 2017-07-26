# Changelog

## Head

-   [Fixed] Links with fragment identifiers.
    Only scroll to the top of the page after the URL changes if the location's pathname changes and if there is no fragment identifier in the URL.
-   [Fixed] Use ES2015 named imports for default `modules` in `jsxtreme-markdown` documents.

## 0.5.0

-   Changed `batfish/md` path, for Babel-compiled Markdown in JS pages, to `@mapbox/batfish/modules/md`.
-   Switched ES2015 module compilation from Webpack's system to Babel's ES2015 preset.
-   Use [worker-farm](https://github.com/rvagg/node-worker-farm) for inlining CSS in static HTML files.
-   Upgrade Webpack to v3.
-   Use external [@mapbox/link-to-location](https://github.com/mapbox/link-to-location) package, delete local version.
-   Put BrowserSync in `offline` mode.
-   Upgrade jsxtreme-markdown to get some bug fixes.

## 0.4.0

-   It begins.