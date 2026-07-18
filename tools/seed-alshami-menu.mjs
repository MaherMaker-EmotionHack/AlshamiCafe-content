/**
 * Imports the verified Alshami menu snapshot (reviewed 2026-07-18) into the
 * Decap CMS source folders. Run from this repository with `node tools/seed-alshami-menu.mjs`.
 * It deliberately writes the same verified menu to all three language folders;
 * editorial translations can subsequently be refined in Decap CMS.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const image = (file) => `/uploads/alshami/${file}`;

const categories = [
  ['obstsalate', 'Obstsalate', 'Frisch zubereitete Obstsalate mit cremigen und knusprigen Extras.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['waffeln', 'Waffeln', 'Warme Waffeln mit Eis, Früchten und beliebten Toppings.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg'],
  ['milchshakes', 'Milchshakes', 'Cremige Shakes mit frischen Früchten und süßen Lieblingszutaten.', 'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg'],
  ['eis', 'Eis', 'Arabisches Eis und klassische Eissorten.', '949b7243-0a71-42bc-8e23-c900bacec07b.jpeg'],
  ['cocktails', 'Cocktails', 'Hausgemachte Milchcocktails mit Früchten, Honig und Eis.', 'eb2fd068-8a21-4a8e-80ed-9f48b80c6af4.jpeg'],
  ['alshami-cocktails', 'Alshami Cocktails', 'Große Alshami Cocktails mit Nüssen, Pistazien und arabischer Sahne.', '07f56cd4-9391-4175-9e1d-af27d0d2a407.png'],
  ['alshami-spezial', 'Alshami Spezial', 'Besondere Desserts aus dem Hause Alshami.', '0dd91b38-079a-4705-af38-699a6c9f4c84.jpeg'],
  ['kaiser', 'Kaiser', 'Große, reichhaltige Kaiser-Cocktails mit arabischer Sahne und Pistazien.', 'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg'],
  ['heissgetraenke', 'Heißgetränke', 'Kaffeespezialitäten, Tee und heiße Schokolade.', 'c8b651a1-5457-48b8-a598-67bb46809981.jpeg'],
  ['crepes', 'Crêpes', 'Süße Crêpes mit Nutella, Pistazien, Eis und Früchten.', 'c812fd20-8d30-49de-a067-0940235cf11f.jpeg'],
  ['sommer-cocktails', 'Sommer Cocktails', 'Erfrischende alkoholfreie Sommerdrinks.', '54afa9bb-15f7-4036-bd74-3476e1cc6c34.jpeg'],
  ['frische-saefte', 'Frische Säfte', 'Frisch gemixte Frucht- und Gemüsesäfte.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
];

const items = [
  ['obstsalate', 'Obst Salat Weiß', 14, 'Gemischte Früchte, Sahne, arabische Sahne, Nestlé, weiße Schokolade und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg', true],
  ['obstsalate', 'Obst Salat Alshami', 15, 'Gemischte Früchte, Sahne, arabische Sahne, arabisches Eis, Nestlé, Nutella und Honig.', 'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg', true],
  ['obstsalate', 'Obst Salat Nutella', 14, 'Gemischte Früchte, Sahne, arabische Sahne, Nestlé, Nutella und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat Twix', 14, 'Gemischte Früchte, Sahne, arabische Sahne, Twix, Nestlé, Nutella und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat Lion', 14, 'Gemischte Früchte, Sahne, arabische Sahne, Lion, Nestlé, Nutella und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat Kinder Schoko', 14, 'Gemischte Früchte, Sahne, arabische Sahne, Kinder Schoko, Nestlé, Nutella und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat KitKat', 14, 'Gemischte Früchte, Sahne, arabische Sahne, KitKat, Nestlé, Nutella und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat Jahreszeiten', 14, 'Gemischte Früchte, Sahne, arabische Sahne, Vanille, weiße Schokolade, Lotus, Nestlé, Nutella und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat Diät', 8, 'Gemischte Früchte.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat Kinder', 8, 'Gemischte Früchte, Sahne, Honig und Nutella.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat Lotus', 14, 'Gemischte Früchte, Sahne, arabische Sahne, Lotus, Nestlé, Nutella und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['obstsalate', 'Obst Salat Oreo', 14, 'Gemischte Früchte, Sahne, arabische Sahne, Nestlé, Oreo, Nutella und Honig.', '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg'],
  ['waffeln', 'Eis Waffel', 10, 'Warme Waffel mit Eis.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg', true],
  ['waffeln', 'Waffel Nutella & Banane', 9, 'Warme Waffel mit Nutella und Banane.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg'],
  ['waffeln', 'Waffel Pistazien', 8, 'Warme Waffel mit Pistazien.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg'],
  ['waffeln', 'Waffel Nutella, Banane & Erdbeeren', 10, 'Warme Waffel mit Nutella, Banane und Erdbeeren.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg'],
  ['waffeln', 'Waffel Nutella', 7, 'Warme Waffel mit Nutella.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg'],
  ['waffeln', 'Waffel Lotus', 7, 'Warme Waffel mit Lotus.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg'],
  ['waffeln', 'Waffel Alshami', 10, 'Unsere besondere Alshami Waffel.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg'],
  ['milchshakes', 'Erdbeeren Milkshake', 9, 'Cremiger Milkshake mit Erdbeeren.', 'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg'],
  ['milchshakes', 'Nutella & Haselnuss Milkshake', 9, 'Cremiger Milkshake mit Nutella und Haselnuss.', 'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg'],
  ['milchshakes', 'Oreo Milkshake', 9, 'Cremiger Milkshake mit Oreo.', 'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg'],
  ['eis', 'Arabisches Eis mit arabischer Sahne', 10, 'Arabisches Eis mit arabischer Sahne.', '949b7243-0a71-42bc-8e23-c900bacec07b.jpeg'],
  ['eis', 'Vanille-, Erdbeer- & Schokoladeneis', 8, 'Vanille-, Erdbeer- und Schokoladeneis.', '949b7243-0a71-42bc-8e23-c900bacec07b.jpeg'],
  ['eis', 'Arabisches Eis', 9, 'Arabisches Eis.', '949b7243-0a71-42bc-8e23-c900bacec07b.jpeg'],
  ['cocktails', 'Cocktail Mango & Erdbeeren', 10, 'Milch, Banane, Mango, Erdbeeren und Honig.', 'eb2fd068-8a21-4a8e-80ed-9f48b80c6af4.jpeg'],
  ['cocktails', 'Cocktail Alshami', 10, 'Milch, Banane, Erdbeeren, Eis, Vanille und Honig.', 'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg', true],
  ['cocktails', 'Cocktail Spezial', 10, 'Milch, gemischte Früchte und Honig.', 'eb2fd068-8a21-4a8e-80ed-9f48b80c6af4.jpeg'],
  ['cocktails', 'Cocktail Avocado', 10, 'Milch, Banane, Avocado und Honig.', 'eb2fd068-8a21-4a8e-80ed-9f48b80c6af4.jpeg'],
  ['cocktails', 'Cocktail Schoko', 8, 'Milch, Banane, Schokolade und Honig.', 'eb2fd068-8a21-4a8e-80ed-9f48b80c6af4.jpeg'],
  ['cocktails', 'Cocktail Erdbeeren', 8, 'Milch, Banane, Erdbeeren und Honig.', 'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg'],
  ['cocktails', 'Cocktail Banane', 8, 'Milch, Banane und Honig.', 'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg'],
  ['cocktails', 'Cocktail Banane-Mango', 10, 'Milch, Banane, Mango und Honig.', 'eb2fd068-8a21-4a8e-80ed-9f48b80c6af4.jpeg'],
  ['alshami-cocktails', 'Alshami Erdbeeren', 16, 'Cocktailmilch mit Banane, Erdbeeren, Mandeln, Cashewnüssen, Pistazien, arabischer Sahne und Honig.', '07f56cd4-9391-4175-9e1d-af27d0d2a407.png'],
  ['alshami-cocktails', 'Alshami Banane', 16, 'Cocktailmilch mit Banane, Mandeln, Cashewnüssen, Pistazien, arabischer Sahne und Honig.', 'e1c2a3c5-6536-454a-a4fd-eea5d5ae7fc2.png'],
  ['alshami-cocktails', 'Alshami Spezial Cocktail', 16, 'Cocktailmilch mit gemischten Früchten, Mandeln, Cashewnüssen, Pistazien, arabischer Sahne und Honig.', 'e1c2a3c5-6536-454a-a4fd-eea5d5ae7fc2.png'],
  ['alshami-spezial', 'Alshami Bumbe', 10, 'Alshami Spezialität.', '0dd91b38-079a-4705-af38-699a6c9f4c84.jpeg'],
  ['alshami-spezial', 'Alshami Teller', 10, 'Halawi, arabische Sahne, arabisches Eis und Pistazien.', '21997492-ac22-4a66-9a8c-60ffceee6318.png'],
  ['alshami-spezial', 'Alshami Baklava', 10, 'Baklava.', '0dd91b38-079a-4705-af38-699a6c9f4c84.jpeg'],
  ['alshami-spezial', 'Kasita', 7, 'Kasita Eis-Dessert.', '125bee7b-9a26-4de7-9a27-dcfafdab63d0.png'],
  ['kaiser', 'Kaiser Avocado', 15, 'Milch, Banane, Avocado, arabische Sahne, Nestlé, Pistazien und Honig.', 'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg'],
  ['kaiser', 'Kaiser Spezial', 15, 'Milch, gemischte Früchte, arabische Sahne, Nestlé, Pistazien und Honig.', 'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg'],
  ['kaiser', 'Kaiser Mango', 14, 'Milch, Banane, Mango, arabische Sahne, Nestlé, Pistazien und Honig.', 'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg'],
  ['kaiser', 'Kaiser Banane', 14, 'Milch, Banane, arabische Sahne, Nestlé, Pistazien und Honig.', 'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg'],
  ['kaiser', 'Kaiser Schoko', 14, 'Milch, Banane, Schokolade, arabische Sahne, Nestlé, Pistazien und Honig.', 'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg'],
  ['kaiser', 'Kaiser Erdbeeren', 14, 'Milch, Banane, Erdbeeren, arabische Sahne, Nestlé, Pistazien und Honig.', 'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg'],
  ['kaiser', 'Kaiser Alshami', 15, 'Milch, Banane, Erdbeeren, Vanilleeis, arabische Sahne, Nestlé, Pistazien und Honig.', 'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg', true],
  ['heissgetraenke', 'Kaffee', 3, 'Frisch zubereiteter Kaffee.', 'c8b651a1-5457-48b8-a598-67bb46809981.jpeg'],
  ['heissgetraenke', 'Espresso', 2, 'Espresso.', 'c8b651a1-5457-48b8-a598-67bb46809981.jpeg'],
  ['heissgetraenke', 'Latte Macchiato', 4, 'Latte Macchiato.', 'c8b651a1-5457-48b8-a598-67bb46809981.jpeg'],
  ['heissgetraenke', 'Cappuccino', 4, 'Cappuccino.', 'c8b651a1-5457-48b8-a598-67bb46809981.jpeg'],
  ['heissgetraenke', 'Heiße Schokolade', 5, 'Heiße Schokolade.', 'c8b651a1-5457-48b8-a598-67bb46809981.jpeg'],
  ['heissgetraenke', 'Arabischer Kaffee', 2.5, 'Arabischer Kaffee.', 'c8b651a1-5457-48b8-a598-67bb46809981.jpeg'],
  ['heissgetraenke', 'Tee', 2.5, 'Tee.', 'c8b651a1-5457-48b8-a598-67bb46809981.jpeg'],
  ['crepes', 'Crêpe Nutella', 7, 'Crêpe mit Nutella.', 'c812fd20-8d30-49de-a067-0940235cf11f.jpeg'],
  ['crepes', 'Eis Crêpe', 10, 'Crêpe mit Eis.', '8b914db2-67bd-4727-b189-3adea90dbeef.jpeg'],
  ['crepes', 'Crêpe Nutella, Banane & Erdbeeren', 10, 'Crêpe mit Nutella, Banane und Erdbeeren.', '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg'],
  ['crepes', 'Dubai Crêpe', 10, 'Dubai Crêpe.', 'c812fd20-8d30-49de-a067-0940235cf11f.jpeg', true],
  ['crepes', 'Dubai Crêpe mit arabischem Eis', 12, 'Dubai Crêpe mit arabischem Eis.', 'c812fd20-8d30-49de-a067-0940235cf11f.jpeg'],
  ['crepes', 'Crêpe Pistazien', 8, 'Crêpe mit Pistazien.', 'c812fd20-8d30-49de-a067-0940235cf11f.jpeg'],
  ['crepes', 'Crêpe Lotus', 7, 'Crêpe mit Lotus.', '8b914db2-67bd-4727-b189-3adea90dbeef.jpeg'],
  ['crepes', 'Crêpe Nutella & Banane', 9, 'Crêpe mit Nutella und Banane.', '8b914db2-67bd-4727-b189-3adea90dbeef.jpeg'],
  ['crepes', 'Crêpe Alshami', 10, 'Alshami Crêpe.', 'c812fd20-8d30-49de-a067-0940235cf11f.jpeg'],
  ['sommer-cocktails', 'Cocktail Mojito', 8, 'Minze, Limetten, 7 Up und brauner Zucker.', '54afa9bb-15f7-4036-bd74-3476e1cc6c34.jpeg'],
  ['sommer-cocktails', 'Cocktail Rosen Sirup', 8, 'Rosensirup, Limetten, Minze und 7 Up.', '54afa9bb-15f7-4036-bd74-3476e1cc6c34.jpeg'],
  ['sommer-cocktails', 'Cocktail Granatapfel', 8, 'Granatapfel, Limetten, Minze und 7 Up.', '54afa9bb-15f7-4036-bd74-3476e1cc6c34.jpeg'],
  ['sommer-cocktails', 'Cocktail Gemischte Früchte', 9, 'Mango, Banane und Ananas.', '54afa9bb-15f7-4036-bd74-3476e1cc6c34.jpeg'],
  ['sommer-cocktails', 'Cocktail Polo', 8, 'Minze, Limetten, 7 Up und Zucker.', '54afa9bb-15f7-4036-bd74-3476e1cc6c34.jpeg'],
  ['sommer-cocktails', 'Cocktail Alshami Sommer', 8, 'Orange, Mango und Apfel.', '54afa9bb-15f7-4036-bd74-3476e1cc6c34.jpeg'],
  ['frische-saefte', 'Saft Gemischte Früchte', 8, 'Frisch gemixter Saft aus gemischten Früchten.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
  ['frische-saefte', 'Saft Avocado', 8, 'Frisch gemixter Avocadosaft.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
  ['frische-saefte', 'Saft Kiwi', 8, 'Frisch gemixter Kiwisaft.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
  ['frische-saefte', 'Saft Apfel', 8, 'Frisch gemixter Apfelsaft.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
  ['frische-saefte', 'Saft Ananas', 8, 'Frisch gemixter Ananassaft.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
  ['frische-saefte', 'Saft Erdbeeren', 8, 'Frisch gemixter Erdbeersaft.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
  ['frische-saefte', 'Saft Orange', 8, 'Frisch gepresster Orangensaft.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
  ['frische-saefte', 'Saft Mango', 8, 'Frisch gemixter Mangosaft.', 'f759e2f1-0d95-4730-8000-4eda20bcc7a1.png'],
];

const slugify = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const frontmatter = (fields) => `---\n${Object.entries(fields).map(([key, value]) => `${key}: ${typeof value === 'string' ? JSON.stringify(value) : JSON.stringify(value)}`).join('\n')}\n---\n`;
const galleryImages = [
  '26b86b36-69a5-43da-b23d-4c03f6ed727e.jpeg',
  '54afa9bb-15f7-4036-bd74-3476e1cc6c34.jpeg',
  '512d7931-9eac-4a75-a39c-08ed7ed90c95.jpeg',
  'a9d4007a-e766-44c6-ab48-3a4de698d33f.jpeg',
  'aae6bc9f-b0d4-4c1c-9428-16e536ef4121.jpeg',
  'eb2fd068-8a21-4a8e-80ed-9f48b80c6af4.jpeg',
  '949b7243-0a71-42bc-8e23-c900bacec07b.jpeg',
  '8c82eca1-b9c4-4512-940c-7321520e5616.jpeg',
  'c812fd20-8d30-49de-a067-0940235cf11f.jpeg',
  'c8b651a1-5457-48b8-a598-67bb46809981.jpeg',
  '8b914db2-67bd-4727-b189-3adea90dbeef.jpeg',
  '0dd91b38-079a-4705-af38-699a6c9f4c84.jpeg',
];

for (const language of ['de', 'en', 'ar']) {
  const languageRoot = join(root, 'content', language);
  const categoryDir = join(languageRoot, 'menu-categories');
  const itemDir = join(languageRoot, 'menu-items');
  const galleryDir = join(languageRoot, 'galleries');
  mkdirSync(categoryDir, { recursive: true });
  mkdirSync(itemDir, { recursive: true });
  mkdirSync(galleryDir, { recursive: true });
  categories.forEach(([slug, name, description, file], order) => {
    writeFileSync(join(categoryDir, `${slug}.md`), frontmatter({ name, slug, description, image: image(file), order: order + 1 }));
  });
  const occurrence = new Map();
  items.forEach(([category, name, price, description, file, featured = false], index) => {
    const baseSlug = slugify(name);
    const count = (occurrence.get(baseSlug) ?? 0) + 1;
    occurrence.set(baseSlug, count);
    const slug = count === 1 ? baseSlug : `${baseSlug}-${count}`;
    writeFileSync(join(itemDir, `${String(index + 1).padStart(2, '0')}-${slug}.md`), frontmatter({ name, slug, category, price, description, image: image(file), dietary_tags: [], featured, order: index + 1 }));
  });
  writeFileSync(join(galleryDir, 'alshami-momente.md'), frontmatter({
    title: 'Alshami Momente',
    slug: 'alshami-momente',
    cover_image: image(galleryImages[0]),
    images: galleryImages.map(image),
    order: 1,
  }));
}

console.log(`Imported ${categories.length} categories and ${items.length} menu items for de, en and ar.`);
