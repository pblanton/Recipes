import { readdir, readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const recipesDir = join(__dirname, '../../Content/Recipes');
const imagesDir = join(__dirname, '../../Content/Images');
const outputFile = join(__dirname, '../src/recipes-index.json');
const publicImagesDir = join(__dirname, '../public/images');

function stripHtmlComments(content) {
  return content.replace(/<!--[\s\S]*?-->/g, '');
}

function extractTitle(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled';
}

function extractTagline(content) {
  // Italic line: *text* on its own line
  const match = content.match(/^\*([^*\n]+)\*\s*$/m);
  return match ? match[1].trim() : '';
}

function extractQuickInfo(content) {
  const match = content.match(/\*\*Servings:\*\*.+/);
  if (!match) return '';
  // Strip markdown bold markers for plain display
  return match[0].replace(/\*\*/g, '');
}

async function main() {
  const recipeFiles = await readdir(recipesDir).catch(() => []);
  const imageFiles = await readdir(imagesDir).catch(() => []);

  const recipes = [];
  for (const file of recipeFiles) {
    if (!file.endsWith('.md')) continue;

    const raw = await readFile(join(recipesDir, file), 'utf-8');
    const content = stripHtmlComments(raw).trim();
    const slug = basename(file, '.md').toLowerCase();

    recipes.push({
      slug,
      title: extractTitle(content),
      tagline: extractTagline(content),
      quickInfo: extractQuickInfo(content),
      content,
    });
  }

  recipes.sort((a, b) => a.title.localeCompare(b.title));
  await writeFile(outputFile, JSON.stringify(recipes, null, 2));
  console.log(`Built index: ${recipes.length} recipes`);

  // Copy images from Content/Images/ to public/images/ for local dev
  await mkdir(publicImagesDir, { recursive: true });
  const imageExts = /\.(jpg|jpeg|png|webp|gif)$/i;
  for (const file of imageFiles) {
    if (imageExts.test(file)) {
      await copyFile(join(imagesDir, file), join(publicImagesDir, file));
    }
  }
}

main().catch(err => {
  console.error('build-index failed:', err.message);
  process.exit(1);
});
