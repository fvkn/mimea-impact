import { Wheat, Sparkles, Beef, Croissant, Sprout, ClipboardCheck } from 'lucide-react';

// The five fundable projects that make up the Moringa circular-economy programme,
// plus the programme-management line. Each entry maps a URL slug to its icon,
// hero image and CHF amount. All human-readable text lives in the locale files
// under `packages.<slug>` so it can be translated per language.
export const PACKAGES = [
  { slug: 'kinderernaehrung', icon: Wheat, amount: 30000, image: '/proj-kinderernaehrung.jpg' },
  { slug: 'frauenfoerderung', icon: Sparkles, amount: 30000, image: '/proj-frauenfoerderung.jpg' },
  { slug: 'tierfutter', icon: Beef, amount: 25000, image: '/proj-tierfutter.jpg' },
  { slug: 'baeckerei', icon: Croissant, amount: 25000, image: '/proj-baeckerei.jpg' },
  { slug: 'bioanbau', icon: Sprout, amount: 20000, image: '/proj-bioanbau.jpg' },
];

// Supporting budget line, shown in the programme breakdown but not marketed as a
// standalone "project" card. It still has a detail page for transparency.
export const PROGRAM_MGMT = { slug: 'programm', icon: ClipboardCheck, amount: 20000, image: '/about-hero.jpg' };

export const PROGRAM_TOTAL = 150000;

// CHF with Swiss apostrophe thousands separator, e.g. 30000 -> "CHF 30'000".
export const formatCHF = (amount) => `CHF ${amount.toLocaleString('de-CH').replace(/[’ ]/g, "'")}`;

// Whole-number percentage share of the total programme budget.
export const budgetShare = (amount) => Math.round((amount / PROGRAM_TOTAL) * 100);

export const getPackage = (slug) =>
  PACKAGES.find((p) => p.slug === slug) || (PROGRAM_MGMT.slug === slug ? PROGRAM_MGMT : null);
