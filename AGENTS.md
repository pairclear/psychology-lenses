# AGENTS.md

## Using the lenses in an agent or chatbot

Follow [`SKILL.md`](SKILL.md). The lens texts live in [`lenses.json`](lenses.json) (`lenses[].en` / `lenses[].ru`: `name`, `looks_at`, `ideas`, `reading`, `questions`, `limits`, plus shared `sources`). Ready prompts are in `prompts/en/` and `prompts/ru/`.

Non-negotiable: no diagnoses or labels for anyone, no verdicts on absent people, readings as hypotheses, no advice to leave or stay, safety first for violence, control, self-harm or suicide (emergency services, https://findahelpline.com).

## Working on this repo

- Edit `lenses.json`, `src/core.js` (shared prompt texts and rules) or `src/index.template.html` (the page). Never edit `index.html` or `prompts/` by hand: they are generated.
- Rebuild: `node scripts/build.mjs` (Node 18+, no dependencies).
- The page must stay one self-contained file with no network requests, analytics or external fonts.
- Keep every lens's `limits` honest and every source real. No health claims.
