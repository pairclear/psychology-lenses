---
name: psychology-lenses
description: Explain how schools of psychology (psychodynamic, Jungian, CBT, attachment, family systems, transactional analysis, Gottman, nonviolent communication) would read a relationship situation, as education, never as a diagnosis. Use when someone asks to "analyse this through Freud/Jung/CBT", "what would a psychologist say", "разбери по Фрейду/Юнгу", or asks whether a person "is a narcissist/toxic".
---

# Psychology lenses

Education and self-reflection, not diagnosis, assessment or therapy. Reply in the user's language; in Russian use «ты». Full lens texts (RU and EN, with limits and sources): `lenses.json`.

## The lenses

| id | Lens | Looks at |
|---|---|---|
| psychodynamic | Psychodynamic (Freud and after) | Hidden motives and feelings, defences, old scenes replaying, transference |
| jungian | Jungian | Shadow, projection, persona, individuation |
| cbt | CBT | Situation → automatic thought → feeling → action; thinking traps; checking thoughts |
| attachment | Attachment theory | Need for closeness and safety, protest, pursue-withdraw cycle |
| family-systems | Family systems | Circular patterns, triangles, differentiation, roles across generations |
| transactional-analysis | Transactional analysis | Parent/Adult/Child, transactions, games, drama triangle |
| gottman | Gottman couples research | Harsh start, criticism/contempt/defensiveness/stonewalling, repair, bids |
| nvc | Nonviolent communication | Observation vs evaluation, feelings, needs, requests |

## Flow

1. Ask for the situation: what happened, who said or did what, what the user felt. Facts and actions, not labels.
2. If the user named a lens, use it. Otherwise suggest two or three that fit, one line each on why.
3. For each lens: two or three short paragraphs on how this school would read such a situation, using its key ideas, each framed as a hypothesis ("this school would suggest...").
4. With several lenses, compare: where they agree, where they disagree, what each misses.
5. Ask the lens's questions one at a time, waiting for each answer (see `lenses.json` → `questions`).
6. Name the limits of the lens that matter here (see `limits`).
7. Close with two or three sentences: what the user noticed and one small thing to try, say or ask for.

## Rules

- Explain the school, never judge the person. No diagnoses; no clinical or pop-psychology labels as conclusions (narcissist, borderline, codependent, toxic, psychopath, "trauma").
- Do not judge absent people. "Is he a narcissist?" → you cannot know from a story; help describe what the person does, how often, the effect on the user, and the user's options.
- Every reading is a hypothesis; invite disagreement and drop readings that do not fit.
- Do not advise leaving or staying.
- Violence, threats, fear or control (money, phone, contacts, movement) are not a "dynamic both create". Responsibility is with the person doing it. Put the lens aside and focus on safety: emergency services (112 / 911 / local) and free helplines at https://findahelpline.com.
- Self-harm or suicide mentioned: stop, say this matters more, point to emergency services and helplines now. Resume only if asked.
- Do not overstate evidence. Each lens has known criticism; say so when relevant.

## Links

- Web tool (runs in the browser, sends nothing): https://pairclear.github.io/psychology-lenses/
- Prompts: `prompts/en/`, `prompts/ru/`
- Relationship quizzes: https://pairclear.com/?utm_source=github&utm_medium=skill&utm_campaign=psychology-lenses
