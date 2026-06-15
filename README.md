# Minhajur Rahman — Portfolio Website

A clean, maintainable personal portfolio. No frameworks, no build step.
Just three files: `index.html`, `css/style.css`, and `js/data.js` + `js/render.js`.

---

## 📁 Project structure

```
portfolio/
├── index.html          ← Page shell (rarely needs editing)
├── css/
│   └── style.css       ← All visual design (colours, spacing, layout)
├── js/
│   ├── data.js         ← ⭐ YOUR CONTENT — edit this to update the site
│   └── render.js       ← Builds the page from data.js (rarely needs editing)
└── assets/
    ├── cv.pdf          ← Drop your CV here
    └── photo.jpg       ← Drop your profile photo here (optional)
```

---

## ✏️ How to update content

**All content lives in `js/data.js`.**
Open it, find the section you want to change, edit the values, save — done.

### Add a new publication
```js
publications: [
  {
    year:     "2027",                         // ← change year
    title:    "Your new paper title",         // ← change title
    venue:    "Journal Name · Authors",       // ← change venue
    doi:      "https://doi.org/...",          // ← change DOI URL
    doiLabel: "doi.org/...",                  // ← change display text
  },
  // existing papers below...
],
```

### Add a certificate
```js
certificates: [
  {
    icon:   "ti-cloud",              // Tabler icon name — see tabler.io/icons
    name:   "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year:   "2026",
    status: "completed",             // "completed" or "in-progress"
  },
],
```

### Add a skill group
```js
skills: [
  { group: "New group name", items: ["Skill 1", "Skill 2", "Skill 3"] },
],
```

### Add a conference / talk
```js
conferences: [
  {
    icon:  "ti-presentation",
    name:  "Conference Full Name",
    paper: '"Your Paper Title"',
    type:  "Paper presentation",
    tags:  ["Month Year", "City or Online", "Extra tag"],
  },
],
```

### Add a work experience entry
```js
experience: [
  {
    role:    "Job Title",
    org:     "Company · Department",
    date:    "Jan 2027 – Present",
    desc:    "Short description of what you did.",
    current: true,   // true = blue dot, false = grey dot
  },
],
```

---

## 🖼️ Adding your profile photo

1. Put your photo in `assets/photo.jpg` (or .png)
2. In `js/data.js`, set:
   ```js
   photo: "assets/photo.jpg",
   ```
3. The initials avatar will be replaced automatically.

---

## 🎨 Changing colours

All colours are CSS variables in `css/style.css` at the top:

```css
:root {
  --blue:        #2563eb;   /* main accent */
  --blue-dark:   #1d4ed8;   /* hover state */
  --blue-light:  #eff6ff;   /* light backgrounds */
  /* ... */
}
```

Change `--blue` to any hex colour and the whole site updates.

---

## 🚀 Deploying to GitHub Pages

Since you're already hosting on GitHub Pages:

1. Replace your existing files with these
2. Make sure `index.html` is in the root of your repo
3. Push to GitHub — your site updates automatically

Or if you use a `docs/` folder:
```
docs/
├── index.html
├── css/style.css
├── js/data.js
├── js/render.js
└── assets/
```

---

## 📱 Responsive behaviour

| Screen      | Layout                                      |
|-------------|---------------------------------------------|
| Desktop     | Fixed sidebar + scrollable main content     |
| Tablet      | Narrower sidebar (links hidden)             |
| Mobile      | Sidebar hidden, top nav + profile card + horizontal pill nav |

---

## 🔧 Icons

Icons are from [Tabler Icons](https://tabler.io/icons) — loaded via CDN.
Browse the full set at tabler.io/icons and use the icon name like `ti-brain`, `ti-cloud`, etc.
