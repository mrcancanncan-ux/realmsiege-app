// src/gameData.js
export const REGIONS = [
  { id: "concord-vale", name: "Concord Vale", level: "1-5", theme: "Peaceful farmlands", color: "#4ade80" },
  { id: "highspire", name: "The Highspire", level: "6-12", theme: "Floating mountain citadels", color: "#60a5fa" },
  { id: "ashen-reach", name: "Ashen Reach", level: "13-20", theme: "Volcanic wasteland", color: "#f87171" },
  { id: "mirrorfall", name: "Mirrorfall", level: "21-28", theme: "Crystal caverns", color: "#a78bfa" },
  { id: "scarred-hollow", name: "Scarred Hollow", level: "29-35", theme: "War-torn ruins", color: "#fbbf24" },
  { id: "mycelial-deep", name: "Mycelial Deep", level: "36-42", theme: "Fungal underworld", color: "#34d399" },
  { id: "weeping-wilds", name: "Weeping Wilds", level: "43-50", theme: "Haunted forest", color: "#4ade80" },
  { id: "cindered-works", name: "Cindered Works", level: "51-60", theme: "Abandoned forges", color: "#fb923c" },
  { id: "glimmering-fault", name: "Glimmering Fault", level: "61-70", theme: "Crystalline rift", color: "#c084fc" }
];

export const HEROES = [
  { id: "aelindra", name: "Aelindra Voss", class: "Ranger", region: "Concord Vale", skill: "Multi-shot", ultimate: "Rain of Arrows", bond: "+15% Tower Range", lore: "Master archer of the Vale.", color: "#4ade80" },
  { id: "morgath", name: "Morgath Vel", class: "Warlock", region: "Ashen Reach", skill: "Soul Drain", ultimate: "Apocalypse", bond: "+20% Dark Damage", lore: "Corrupted noble turned warlock.", color: "#a78bfa" },
  { id: "sylvara", name: "Sylvara Denn", class: "Druid", region: "Weeping Wilds", skill: "Nature's Wrath", ultimate: "Forest Avatar", bond: "+12% Nature Tower Damage", lore: "Guardian of the ancient woods.", color: "#34d399" },
  { id: "kael", name: "Kael Dawnforge", class: "Pyromancer", region: "Cindered Works", skill: "Fireball", ultimate: "Inferno Storm", bond: "+18% Fire Damage", lore: "Forge-born flame wielder.", color: "#f87171" },
  { id: "nyx", name: "Nyx", class: "Assassin", region: "Mirrorfall", level: "Shadow Step", ultimate: "Nightfall", bond: "+25% Critical Chance", lore: "Silent blade from the crystal caves.", color: "#64748b" },
  { id: "borin", name: "Borin Ashguard", class: "Paladin", region: "Highspire", skill: "Holy Shield", ultimate: "Divine Judgment", bond: "+15% Light Resistance", lore: "Last knight of the floating citadel.", color: "#fbbf24" },
  { id: "zephyr", name: "Zephyr Nalcott", class: "Storm Caller", region: "Glimmering Fault", skill: "Chain Lightning", ultimate: "Tempest", bond: "+20% Electric Damage", lore: "Born in the rift storms.", color: "#60a5fa" },
  { id: "lira", name: "Lira Sondrel", class: "Healer", region: "Concord Vale", skill: "Sanctuary", ultimate: "Resurrection", bond: "+10% All Healing", lore: "Priestess of the first light.", color: "#f0c84a" },
  { id: "ruk", name: "Ruk Ironborn", class: "Berserker", region: "Scarred Hollow", skill: "Rage", ultimate: "Earthquake", bond: "+30% Melee Damage", lore: "Survivor of the great war.", color: "#fb923c" },
  { id: "elowen", name: "Elowen Frostmere", class: "Ice Witch", region: "Mirrorfall", skill: "Blizzard", ultimate: "Absolute Zero", bond: "+22% Ice Damage", lore: "Exiled queen of the frozen mirror.", color: "#bae6fd" },
  { id: "vael", name: "Vael Darkstep", class: "Void Walker", region: "Mycelial Deep", skill: "Void Rift", ultimate: "Entropy", bond: "+25% Void Damage", lore: "Walker between worlds.", color: "#7c3aed" },
  { id: "solara", name: "Solara Vex", class: "Light Warden", region: "Highspire", skill: "Radiance", ultimate: "Solar Flare", bond: "+18% Light Damage", lore: "Warden of the high spires.", color: "#fde047" }
];

// ... (rest of the data: TOWERS, MOBS, ITEMS, BOSSES, LOOT_TABLES etc. remain exactly as described in the handoff)
