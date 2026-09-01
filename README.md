# Recipes

A personal recipe binder — markdown files on disk, React app in the browser.

## Structure

```
Content/
  Images/     — recipe photos (.jpg, .png, .webp)
  Recipes/    — one .md file per recipe
  References/ — dietary standards, measurement guides, etc.
app/          — Vite + React app (the binder UI)
```

## Using the App

The home page shows all recipes with a search bar (fuzzy, powered by Fuse.js) and tag filter pills. Selecting multiple tags narrows by AND — e.g. **Gluten Free** + **Dessert** shows only gluten-free desserts.

## Adding a Recipe

1. Create `Content/Recipes/Recipe-Name.md` — see `RecipeBinderTemplate.md` for the required structure and available tags.
2. Drop the photo in `Content/Images/Recipe-Name.jpg`.
3. From the `app/` directory, run:

```bash
npm run build
```

The build script reads all recipe files, extracts frontmatter tags, and regenerates `src/recipes-index.json` automatically. No manual index updates needed.

## Running Locally

```bash
cd app
npm install
npm run dev
```
