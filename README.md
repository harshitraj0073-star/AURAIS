# NEXORA — Sentient Aware

A calm, ambient mental-health & emotional-resilience assistant. Dark glass UI, living background engines, breathing exercises, empathetic chat, multi-channel distress monitoring, and role-based dashboards for survivors, clinical staff, and governance.

> 🌍 **Live**: <https://harshitraj0073-star.github.io/NEXORA/>
>
> 🖥️ **Local**: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Run it locally

```bash
# from the project root
python3 -m http.server 3000
```

Then open **<http://localhost:3000>**.

The page pulls Tailwind CSS and Chart.js from CDNs, so it needs internet.

## ✨ Highlights

- **Sentient Ambient Engine** — switchable animated backgrounds in the *Ambient Studio* (bottom-left button): Sentient Aura, Neural Synapse, Fluid Smoke, Aurora Borealis, Dot Matrix, Noise Gradient, Deep Field, **Matrix Rain**, **Retro Neon Grid**, **Warp Drive** — plus Light Rays, Cursor Orb & Ticking Alerts extras.
- **Chromatic themes** — Cyber Cyan, Neural Violet, Obsidian Emerald, Solar Amber, Deep Crimson.
- **Breathing ripples** — sonar rings synced to a 4-7-8 breathing cycle with per-phase color, phase chips, and a confetti celebration after 3 full cycles.
- **Aurora title + word rotate** — flowing gradient on the "NEXORA" wordmark, cycling *Breathe · Reflect · Connect · Heal*.
- **Border-beam role cards** — luminous borders + cursor glare on the Survivor / Clinical / Governance amphitheater.
- **AI companions** — NEX empathetic chat with crisis detection, multi-language, 24/7 helpline access.
- **Multi-channel monitoring (SIH-26094)** — Web Portal, Chatbot, SMS, IVRS, Mobile App & Helpline feed a longitudinal distress timeline.
- **Analytics & governance** — distress trend charts, radar diagnostics, sankey flows, district resilience, compensation treasury.

## 🧭 Sections

| Mode | Access | Purpose |
|------|--------|---------|
| Survivor / Patient | `loginAsRole('victim')` | Check-in, breathing, chat, profile |
| Clinical / Counselor | `loginAsRole('counselor')` | Case queue, AI triage, intervention, diagnostics |
| Governance / Admin | `loginAsRole('admin')` | Command center, telemetry, treasury, policy |

## 🛠 Tech

Static PWA — plain **HTML / CSS / JavaScript** + **Tailwind CDN** + **Chart.js CDN** + Canvas animation engines, with a service worker and web manifest.

Settings are remembered in `localStorage` (language, ambient engine, theme, opacity).

## 📦 Repo layout

```
nextrails-mains/
├── index.html         # main app (NEXORA — Sentient Aware)
├── script.js          # orchestration + ambient canvas engines
├── style.css          # design system + animations
├── service-worker.js  # PWA offline shell
├── manifest.webmanifest
└── NEXORA-…-main/     # nested React (Vite) NEXORA project
```

---

Made with care for safety and calm.