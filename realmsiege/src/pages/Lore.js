import { useState } from 'react';
import { Link } from 'react-router-dom';

const LORE_SECTIONS = [
  {
    id: 'aethon',
    title: 'The Age of Resonance',
    subtitle: 'Before the realm had a name, it had a heartbeat.',
    icon: '⬡',
    color: '#c8960c',
    content: [
      {
        type: 'p',
        text: 'Deep beneath what would become the Verdant Plains, an entity older than language pulsed with slow, patient power. The scholars of the Second Age would eventually name it Aethon — from the old tongue meaning "the fire that does not consume." But Aethon was not fire. Aethon was not anything so simple as an element. Aethon was the living principle that made elements possible — the underlying harmonic that allowed fire to be fire and water to be water without destroying each other.'
      },
      {
        type: 'p',
        text: 'Ten elemental forces emerged from its dreaming — Fire, Water, Earth, Air, Electric, Ice, Dark, Light, Nature, Void — each one a different frequency of Aethon\'s heartbeat, each one in perfect tension with the others. This tension was not conflict. It was music.'
      },
      {
        type: 'mechanic',
        label: 'Why towers exist',
        text: 'The original towers were not built. They grew from the earth like teeth from a jaw — instruments that sang each element back to Aethon. They were not weapons. They were a feedback loop of elemental harmony that kept the realm alive.'
      },
      {
        type: 'italic',
        text: 'This was the Age of Resonance. It lasted for an unimaginable span of time. It ended in a single afternoon.'
      }
    ]
  },
  {
    id: 'break',
    title: 'The Break',
    subtitle: 'What the Vael\'dri did.',
    icon: '💔',
    color: '#ef4444',
    content: [
      {
        type: 'p',
        text: 'Twelve thousand years before the events of Realm Siege, a civilization called the Vael\'dri — the ancestors of every hero in the game — heard the towers singing and wanted to sing with them. Their first towers harmonized beautifully. For a generation, the realm grew richer. Then they got greedy.'
      },
      {
        type: 'p',
        text: 'Not out of malice. This is the tragic part. A scholar named Varek theorized that if enough towers were placed in the right configuration, Aethon itself could be woken — brought fully into consciousness, made to speak. What Varek didn\'t understand was that Aethon was already awake. Already speaking. They simply weren\'t listening carefully enough.'
      },
      {
        type: 'mechanic',
        label: 'Why mobs attack towers',
        text: 'The creatures aren\'t evil. They\'re in pain. Discordant resonance from improperly placed towers is agony to beings made of pure element. They don\'t attack the realm. They attack the noise.'
      },
      {
        type: 'mechanic',
        label: 'Why fused towers are stronger',
        text: 'A single element creates noise. Two elements in proper harmony create a new frequency that speaks to the creatures in a language they can understand. Fused towers aren\'t just stronger — they\'re more correct. Closer to what towers were always supposed to be.'
      }
    ]
  },
  {
    id: 'cycle',
    title: 'The Cycle',
    subtitle: 'Every run is a new cycle of the same war.',
    icon: '🔄',
    color: '#4e9af1',
    content: [
      {
        type: 'p',
        text: 'The realm does not remember the First Siege. The damage to the resonance network was too severe. What Aethon did — in the only act of will it has ever performed in the physical world — was reset. It healed what it could and breathed the realm back into existence. New forests. New plains. New civilizations. But the creatures remembered.'
      },
      {
        type: 'p',
        text: 'In their bones, in their elemental cores, they carry the memory of the pain. Every cycle, when the towers begin to rise and the resonance begins to build, something ancient and frightened stirs in them. The Beasts begin to run. The Undead begin to march. The Demons begin to scheme.'
      },
      {
        type: 'mechanic',
        label: 'Why the skill tree resets',
        text: 'The skill tree grows within a cycle because the hero is remembering — not learning. The nodes they unlock are recalled, not taught. When the cycle ends and the tree resets, the memory that was being recovered dissolves back into the resonance.'
      },
      {
        type: 'mechanic',
        label: 'What prestige actually is',
        text: 'Prestige represents a hero who has died at the end of a cycle and been re-resonated — woven back into Aethon\'s network with a thread of their previous self intact. The Prestige Tree is what survives the reset. It grows slower because true memory is harder to hold than borrowed recollection.'
      },
      {
        type: 'quote',
        text: 'Each prestige is not a failure reset. It is Aethon healing one degree further than it healed before.'
      }
    ]
  },
  {
    id: 'watcher',
    title: 'The Watcher',
    subtitle: 'Varek\'s twelve-thousand-year vigil.',
    icon: '👁️',
    color: '#a855f7',
    content: [
      {
        type: 'p',
        text: 'On the final day of the First Siege, Varek placed his hands against the base of Aethon\'s original spire. He heard the true resonance for the first time. He understood, in that moment, exactly what he had done. He chose to stay. He poured his own resonance — his life, his memories, his fundamental self — into Aethon\'s network. Not to fix the damage. That was beyond one man. Instead, he became the network\'s observer.'
      },
      {
        type: 'p',
        text: 'He has watched every cycle. He remembers every hero. He has seen configurations that almost worked — a particular combination of hero, tower placement, and mob-counter strategy that brought Aurelion to 3% health before the ancient Seraph\'s final phase destroyed everything. He cannot share it. The knowing would break the hero\'s ability to make genuine choices, and genuine choices are, apparently, the entire point.'
      },
      {
        type: 'mechanic',
        label: 'Why his Omens feel personal',
        text: 'The Watcher\'s Omens are not generic buffs. They are strategic corrections derived from watching thousands of previous cycles fail. When he sends you the Omen of Ash because you favor fire towers, he has watched the precise failure mode of fire-heavy builds in your level range across hundreds of runs. He is not being generous. He is being precise.'
      },
      {
        type: 'secret',
        label: 'Hidden interaction',
        text: 'If a player idles on the main menu for twelve minutes — the time Varek spent at the base of Aethon\'s spire before he made his choice — the Watcher does one thing he has never done in any previous cycle. He turns to look directly at the player. He says nothing. After a moment, he turns back. It is the only acknowledgment he allows himself that he knows someone is watching him watch.'
      }
    ]
  },
  {
    id: 'factions',
    title: 'The Factions',
    subtitle: 'Who they were before they became monsters.',
    icon: '⚔️',
    color: '#f97316',
    content: [
      {
        type: 'faction',
        name: 'Undead Legion',
        color: '#8b5cf6',
        lore: 'Once the armies of Ashenhold — a warrior kingdom built on the memory of a catastrophe they couldn\'t quite recall. When Void tears widened again, they were first to respond. They fought bravely. They died in enormous numbers. The Void does not let soldiers rest. Death Knights still remember their oaths. They still fight in formation. But their enemy has become everything that lives, because life is resonance, and resonance is the sound that tortures them.'
      },
      {
        type: 'faction',
        name: 'Elemental Kin',
        color: '#f97316',
        lore: 'The oldest faction. They predate civilization. In the Age of Resonance they were vast, serene, the size of small mountains. The First Siege broke them — a Fire Elemental that absorbed enough discordant resonance didn\'t die. It fractured. One vast being split into dozens of smaller ones. The Magma Slugs are what Fire Elementals become after centuries of fracturing. Magnar the Infernal has been searching for the sound that will make him whole again for twelve thousand years.'
      },
      {
        type: 'faction',
        name: 'Beast Horde',
        color: '#84cc16',
        lore: 'Not corrupted. Not undead. Simply animals that feel resonance distortion before any other faction — the way a dog feels a coming storm. They don\'t attack towers because they\'re evil. They attack because improperly placed towers produce a frequency that is physically painful to creatures of natural resonance. Thornback Rex is the most tired creature in the realm. He\'s been in pain for twelve thousand years and has forgotten there was ever anything else.'
      },
      {
        type: 'faction',
        name: 'Mechanical',
        color: '#6b7280',
        lore: 'The Ironveil Republic solved the elemental problem with towers that felt no resonance. Perfect soldiers. Then the Void came and their towers couldn\'t sense the warning. The Republic was destroyed in a single night. But the towers kept running. Steel Drones, siege machines, and clockwork golems are Ironveil military hardware running without maintenance or orders for millennia, still targeting "resonant threats" — which now means everything that lives.'
      },
      {
        type: 'faction',
        name: 'Shadow Court',
        color: '#a855f7',
        lore: 'Not creatures from another plane. Heroes from previous cycles who failed. When a cycle ends in defeat, the heroes who died don\'t simply cease to exist — the Void tears catch their resonance. Their understanding of elemental harmony becomes their weapon against it. A Shadow Archer was once an Archer hero. They knew how to place towers. Now they use that knowledge to unmake them.'
      },
      {
        type: 'faction',
        name: 'Celestial Guard',
        color: '#fbbf24',
        lore: 'The most morally complex faction. They are not corrupted or broken. They are genuine angelic warriors fighting for something they truly believe is right: the destruction of the realm. They have watched the cycle repeat and concluded that the only way to end it is to prevent it from beginning. No towers. No resonance. No realm. They are wrong. But they are not evil. They simply cannot conceive of a solution that requires the very thing causing the problem.'
      },
      {
        type: 'faction',
        name: 'Fungal Swarm',
        color: '#22c55e',
        lore: 'Every place a tower has ever stood leaves a resonance scar in the earth. Over thousands of years, something grew from those scars — a network of mycelia that absorbed resonance echoes and slowly became a distributed consciousness. The Fungal Swarm is the realm remembering its own wounds. Their death explosion is not a weapon. It is a distress signal — a dying Spore Walker releasing every resonance memory it carries.'
      },
      {
        type: 'faction',
        name: 'Demon Host',
        color: '#ef4444',
        lore: 'The only faction that chose this. In the Third Age, a mage named Seraphine Vexar made a deal with void entities to use them as buffers against the Void itself. It worked for forty years. Then Seraphine\'s civilization died and the terms of the deal were lost. The Demons, no longer bound by negotiators who understood the terms, returned to the only behavior the Void had ever taught them. The Devourer — the Level 20 boss — is the oldest surviving demon. It remembers Seraphine. It is still trying to fulfill a contract everyone else has forgotten.'
      }
    ]
  },
  {
    id: 'heroes',
    title: 'The Heroes',
    subtitle: 'What they actually are.',
    icon: '🧙',
    color: '#34d399',
    content: [
      {
        type: 'p',
        text: 'Every hero is a Vael\'dri descendant — carrying in their blood a fragment of the original resonance. They don\'t know this. To them it feels like intuition. Like they were born knowing certain things. Like some part of them recognizes the towers when they build them, like meeting an old friend.'
      },
      {
        type: 'p',
        text: 'What the heroes are, in functional terms, is resonance keys. Aethon cannot directly intervene in the cycle. But it can reinforce specific bloodlines, making certain descendants slightly more attuned. Heroes are the people Aethon has been quietly cultivating across cycles. Not chosen ones. Not saviors. Just people with the right bloodline, the right circumstances, and — crucially — the right choice.'
      },
      {
        type: 'hero_spotlight',
        name: 'Aelindra',
        subtitle: 'The First Hero, Every Cycle',
        text: 'In every cycle, in every civilization, there is a woman with elven blood and exceptional vision who picks up a bow and decides someone should try to stop what\'s coming. The Watcher watches her every time and experiences something he has no name for. He was human once, and humans called it hope.'
      },
      {
        type: 'hero_spotlight',
        name: 'Morgath',
        subtitle: 'What He Bargained For',
        text: 'He crossed into the Void willingly — not to make a deal, but to understand. The void entities did not give him his abilities. They took something else. What they took is the game\'s deepest secret. The Watcher says only: "He gave them his ability to forget. He will remember everything he does in service of the realm. Every death he causes. Every choice. He will never be allowed to stop carrying any of it."'
      },
      {
        type: 'hero_spotlight',
        name: 'Nyx',
        subtitle: 'The One The Watcher Won\'t Discuss',
        text: 'Nyx has no origin in the Watcher\'s records. Every hero has a resonance signature Aethon records from birth. Nyx does not. The Watcher\'s note reads: "She was not cultivated. She arrived. I do not know from where. I do not know what she wants. I have chosen to ask no further questions."'
      },
      {
        type: 'hero_spotlight',
        name: 'Solara',
        subtitle: 'Why She Burns Brightest',
        text: 'The last of the Celestial Guard who came through Aethon\'s reinforcement — and then chose the wrong side. She was sent as a scout. She watched Aelindra build the first tower instead. Something in that moment reached through her celestial training and touched something her commanders had assumed she no longer had. She did not report back. She picked up a sword.'
      }
    ]
  },
  {
    id: 'ending',
    title: 'The Endgame',
    subtitle: 'What actually happens when you win.',
    icon: '♾️',
    color: '#c8960c',
    content: [
      {
        type: 'p',
        text: 'Every time a player completes a run and earns Prestige Points, something real happens in the lore: the Void tears close slightly more than last time. Not because the hero killed more efficiently. But because genuine resonance — real, chosen, imperfect, human resonance — is the only thing the Void cannot absorb. The Void consumes elements. It consumes power. It cannot consume the act of a person deciding, freely, to try again.'
      },
      {
        type: 'p',
        text: 'At Prestige 10, after clearing Level 25 Stage 50 on Hard mode, a new counter appears in the Watcher\'s statistics panel. Never explained. Never annotated. It simply reads:'
      },
      {
        type: 'mechanic',
        label: 'New counter at Prestige 10',
        text: 'TEARS SEALED: [counting upward]'
      },
      {
        type: 'p',
        text: 'Players who reach a certain threshold — which changes per player, based on their specific history — will have the Watcher turn to look at them. This time, he speaks. The message is procedurally generated from their run history. But it always ends the same way:'
      },
      {
        type: 'quote',
        text: '"I have watched [X] cycles. Yours is the first in which I have allowed myself to believe it might actually end. I do not know if this is wisdom or weakness. I find I do not care. Keep building."'
      }
    ]
  }
];

