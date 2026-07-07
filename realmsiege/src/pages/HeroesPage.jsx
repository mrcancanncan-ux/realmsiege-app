import { useState } from "react";

const REGIONS = {
  "Weeping Wilds": { bg: "#A9C99A", text: "#2A4324" },
  "Mirrorfall": { bg: "#C7B8DE", text: "#3A2A55" },
  "Glimmering Fault": { bg: "#A8D9CF", text: "#1F4D47" },
  "Scarred Hollow": { bg: "#E0A99A", text: "#5C2417" },
  "Ashen Reach": { bg: "#C9C4BA", text: "#3A3730" },
  "Concord Vale": { bg: "#E4D9B8", text: "#5C4A1E" },
  "The Highspire": { bg: "#D8E8F5", text: "#1F4A66" },
  "Mycelial Deep": { bg: "#C3D6A8", text: "#3A4D26" },
  "Cindered Works": { bg: "#D9B896", text: "#4D2F19" },
};

const HEROES = [
  { name: "Fenlora Ashkir", role: "Ranger", region: "Weeping Wilds",
    bio: "Grew up among the Grieving Wild's twisted animals, learned to read pain instead of fighting it. She doesn't hunt monsters — she puts down things that used to be someone's pet." },
  { name: "Dravor Ilsen", role: "Warlock", region: "Mirrorfall",
    bio: "Went looking for his reflection after the region split him in two. Found it. It was worse than him. He fights with what's left over from the encounter." },
  { name: "Yssenna Wrelth", role: "Druid", region: "Glimmering Fault",
    bio: "Was born the moment a piece of the Fractured Choir touched a dying tree. Not entirely human. Not entirely sure what she is. Keeps the rift's edges from spreading further." },
  { name: "Bralen Thossyn", role: "Pyromancer", region: "Scarred Hollow",
    bio: "Descendant of the family that inherited the Bound Court's original bargain. Fire is the only thing in his bloodline that's ever been fully his." },
  { name: "Ilvenna Rask", role: "Assassin", region: "Ashen Reach",
    bio: "Killed one of the Hollow Column's officers to prove they could still die. Found out they could. Now she's the only living person the dead actively avoid." },
  { name: "Corvain Dessel", role: "Paladin", region: "Concord Vale",
    bio: "Raised in the Sohveran Spire ruins by caretakers who forgot why they were caretaking. He's the only hero who remembers the Vale as home rather than a battlefield." },
  { name: "Tamzin Orwyn", role: "Storm Caller", region: "The Highspire",
    bio: "Trained by the Skyward Vigil to help them burn the Vale down. Changed her mind mid-lesson. They haven't forgiven her. She hasn't apologized." },
  { name: "Maerith Solveg", role: "Healer", region: "Mycelial Deep",
    bio: "Learned medicine from a cavern full of things grown from other people's grief. Uneasy bedside manner. Excellent results." },
  { name: "Grothmar Vosk", role: "Berserker", region: "Cindered Works",
    bio: "Found a still-running Rustwake construct that had been guarding an empty room for six hundred years. Now he guards the thing that used to guard nothing." },
  { name: "Winlas Korrath", role: "Ice Witch", region: "The Highspire",
    bio: "The Vigil's failed experiment: they wanted a weapon that felt nothing. She feels everything, just slowly, on a delay of about a day." },
  { name: "Ovrenn Skalis", role: "Void Walker", region: "Mirrorfall",
    bio: "One of the Unmade who didn't fully invert. Fights alongside the living as a controlled experiment in not becoming what the others became." },
  { name: "Halcyra Vondt", role: "Light Warden", region: "The Highspire",
    bio: "Watched Corvain rebuild a tower with his bare hands and switched sides on the spot. The Vigil considers her the second defection in the Vale's history." },
];

export default function HeroesPage() {
  const [active, setActive] = useState(null);
  const regionNames = Object.keys(REGIONS);
  const [filter, setFilter] = useState("All");

  const shown = filter === "All" ? HEROES : HEROES.filter(h => h.region === filter);

  return (
    <div style={{ minHeight: "100vh", background: "#EDE6D3", padding: "48px 24px", fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h1 style={{ fontSize: 42, color: "#3A2E1E", marginBottom: 4, letterSpacing: 0.5 }}>The Chronicle of Ossmere</h1>
        <p style={{ fontSize: 19, color: "#6B5D45", marginBottom: 32, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
          Twelve who carry what the Sohveran forgot.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
          {["All", ...regionNames].map(r => (
            <button key={r} onClick={() => setFilter(r)}
              style={{
                fontSize: 15, padding: "8px 16px", borderRadius: 6, cursor: "pointer",
                border: filter === r ? "2px solid #3A2E1E" : "1px solid #B9AC8E",
                background: filter === r ? "#3A2E1E" : "#F5EFDD",
                color: filter === r ? "#F5EFDD" : "#3A2E1E",
                fontFamily: "inherit",
              }}>
              {r}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {shown.map(h => {
            const c = REGIONS[h.region];
            const open = active === h.name;
            return (
              <div key={h.name} onClick={() => setActive(open ? null : h.name)}
                style={{
                  background: "#F8F3E6", border: `2px solid ${c.bg}`, borderRadius: 10,
                  padding: 20, cursor: "pointer", transition: "transform 0.15s",
                }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <h2 style={{ fontSize: 22, color: "#3A2E1E", margin: 0 }}>{h.name}</h2>
                </div>
                <div style={{ fontSize: 15, color: "#8A7A5C", marginBottom: 10 }}>{h.role}</div>
                <span style={{
                  display: "inline-block", fontSize: 13, padding: "3px 10px", borderRadius: 20,
                  background: c.bg, color: c.text, marginBottom: 14,
                }}>
                  {h.region}
                </span>
                <p style={{
                  fontSize: 17, lineHeight: 1.55, color: "#4A4030", margin: 0,
                  maxHeight: open ? 400 : 66, overflow: "hidden",
                }}>
                  {h.bio}
                </p>
                {!open && <div style={{ fontSize: 13, color: "#A08F6E", marginTop: 6 }}>Tap to read more</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
