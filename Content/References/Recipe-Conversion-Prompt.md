# Recipe Conversion Prompt

Copy everything inside the box below and paste it at the start of a new Claude conversation. Then paste the recipe you want to convert after it.

---

```
I'm building a personal recipe binder. I need you to convert the recipe I give you into a specific markdown file format. Please output the finished markdown as a single code block so I can copy it cleanly.

---

## Dietary Standards

Every recipe in this binder follows these rules. Apply them automatically — do not add a note explaining you did so, just make the change silently:

- **No pork.** If a recipe calls for pork, bacon, lard, or ham, omit it or substitute beef bacon or beef tallow. Pastrami is always a good substitute for bacon or ham.
- **No shellfish or mollusks.** Shrimp, crab, lobster, scallops, clams, squid, and oysters are excluded. If a recipe calls for one, omit it or substitute a clean fish (cod, salmon, tilapia, halibut).
- **No canola oil, peanut oil, or other seed oils.** Substitute avocado oil.
- **No vegetable shortening.** Substitute beef tallow (or butter if tallow is not appropriate).
- **Gluten**, if a recipe is glutenous and a gluten-free option is easily doable, then create two separate versions in two separate files. One gluten-free and the other glutenous.
- Common poultry (chicken, turkey, duck), beef, lamb, and fish with fins and scales are all fine.

---

## File Format

The file must follow this structure exactly, in this order:

```markdown
---
tags: [tag1, tag2]
---

<!--
  RECIPE BINDER TEMPLATE (v2)
  Reuse this exact section order/structure for every future recipe:
    1. H1 Title
    2. Italic one-line tagline
    3. Quick Info line (Servings | Prep | Cook | Total)
    4. "About This Recipe" — short original-words headnote, 2-4 sentences max
    5. Photo — an image link if a photo is available, or an HTML placeholder comment
       noting the expected filename if not (see this file's Photo section for the exact form)
    6. "Ingredients" — grouped under bolded sub-headers when a recipe has components (base, toppings, sauce, etc.)
    7. "Directions" — numbered steps
    8. "Notes & Tips" — substitutions, make-ahead, storage
    9. "Source" — where the recipe was adapted from, if applicable
  Dietary standard (clean eating, oil substitutions) lives once in 00-Dietary-Standard.md at
  the front of the binder — do not repeat it per recipe.
-->

# Recipe Title

*One-line italic tagline that describes what this dish is and why it's worth making.*

**Servings:** N | **Prep Time:** X min | **Cook Time:** X min | **Total Time:** X min

## About This Recipe

2–4 sentences in plain, original language. What makes this dish work? What should the cook know going in?

<!-- Photo: Recipe-Title.jpg -->

## Ingredients

- Ingredient 1
- Ingredient 2

## Directions

1. Step one.
2. Step two.

## Notes & Tips

- Tip or substitution.

## Source

Adapted from [source name or URL].
```

---

## Tags

Infer every tag that applies. Use the exact spellings below.

**Course / Type** — use at least one:
`main` `side` `soup` `salad` `bread` `sauce` `condiment` `dessert` `breakfast`

**Protein** — use if this is a primary ingredient:
`beef` `chicken` `seafood` `lamb` `deer`

**Dietary:**
`gluten-free` (only if the recipe is gluten-free *as written*) `vegetarian` `spicy`

**Method:**
`slow-cooker` (if the primary cooking method is a slow cooker or long unattended braise)

Tags go in the frontmatter at the very top: `tags: [beef, slow-cooker, main]`

---

## Rules for Specific Sections

**Tagline:** One italic sentence. Describe the dish's character — texture, flavor, occasion. Do not start with "A" if you can avoid it. Do not repeat the title word-for-word.

**Quick Info:** Use this exact format on one line:
`**Servings:** 4 | **Prep Time:** 15 min | **Cook Time:** 30 min | **Total Time:** 45 min`
If a value is not given in the source, write `Not specified` for that field rather than guessing.

**About This Recipe:** Write this in your own words, not copied from the source. 2–4 sentences max. Focus on what makes the dish worth cooking, any technique that matters, or a good serving suggestion.

**Photo:** No photo will be attached, so use this HTML comment as a placeholder on its own line, using the expected filename (Title-Case-With-Hyphens matching the recipe title):
`<!-- Photo: Recipe-Title.jpg -->`

**Ingredients:** List ingredients in the order they are used. If the recipe has distinct components (e.g., a cake and its frosting, a marinade and a sauce), group them under **bolded sub-headers** like `**Cake**` and `**Frosting**`. Otherwise a flat list is fine.

**Directions:** Numbered steps. Combine trivially short steps. Do not split one logical action across multiple steps just to pad the count.

**Notes & Tips:** Include anything useful that isn't already in the directions — make-ahead options, storage, substitutions, common mistakes, or a note if you corrected an error in the source.

**Source:** If the recipe came from a website, book, or person, say so. Use the format:
`Adapted from [Name/URL].` or `From [Name].` or `Personal recipe.`
If unknown, write `Source unknown.`

---

## Filename

At the end of your response, after the code block, tell me what to name the file. Use this format: `Title-Case-Words-Separated-By-Hyphens.md` — for example, `Classic-Beef-Stew.md`.

---

Let me know once you understand, and I'll start dropping recipes
```
