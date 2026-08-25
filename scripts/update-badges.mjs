// Refreshes the certification badges in README.md from the public Credly feed.
// Run manually: node scripts/update-badges.mjs
import { readFile, writeFile } from "node:fs/promises";

const USER = "oliver-jarosch";
const README = new URL("../README.md", import.meta.url);

async function fetchBadges() {
  const badges = [];
  for (let page = 1; ; page++) {
    const res = await fetch(`https://www.credly.com/users/${USER}/badges?page=${page}`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`Credly API ${res.status}`);
    const json = await res.json();
    badges.push(...json.data);
    if (page >= json.metadata.total_pages) return badges;
  }
}

const badge = (b) =>
  `<a href="${b.url}"><img src="${b.img}" alt="${b.alt}" title="${b.alt}" width="110" height="110"></a>`;

// Certifications not on Credly (Microsoft Learn share links), kept manually.
const EXTRA = [
  {
    url: "https://learn.microsoft.com/api/credentials/share/de-de/OliverJarosch-4061/70A0A53C3D8D2229?sharingId=141F997CF7099464",
    img: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
    alt: "Microsoft Certified: Azure Solutions Architect Expert",
  },
  {
    url: "https://learn.microsoft.com/api/credentials/share/de-de/OliverJarosch-4061/A07F65818DEBA6C1?sharingId=141F997CF7099464",
    img: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    alt: "Microsoft Certified: Azure Administrator Associate",
  },
];

const sorted = (await fetchBadges())
  .sort((a, b) => b.issued_at.localeCompare(a.issued_at))
  .map((b) => ({
    url: `https://www.credly.com/badges/${b.id}/public_url`,
    img: b.image_url.replace("/images/", "/size/165x165/images/"),
    alt: b.badge_template.name,
  }));

const all = [...sorted, ...EXTRA];

const md = await readFile(README, "utf8");
if (!md.includes("<!-- badges:start -->")) throw new Error("README markers missing");
const updated = md.replace(
  /(<!-- badges:start -->\n)[\s\S]*?(<!-- badges:end -->)/,
  `$1${all.map(badge).join("\n")}\n$2`,
);
if (updated === md) {
  console.log("Badges already up to date");
  process.exit(0);
}

await writeFile(README, updated);
console.log(`Updated README with ${all.length} badges`);