function ContentBlock({ block }) {
  switch (block.type) {
    case 'p':
      return <p style={{ fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.8, marginBottom: '1.2rem' }}>{block.text}</p>;
    case 'italic':
      return <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.2rem' }}>{block.text}</p>;
    case 'quote':
      return (
        <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1.5rem', margin: '1.5rem 0' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text)', lineHeight: 1.8, fontStyle: 'italic' }}>{block.text}</p>
        </div>
      );
    case 'mechanic':
      return (
        <div style={{ background: 'rgba(200,150,12,0.06)', border: '1px solid var(--gold-dim)', borderRadius: 4, padding: '1rem 1.2rem', margin: '1.2rem 0' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.4rem' }}>⚙ {block.label}</div>
          <p style={{ fontSize: '.95rem', color: 'var(--text)', lineHeight: 1.7 }}>{block.text}</p>
        </div>
      );
    case 'secret':
      return (
        <div style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 4, padding: '1rem 1.2rem', margin: '1.2rem 0' }}>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '.4rem' }}>🔒 {block.label}</div>
          <p style={{ fontSize: '.95rem', color: 'var(--text)', lineHeight: 1.7 }}>{block.text}</p>
        </div>
      );
    case 'faction':
      return (
        <div style={{ background: 'var(--deep)', border: `1px solid ${block.color}33`, borderLeft: `3px solid ${block.color}`, borderRadius: '0 4px 4px 0', padding: '1.2rem', marginBottom: '1rem' }}>
          <div style={{ fontFamily: 'Cinzel,serif', fontSize: '1rem', fontWeight: 700, color: block.color, marginBottom: '.5rem' }}>{block.name}</div>
          <p style={{ fontSize: '.9rem', color: 'var(--muted)', lineHeight: 1.7 }}>{block.lore}</p>
        </div>
      );
    case 'hero_spotlight':
      return (
        <div style={{ background: 'var(--deep)', border: '1px solid var(--border)', borderRadius: 4, padding: '1.5rem', marginBottom: '1rem' }}>
          <div style={{ fontFamily: 'Cinzel,serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '.2rem' }}>{block.name}</div>
          <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.7rem' }}>{block.subtitle}</div>
          <p style={{ fontSize: '.95rem', color: 'var(--text)', lineHeight: 1.7, fontStyle: 'italic' }}>{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function Lore() {
  const [active, setActive] = useState('aethon');
  const current = LORE_SECTIONS.find(s => s.id === active);

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">// World Lore</div>
        <h1 className="section-title">The Lore of Realm Siege</h1>
        <p className="section-intro">The deep canon behind every mechanic. Every system has a reason. Every enemy has a history. Every reset has a meaning.</p>

        <div style={{ background: 'rgba(200,150,12,0.04)', border: '1px solid var(--gold-dim)', borderRadius: 4, padding: '1rem 1.5rem', marginBottom: '3rem', fontSize: '.9rem', color: 'var(--muted)' }}>
          ✦ <strong style={{ color: 'var(--text)' }}>Living document.</strong> Lore is revealed progressively in-game through the Bestiary, Watcher interactions, and item descriptions. This page contains full spoilers. Read at your own risk.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* SIDEBAR */}
          <div style={{ position: 'sticky', top: 80 }}>
            {LORE_SECTIONS.map(section => (
              <div key={section.id} onClick={() => setActive(section.id)}
                style={{ display: 'flex', alignItems: 'center', gap: '.8rem', padding: '1rem', borderRadius: 4, cursor: 'pointer', marginBottom: '.4rem', background: active === section.id ? 'rgba(200,150,12,0.08)' : 'transparent', border: `1px solid ${active === section.id ? 'var(--gold-dim)' : 'transparent'}`, transition: 'all .2s' }}>
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{section.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Cinzel,serif', fontSize: '.85rem', fontWeight: 700, color: active === section.id ? 'var(--gold)' : '#fff' }}>{section.title}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '.1rem', fontStyle: 'italic' }}>{section.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CONTENT */}
          {current && (
            <div>
              <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.5rem' }}>
                  <span style={{ fontSize: '2rem' }}>{current.icon}</span>
                  <div>
                    <h2 style={{ fontFamily: 'Cinzel,serif', fontSize: '1.8rem', fontWeight: 700, color: current.color }}>{current.title}</h2>
                    <p style={{ fontFamily: 'Crimson Text,serif', fontStyle: 'italic', color: 'var(--muted)', fontSize: '1rem' }}>{current.subtitle}</p>
                  </div>
                </div>
              </div>
              {current.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--deep)', border: '1px solid var(--border)', borderRadius: 4, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Cinzel,serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '.5rem' }}>Want the full lore document?</div>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '.95rem' }}>The complete Realm Siege Lore Bible (~8,500 words) including all hidden secrets, Watcher archives, and faction deep-lore is available to newsletter subscribers.</p>
          <Link to="/#notify" className="btn btn-secondary">Get Notified at Launch</Link>
        </div>
      </div>
    </div>
  );
}
