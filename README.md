# Minitube Human ART – visueller Nachbau

Visueller Nachbau von **https://events.minitube-humanart.com**, Referenzstand **5. Oktober 2026**.

## Start

Voraussetzung: Node.js 22.13 oder neuer.

```bash
npm install
npm run dev
```

Die lokale Adresse steht im Terminal, standardmäßig `http://localhost:3000`.

## Produktionsbuild

```bash
npm run build
npm start
```

Next.js erzeugt eine vollständig statische Website im Ordner `out/`. `npm start` dient nur der lokalen Vorschau dieser Dateien; für das Deployment wird kein eigener Server benötigt.

## Deployment mit Vercel

1. Das Projekt in ein eigenes Git-Repository übernehmen und zu GitHub/GitLab pushen.
2. Das Repository in Vercel importieren und diesen Projektordner als Root Directory auswählen.
3. Deployen. `vercel.json` setzt das Framework-Preset auf „Other“ (`framework: null`), führt `npm run build` aus und veröffentlicht die statischen Dateien aus `out/`.

Das Next.js-Preset darf hier nicht mit dem Ausgabeverzeichnis `out/` kombiniert werden: Es erwartet dort Next.js-Build-Manifeste wie `routes-manifest.json`, die beim statischen Export im internen Build-Ordner `.next/` liegen.

Alternativ mit der Vercel CLI aus diesem Ordner: `npx vercel`.

**Keine Umgebungsvariablen, Datenbank, API, CMS oder Zugangsdaten notwendig.** Es wurde noch kein Deployment ausgeführt.

## Projektstruktur

- `src/app/page.tsx`: alle Abschnitte der Landingpage
- `src/app/globals.css`: Schriftarten, Originalfarben, Abstände und responsive Layouts
- `src/data/site.ts`: sämtliche Texte, Produktdaten, Teammitglieder und Bildreferenzen
- `src/components/`: wiederverwendbare visuelle Elemente und Formularansicht
- `public/images/`: lokal eingebettete Originalbilder, Logos, Icons und SVGs
- `public/images/rendered/`: lokale WebP-Versionen der vom Original verwendeten Bildgrößen
- `public/fonts/`: lokal eingebettete PT-Sans-Schriften
- `public/videos/`: originales dekoratives Header-Video

## Bewusst ohne Funktion

Buttons, Links, Formulare und Video-Play-Schaltfläche haben keine Aktion. Es werden weder Formulare abgeschickt noch externe Seiten aufgerufen. Das Header-Video und der auf Scrollen reagierende schwebende Button dienen ausschließlich der visuellen Darstellung. Die Seite enthält kein Tracking und lädt keine externen Ressourcen.

Der Kalender ist wie im aktuellen Original leer, da der Messetermin im Juli 2026 bereits vergangen ist. Dieser Zustand ist fest im Code hinterlegt und verändert sich nicht mit dem Datum. Das große Unternehmensvideo wird nicht eingebunden, da der Player nur als Posteransicht nachgebildet ist.

## Prüfungen

```bash
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

Browserprüfungen für Desktop, Tablet und Mobilgeräte: vollständige Abschnitte, geladene lokale Bilder, keine externen Requests, keine horizontalen Überläufe und keine Button-Funktionen. Die Abschnittshöhen werden auf Desktop und Mobilgeräten gegen das Original geprüft. Screenshots liegen danach unter `test-results/`.

Die Bild- und Markenrechte der Originalwebsite bleiben bei den jeweiligen Rechteinhabern. Vor einer öffentlichen Veröffentlichung entsprechende Nutzungsrechte sicherstellen.
