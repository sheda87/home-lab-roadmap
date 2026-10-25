# Home Lab Roadmap

A step-by-step plan from IT networking basics to a Raspberry Pi home lab, ordered easiest to hardest, with costs. It installs on your phone like an app, works offline, and saves your checkmarks on that device.

## Publish it on GitHub Pages (no Git commands needed)


You need a free GitHub account. GitHub Pages is free for **public** repositories, so do not put anything private in this one. These files contain nothing private.

1. Unzip the download so you have the loose files. All files go at the top level, with no folders.
2. Sign in at github.com. Click the **+** at the top right, then **New repository**.
3. Name it `home-lab-roadmap`. Choose **Public**. Click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Drag in every file from the unzipped folder (all 8, including this README), or choose them with the file picker. Wait for the uploads to finish, then click **Commit changes**.
6. Go to **Settings**, then **Pages** (left menu).
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Set **Branch** to `main` and the folder to `/ (root)`. Click **Save**.
8. Wait one to two minutes, then refresh the Pages screen. A link appears at the top:
   `https://YOUR-USERNAME.github.io/home-lab-roadmap/`

Open that link. If you get a 404, wait another minute and refresh.

## Install it on your phone

- **iPhone or iPad:** open the link in **Safari**. Tap the **Share** button, then **Add to Home Screen**, then **Add**.
- **Android:** open the link in **Chrome**. Tap the **three dots**, then **Install app** (or **Add to Home screen**).
- **Computer (Chrome or Edge):** click the install icon at the right end of the address bar.

Open it once while online so it can save itself for offline use. After that it opens without a connection.

## Notes

- Your checkmarks are stored in the browser on each device. Your phone and iPad will not share progress, and clearing the browser's site data erases it.
- To change the content later, edit `index.html` on GitHub (open the file, click the pencil icon, then **Commit changes**). Also change `CACHE_VERSION` in `sw.js` from `v1` to `v2` (then `v3`, and so on) so installed copies pick up the update.
- Prices in the roadmap were gathered in October 2026. Raspberry Pi prices change often, so check before you buy.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The roadmap page |
| `manifest.webmanifest` | Tells phones the page can be installed, and gives its name and icons |
| `sw.js` | Saves the page for offline use |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | App icons |
| `README.md` | These instructions |
