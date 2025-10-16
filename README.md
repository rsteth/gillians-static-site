
# Gillian N. Haigh — Static Site

A minimal, fast, no-build static portfolio template mirroring the structure of gilliannhaigh.com (Work by year, Exhibitions, Projects, About/Contact).

## Deploy (any static host)
- GitHub Pages: push this folder to a repo, enable Pages. Serve from root.
- Netlify / Vercel: drag & drop the folder; no build command.
- S3/CloudFront: upload the folder; default root object should be index.html.

## Edit content
- Replace images in /media/{year}/...
- Update data files in /data/:
  - featured.json controls the home page cards.
  - work-2023-24.json, work-2022.json, work-2021.json list the works for each year.
- Add a new year: copy a work-*.json and edit; then update the YEARS array in /assets/js/gallery.js.
- Edit static copy pages in /exhibitions, /projects, /about.

## Work item format
{
  "title": "Piece Title",
  "year": "2024",
  "medium": "oil on canvas",
  "size": "30 x 24 in",
  "src": "/media/2024/piece.jpg"
}

## Notes
- Accessible: alt text comes from titles; keyboard closable lightbox (click outside to close).
- No frameworks; ~10KB total assets.
- You can add Google Analytics or custom fonts by editing /index.html <head>.
