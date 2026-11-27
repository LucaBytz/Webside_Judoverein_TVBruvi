# Judo beim TV Bruvi

A responsive landing page for the TV Bruvi judo club, with German, English,
Russian, and Ukrainian language options. The site is a static project with no
build step or runtime dependencies.

## Run locally

Open `index.html` in a browser. To preview CMS-managed tournament results,
serve the project over HTTP because browsers restrict loading JSON from local
files. Tournament reports appear in the News section between Probetraining and
Kontakt. DM Sans and Manrope are hosted locally in `assets/fonts/`, including
their SIL Open Font License.

## Customize

- Update club copy, training times, venue, contact details, and club links in
  `index.html`.
- Trainer profiles, the club leadership team, the judo principles,
  trial-session information, and the 2022–2023 competition archive are in
  `index.html`.
- Edit German, English, Russian, and Ukrainian website strings in `script.js`;
  legal-page translations are in `legal-translations.js`.
- Adjust colors, layout, and responsive styles in `styles.css`.
- The club logo used as the browser and bookmark icon is `assets/club-logo.png`.
- Add tournament results in [Pages CMS](https://app.pagescms.org/) after signing
  in with GitHub and granting its app access to this repository. It edits
  `data/tournament-results.json` and uploads pictures to `assets/news/`; GitHub
  Pages publishes the changes from the repository. Only GitHub accounts with
  write access to this repository can edit this content. Titles and text are
  displayed as entered and are not automatically translated.
- The small-screen navigation and footer year are handled in `script.js`.
- The legal notice and privacy policy are in `impressum.html` and
  `privacy-policy.html`.

Club details were adapted from the [Judo-Team Bruchhausen-Vilsen website](https://judovilsen.jimdofree.com/).
The logo and photographs in `assets/` are from that site and are stored locally
so the page does not depend on Jimdo image URLs.
