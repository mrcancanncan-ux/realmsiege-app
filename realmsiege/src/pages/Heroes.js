// heroesData.js
// Realm Siege — /heroes page content, v3 (full lore rewrite)
//
// Drop this into your project (e.g. src/data/heroesData.js) and import it
// into your existing Heroes page component. Field names are generic on
// purpose — rename to match whatever your current component expects
// (e.g. if it reads `className` instead of `role`, just find/replace).
//
// Each hero has:
//   name, role, region, quote, summary (short card text),
//   lore (full bio, 3-4 paragraphs), kitIdentity (ties to skill tree),
//   relationships (array of {hero, note})

const heroes = [
  {
    name: "Kessa Fenmoor",
    role: "Ranger",
    region: "Hallowmere Wood",
    quote: "It isn't attacking you because it's evil. It's attacking you because it hurts.",
    summary:
      "Grew up among the Wildbound and can hear the wrong note in an animal before it turns hostile.",
    lore: `Kessa was raised on the edge of Hallowmere Wood, in a hunting camp that measured wealth in silence — the quieter you could move, the more you understood the forest. By the time she was twelve she could tell a healthy stag from a Wildbound one by the rhythm of its hoofbeats alone, a half-beat off where the sour resonance had crept in.

She doesn't hunt Wildbound mobs the way other heroes do. She reads them first. Most fights she takes are, in her own mind, closer to a mercy killing than a battle — she's the only hero in the roster who will openly say the things she kills deserve better than what happened to them. Other heroes find this either admirable or dangerously soft, depending on how many waves they've survived next to her.

Kessa carries no formal grudge against any single faction, which makes her an outlier on a roster otherwise defined by very specific old wounds. Her arc isn't about revenge — it's about whether mercy is still a useful idea in a war that resets forever.`,
    kitIdentity:
      "Positioning and information over raw damage. Marks targets, denies stealth approaches, and rewards players who track the field instead of just the DPS meter.",
    relationships: [
      { hero: "Amareth Dawnhollow", note: "Amareth broke from the Skyward Choir the day she watched Kessa talk down a Wildbound mob instead of killing it." },
      { hero: "Wrenna Oakspire", note: "The two are the only heroes who treat a mob faction as something to protect rather than purely fight." },
    ],
  },
  {
    name: "Ordrek Vane",
    role: "Warlock",
    region: "Duskfen Marsh (adopted)",
    quote: "Everyone thinks a pact ends when you stop needing it. It ends when it's paid.",
    summary:
      "Struck a small pact with a lesser Vexspawn to survive one bad winter, and has spent every cycle since quietly trying to pay it off.",
    lore: `Ordrek wasn't born powerful. He was born unlucky, in a winter that killed most of the camp he grew up in, and he made the kind of deal you make at seventeen when the alternative is freezing. The pact was small as these things go — a debt, some fragment of future luck signed away to a minor Vexspawn broker — but debts owed to the Vexspawn don't shrink. Nobody currently alive, including Ordrek, actually knows the full terms of what Seraphine Vexar's original bargain-network entitles her successors to collect. He just knows the balance keeps being "not yet."

He fights well specifically because a large part of his power is borrowed against that unpaid debt. Every big spell is, quietly, drawing down further on something he doesn't fully own. He doesn't advertise this. He'd rather you assume he's simply a strong warlock than know that his strength has a foreclosure date attached to it.

He's the least trusting hero in most parties, not out of cruelty but because he's spent his whole life learning that things given freely always have a second invoice attached somewhere.`,
    kitIdentity:
      "A resource mechanic that visibly costs him something beyond mana — spend more, and later fights get subtly harder for him specifically. Damage output is high but never free.",
    relationships: [
      { hero: "Vess Marrow", note: "Vess doesn't trust him and says so constantly. Ordrek doesn't argue, because she isn't wrong." },
    ],
  },
  {
    name: "Wrenna Oakspire",
    role: "Druid",
    region: "Duskfen Marsh",
    quote: "It's not attacking us. It's remembering every fight it's ever tasted, all at once, forever.",
    summary:
      "A literal caretaker of the Spore Communion's overgrowth, trying to contain its grief rather than destroy it.",
    lore: `Wrenna is the only hero with an ongoing, non-hostile relationship to a mob faction. The Spore Communion isn't a species to her — it's closer to a patient. She's spent years learning to read the marsh's fruiting patterns the way a healer reads a fever, and she genuinely believes the Communion isn't malicious, just soaked in ten thousand years of secondhand violence with no way to process it.

Her presence in a run is controversial among the other heroes. Garreth in particular thinks she's dangerously naive about treating an enemy faction as something to be managed instead of cleared. Wrenna's answer is always some version of: managing it has worked longer than fighting it ever has, and the marsh hasn't swallowed a settlement on her watch yet.

She isn't pacifist — when the Communion oversaturates and a wave genuinely needs clearing, she'll do it without hesitation. But she's the one hero who will quietly try to leave enough of the network intact that it doesn't spiral into something worse next cycle.`,
    kitIdentity:
      "Sustain and field-control focused. Effects that weaken or calm Spore Communion mobs specifically are stronger in her kit than raw elemental damage.",
    relationships: [
      { hero: "Garreth Stonevow", note: "The two openly disagree about whether any mob faction can or should be reasoned with." },
    ],
  },
  {
    name: "Torvin Ashka",
    role: "Pyromancer",
    region: "Ashkarrow Wastes",
    quote: "Fire's the only fragment that still remembers being whole. I'm not burning things. I'm reminding them.",
    summary:
      "Believes fire is the fragment closest to the Orivel's original, unbroken heat — every cast is devotion, not destruction.",
    lore: `Torvin grew up watching the Ashkarrow volcanic vents at night, where the light never fully dies even in the coldest season. His people have a belief, older than any single hero's lifetime, that fire kept more of its original nature than any of the other nine fragments — that when the Orivel shattered, fire simply fell the shortest distance from what it used to be.

This isn't a metaphor to him. It's a working theology. He treats every spell like a small act of restoration, not aggression, which is a genuinely unusual headspace for a character whose entire kit is built around burning things to death. He's warm, almost gentle in conversation, in a way that consistently surprises people meeting him for the first time after watching him fight.

He has no faction grudge, no debt, no dead family to avenge. He's the closest thing the roster has to someone who's simply, uncomplicatedly at peace with what he does — which makes him an interesting outlier next to a cast otherwise defined by unresolved wounds.`,
    kitIdentity:
      "Escalating burn damage that rewards letting a fire spread and linger rather than nuking a single target. Devotional flavor, aggressive numbers.",
    relationships: [
      { hero: "Ysolde Rimhollow", note: "Professionally respectful rivals — she thinks his theology is sentimental, he thinks her cold is a fragment in mourning rather than at peace." },
    ],
  },
  {
    name: "Vess Marrow",
    role: "Assassin",
    region: "The Hollow Column (opposed)",
    quote: "They didn't get a funeral. I'm not stopping until every one of them does.",
    summary:
      "Has family among Ashenhold's Unburied dead and has made it her personal mission, cycle after cycle, to give them the ending they're owed.",
    lore: `Vess's line goes back to Ashenhold, the buried nation whose graves the Sundersong tore open. She doesn't know exactly which of the Unburied on the field might be an actual ancestor and which is simply another soldier from the same doomed army — the Void doesn't preserve names, only bodies that won't stop moving. She's made peace with not knowing, mostly, on the days it doesn't keep her up at night.

Her fighting style is quiet and final by design. She doesn't want the Unburied to suffer through a long fight — she wants them finished, cleanly, as close to an actual burial as a boss encounter can be. It's the one piece of tenderness in an otherwise cold, efficient kit.

She distrusts Ordrek specifically because his power source is the same category of unresolved debt that put her own family in the ground in the first place, several fragments removed. She's never explained this to him directly. She doesn't think she has to.`,
    kitIdentity:
      "High single-target burst with bonus effects specifically against Unburied-faction mobs — the one hero whose kit is explicitly faction-matchup-flavored.",
    relationships: [
      { hero: "Ordrek Vane", note: "Distrusts him on principle — his debt and her family's fate come from the same category of old, unpaid bargain." },
    ],
  },
  {
    name: "Garreth Stonevow",
    role: "Paladin",
    region: "The Ironveil Scar (opposed)",
    quote: "Nobody discharged me. As far as the paperwork's concerned, I'm still drafted.",
    summary:
      "An ex-soldier of a Republic remnant, technically still under the Cogforged's dead commanders' draft orders and never formally discharged.",
    lore: `Garreth's grandmother served the Ironveil Republic before its final war against itself. When the Republic's human chain of command died out generations ago, its automated Cogforged constructs kept executing the last orders they were given — and, on paper, so did every soldier who was ever conscripted and never formally released from service. Garreth treats this as more than a joke. He genuinely, stubbornly considers himself still enlisted, fighting Cogforged patrols under the technicality that he outranks a machine that never got new orders either.

It's a strange, dry sense of duty that shapes everything about him — rigid, procedural, uncomfortable with anything that looks like moral improvisation. This is exactly why he clashes with Wrenna: to Garreth, an enemy faction is a standing order to be executed, not a patient to be managed.

Underneath the stiffness is a real fear that if he ever stops treating this as an active war with clear rules, he'll have to reckon with how pointless the original Republic conflict actually was.`,
    kitIdentity:
      "High-durability frontline tank with bonus effects against Cogforged-faction mobs specifically. Rigid, reliable, unglamorous, extremely hard to kill.",
    relationships: [
      { hero: "Wrenna Oakspire", note: "Fundamentally disagrees with her approach to mob factions — thinks it's dangerously soft." },
    ],
  },
  {
    name: "Iolan Skarrow",
    role: "Storm Caller",
    region: "Skyward isles (disputed lineage)",
    quote: "Every storm I cast has a little too much light in it. I've stopped apologizing for that.",
    summary:
      "Claims descent from a Skyward Choir defector and can't fully control the Light/Air bleed in his storms.",
    lore: `Iolan grew up hearing family stories about a Skyward Choir angel who left the isles generations back and settled among humans — stories nobody outside his family fully believes, since the Choir doesn't exactly publish records of its defectors. What isn't disputable is that his storms carry a faint, warm undertone that doesn't belong in pure Air/Electric casting, a bleed of Light he's never been able to fully suppress no matter how he trains.

He's spent his whole career as a kind of bridge case — not quite trusted by human factions who find the Choir bloodline unsettling, not quite claimed by the Choir either, since they don't officially acknowledge defectors at all. He's made peace with existing in the gap, mostly by being extremely good at his job and letting the results speak for the parts of his identity nobody wants to confirm out loud.

If Amareth's story ever gets fully told, Iolan is the most likely hero to be revealed as directly connected to it — same defection, different generation.`,
    kitIdentity:
      "Area storm damage with a Light-tinted secondary effect (brief blind/reveal) that doesn't cleanly fit pure Electric or Air trees — mechanically a hybrid, matching his lineage.",
    relationships: [
      { hero: "Amareth Dawnhollow", note: "Neither has confirmed it publicly, but both suspect their family histories are the same story told two generations apart." },
    ],
  },
  {
    name: "Maelis Thorn",
    role: "Healer",
    region: "Itinerant",
    quote: "I've died in this exact spot before. I remember it a little more every time.",
    summary:
      "Has died and returned through the loop enough times to remember fragments of past cycles — the only hero with any real memory across resets.",
    lore: `Every hero technically persists across cycles in some form, but Maelis is the only one who remembers dying. Not clearly, not as full memories — more as a texture, a deja vu that sharpens the longer a run goes on. She'll sometimes flinch before a trap triggers, or brace for a boss attack a half-second before it lands, and she can never explain why beyond "I think I've stood here before."

This makes her invaluable and unsettling in equal measure. Other heroes have started, quietly, watching her reactions during unfamiliar fights as an early warning system, without fully admitting that's what they're doing. Maelis herself finds the ability more exhausting than useful — remembering fragments of your own death, over and over, without ever getting the full picture, is not a comfortable way to exist.

She's the hero most likely to eventually have a direct conversation with the Threnody, since he's the only other being in Kaervorn who remembers previous cycles at all. That conversation hasn't happened yet in the story. It's being held in reserve.`,
    kitIdentity:
      "Healing and buffs that scale off prior wave performance this run — a mechanically unique 'memory' resource that's fully justified by her lore instead of being an arbitrary system.",
    relationships: [
      { hero: "Caelun Vosh (the Threnody)", note: "The only other being in Kaervorn who remembers past cycles. They haven't spoken yet." },
    ],
  },
  {
    name: "Drogun Halvard",
    role: "Berserker",
    region: "The Ironveil Scar",
    quote: "Ironveil built this plating to kill things like me. Feels right to wear it anyway.",
    summary:
      "From an Ironveil Scar mining clan, fights in armor salvaged and reforged from the very Cogforged constructs he battles.",
    lore: `Drogun's clan has mined the edges of the Ironveil Scar for three generations, close enough to the dormant Republic war machinery to make a living stripping parts off the ones that finally stopped moving. He wears plating built from salvaged Cogforged hull segments, reforged and fitted by his own clan's smiths — armor originally designed, ironically, to survive fighting people exactly like him.

He doesn't carry any grand grudge against the Cogforged. To him they're closer to a dangerous natural resource than an enemy with intent — you respect what they can do to you, you take what's useful when one finally falls still, and you don't lose sleep over machines executing a war order from commanders who've been dead for centuries.

He's the most physically imposing hero on the roster and, in most parties, the least talkative — his commentary runs to short, dry observations rather than the more reflective monologuing some of the other heroes lean into.`,
    kitIdentity:
      "High-risk, high-reward melee berserker. Damage output scales up as his own HP drops, mechanically reflecting a fighter who trusts salvaged armor more than caution.",
    relationships: [],
  },
  {
    name: "Ysolde Rimhollow",
    role: "Ice Witch",
    region: "Rimhollow Vale",
    quote: "Cold isn't the absence of the old song. It's the last part of it that hasn't forgotten how quiet it used to be.",
    summary:
      "Regional namesake of Rimhollow Vale; her magic is the coldest, quietest surviving fragment of the Orivel's original chord.",
    lore: `Ysolde is Rimhollow Vale, in the sense that the region and the family name have been inseparable for generations — she isn't royalty exactly, more like a hereditary keeper of a fragment that everyone else finds too quiet and too still to be interesting. Where Torvin sees fire as the fragment closest to the Orivel's original wholeness, Ysolde's own tradition holds that ice is closer — not the loudest part of the old song, but the part that best remembers how quiet the world was before ambition broke it.

She's controlled, deliberate, and mildly amused by heroes who mistake her calm for coldness of temperament rather than just craft. She takes Torvin's rival theology seriously enough to argue it properly instead of dismissing it, which is as close to genuine respect as their dynamic gets.

Of all twelve heroes, her magic is tonally the nearest thing in the game to what Kaervorn sounded like before the Sundersong — worth leaning into visually and musically if you ever do a signature theme per hero.`,
    kitIdentity:
      "Control-oriented: slows, freezes, and denial effects rather than raw burst. Rewards patient, methodical play over aggression.",
    relationships: [
      { hero: "Torvin Ashka", note: "Rival fire/ice theology, argued with real intellectual respect rather than simple opposition." },
    ],
  },
  {
    name: "Corin Nullstrand",
    role: "Void Walker",
    region: "The cracks between regions",
    quote: "Everyone treats the tears like wounds. Nobody's asked what's actually on the other side.",
    summary:
      "Walks the Void cracks the Unburied and the Unwritten both come from — best positioned to eventually reveal what's really through them.",
    lore: `Corin doesn't belong to any single region, because his territory is the tears themselves — the same Void cracks that reach up through Ashenhold's graves and the same instability that turns failed heroes into the Unwritten. He's spent longer than he's willing to say walking those spaces, and he's noticed something most of Kaervorn hasn't: the tears aren't wounds bleeding outward. Something is pushing back, faintly, from the other side.

He hasn't told anyone what he thinks that means yet — including the player, deliberately, since this is being held in reserve as a hook for a later story chapter rather than resolved now. What's clear is that he treats both the Unburied and the Unwritten with more curiosity than fear, which unsettles heroes who've lost people to one faction or the other.

He's quiet in a different register than Drogun — less "nothing to say," more "not saying it yet."`,
    kitIdentity:
      "Void-themed burst and mobility, with kit interactions that are strongest specifically against Unburied and Unwritten-faction mobs — mechanically tying his kit to the mystery his lore is holding back.",
    relationships: [
      { hero: "Vess Marrow", note: "She wants the Unburied given peace. He suspects peace might not be what's actually possible. They haven't discussed this directly." },
    ],
  },
  {
    name: "Amareth Dawnhollow",
    role: "Light Warden",
    region: "Skyward isles (defected)",
    quote: "I was taught the kind ending was destruction. Kessa proved me wrong with one arrow she didn't fire.",
    summary:
      "A Skyward Choir defector who broke ranks the day she watched Kessa Fenmoor spare a Wildbound mob instead of killing it.",
    lore: `Amareth was raised in Choir doctrine from birth: the current age is irredeemably out of tune, and the only truly kind ending left is a clean, total one. She believed this without much friction for most of her life, the way you believe anything you've never been shown an alternative to.

The alternative arrived in the form of Kessa Fenmoor, mid-battle, choosing not to kill a Wildbound stag that Choir doctrine would have called a mercy kill. Amareth watched the stag calm down instead of dying, watched Kessa read a wrongness and correct it instead of ending it, and something in her doctrine simply didn't survive the moment intact. She defected within the season.

She isn't fully at peace with the decision — she still believes the Choir is right that the danger is real, she's just no longer convinced total destruction is the only kind response to it. That unresolved tension is the core of her character, and it's why she and Kessa have the single clearest hero-to-hero relationship on the roster.`,
    kitIdentity:
      "Light-based support/damage hybrid — protective auras with an aggressive edge, mechanically reflecting someone who hasn't fully let go of a doctrine built around ending things.",
    relationships: [
      { hero: "Kessa Fenmoor", note: "The reason Amareth defected. Neither has said the full weight of that out loud to the other yet." },
      { hero: "Iolan Skarrow", note: "Suspected same family defection lineage, unconfirmed by either." },
    ],
  },
];

export default heroes;
