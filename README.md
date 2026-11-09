# Ei zonder kip

Website van het OPZuid-project "Het ei waar geen kip aan te pas komt": https://www.eizonderkip.nl

Gewone statische site (HTML, CSS, een klein stukje JavaScript voor de NL/EN-knop), gehost op
GitHub Pages vanaf `main`. Wat op `main` staat, staat binnen een paar minuten online.

- Tekst aanpassen: `index.html`. Elke tekst staat er twee keer in, met `lang="nl"` en `lang="en"`.
- Nieuwsbericht toevoegen: kopieer in `index.html` een `<details class="post">`-blok in
  `<div class="news">`, zet de nieuwste bovenaan, en werk de teller in de kop van die sectie bij.
  Foto's horen in `img/`.
- Stijl: `css/style.css`.
- Domein: `CNAME` hier, DNS bij Hostnet (A-records naar GitHub Pages, `www` als CNAME naar
  `aerts-tech.github.io`).
