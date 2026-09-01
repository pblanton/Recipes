# Recipe Binder Template (v2)

Reuse this exact structure for every new recipe file. The file goes in `Content/Recipes/`.

---

## File Structure

```markdown
---
tags: [tag1, tag2, tag3]
---

<!--
  RECIPE BINDER TEMPLATE (v2)
  ... (keep the full comment block so the template is self-documenting)
-->

# Recipe Title

*One-line italic tagline describing the dish.*

**Servings:** N | **Prep Time (Active):** X min | **Cook Time:** X min | **Total Time:** X min

## About This Recipe

2–4 sentences in your own words. What makes it worth cooking?

![Recipe Title](./Recipe-Name.jpg)

## Ingredients

- Item

## Directions

1. Step

## Notes & Tips

- Tip

## Source

Adapted from ...
```

---

## Section Order

| # | Section | Notes |
|---|---------|-------|
| 0 | YAML frontmatter (`---`) | Tags only; must be the very first thing in the file |
| 1 | HTML comment block | Template reminder; stripped at build time |
| 2 | H1 Title | The recipe name |
| 3 | Italic tagline | One line, describes the dish |
| 4 | Quick Info | Servings, Prep, Cook, Total on one line using `**bold**` labels |
| 5 | About This Recipe | 2–4 sentences, original words, no dietary boilerplate |
| 6 | Photo | `![Title](./Filename.jpg)` — image file goes in `Content/Images/` |
| 7 | Ingredients | Grouped under **bolded sub-headers** when the recipe has components |
| 8 | Directions | Numbered steps |
| 9 | Notes & Tips | Substitutions, make-ahead, storage |
| 10 | Source | Where the recipe was adapted from, if applicable |

The dietary standard (clean eating, oil substitutions) lives once in `Content/References/00-Dietary-Standard.md` — do not repeat it per recipe.

---

## Tags

Tags drive the filter UI in the recipe binder app. Every recipe should have at least one tag from each relevant category below.

### Protein
| Tag | Use when |
|-----|----------|
| `beef` | Primary protein is beef |
| `chicken` | Primary protein is chicken |
| `seafood` | Primary protein is fish or shellfish |

### Course / Type
| Tag | Use when |
|-----|----------|
| `main` | A standalone entrée |
| `side` | A side dish or accompaniment |
| `soup` | Soups, stews, hot pot |
| `salad` | Salads, slaws |
| `bread` | Breads, biscuits, tortillas, flatbreads |
| `sauce` | Sauces, dressings, gravies |
| `condiment` | Condiments, pickles, preserves, dips |
| `dessert` | Cakes, cookies, sweets |
| `breakfast` | Breakfast-appropriate dishes |

### Dietary
| Tag | Use when |
|-----|----------|
| `gluten-free` | Recipe is gluten-free as written |
| `vegetarian` | No meat or fish |
| `spicy` | Noticeably spicy heat |

### Method
| Tag | Use when |
|-----|----------|
| `slow-cooker` | Primary method is slow cooker or long braise |

Tags are additive — use as many as apply. The app filter uses AND logic: selecting multiple tags narrows results to recipes that have all of them.

---

## Adding a New Recipe

1. Create `Content/Recipes/Recipe-Name.md` using the structure above.
2. Add the photo to `Content/Images/Recipe-Name.jpg` (or `.png`, `.webp`).
3. Run `npm run build` from the `app/` directory — the index rebuilds automatically.
