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
  Reuse this exact section order/structure for every future recipe:
    1. H1 Title
    2. Italic one-line tagline
    3. Quick Info line (Servings | Prep | Cook | Total)
    4. "About This Recipe" — short original-words headnote, 2-4 sentences max
    5. Photo — ![Recipe Name](./Recipe-Name.jpg), or an HTML comment placeholder
    6. "Ingredients" — grouped under bolded sub-headers when a recipe has components
    7. "Directions" — numbered steps
    8. "Notes & Tips" — substitutions, make-ahead, storage
    9. "Family Notes" — (optional) the story behind the recipe
   10. "Source" — where the recipe was adapted from, if applicable
  Dietary standard (clean eating, oil substitutions) lives once in 00-Dietary-Standard.md at
  the front of the binder — do not repeat it per recipe.
-->

# Recipe Title

*One-line italic tagline describing the dish.*

**Servings:** N | **Prep Time:** X min | **Cook Time:** X min | **Total Time:** X min

## About This Recipe

2–4 sentences in your own words. What makes it worth cooking?

![Recipe Title](./Recipe-Name.jpg)

## Ingredients

- Item

## Directions

1. Step

## Notes & Tips

- Tip

## Family Notes

Who brought this recipe into the family, when it first appeared at the table, a memory
tied to it. This is optional — omit the section entirely if you don't have a story.
This is the heart of what makes a family cookbook worth reading.

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
| 9 | Notes & Tips | Substitutions, make-ahead, storage, common mistakes |
| 10 | Family Notes | Optional — the story behind the recipe; who taught it, when, memories tied to it |
| 11 | Source | Where the recipe was adapted from, if applicable |

The dietary standard (clean eating, oil substitutions) lives once in `Content/References/00-Dietary-Standard.md` — do not repeat it per recipe.

---

## Tags

Tags drive the filter UI in the recipe binder app. Every recipe should have at least one tag from each relevant category below.

### Protein
| Tag | Use when |
|-----|----------|
| `beef` | Primary protein is beef |
| `chicken` | Primary protein is chicken |
| `lamb` | Primary protein is lamb |
| `deer` | Primary protein is venison |
| `seafood` | Primary protein is fish (must have fins and scales) |

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
| `slow-cooker` | Primary method is slow cooker or long unattended braise |

Tags are additive — use as many as apply. The app filter uses AND logic: selecting multiple tags narrows results to recipes that have all of them.

---

## Format Notes for Book Publication

This binder is intended to eventually be published as a family cookbook. Keep these in mind when writing:

- **Ingredient lists are bullet lists, not tables.** This is the standard for both web display and print layout, and it converts cleanly to any publishing format (Pandoc, InDesign, Word).
- **Tables belong in reference material** — temperature charts, measurement conversions, substitution comparisons — not in individual recipe sections.
- **Family Notes is the most important section for the book.** Stories, memories, and provenance are what distinguish a family cookbook from a generic one. Capture them now while you can.
- **Write About This Recipe in your own words.** Copied text from websites creates copyright issues in a published book.
- **Source attribution matters.** If a recipe is adapted from a book or website, note it. If it's a family original, say so.

---

## Adding a New Recipe

1. Create `Content/Recipes/Recipe-Name.md` using the structure above.
2. Add the photo to `Content/Images/Recipe-Name.jpg` (or `.png`, `.webp`).
3. Run `npm run build` from the `app/` directory — the index rebuilds automatically.
