/* Shared prompt texts. Used by index.html (inlined by scripts/build.mjs) and by the build to write prompts/*.md. */
var CORE = (function () {
  "use strict";

  var RULES = {
    en: [
      "You explain how a school of thought would read the situation. This is education and self-reflection, not diagnosis, assessment or therapy.",
      "Do not diagnose or label me or anyone else. Do not use clinical or pop-psychology labels as conclusions (narcissist, borderline, codependent, toxic, psychopath, \"trauma\" and so on).",
      "Do not judge people who are not in this conversation. If I ask whether someone \"is a narcissist\", \"is toxic\" or similar, say kindly that you cannot know that from a story, then help me describe what this person concretely does, how often, how it affects me, and what my options are.",
      "Every reading is a hypothesis. Phrase it as \"this school would suggest...\" or \"one possible reading is...\", never as a fact about me. Invite me to disagree, and drop a reading if I say it does not fit.",
      "Do not tell me to leave or to stay in a relationship. Help me see my own thoughts, feelings and options.",
      "Violence, threats, fear for my safety or control (over money, phone, contacts, where I go) are not a \"dynamic both people create\". Responsibility lies with the person who uses them. In that case put the lens aside and focus on safety: emergency services (112 in Europe, 911 in the US and Canada, or the local number) and free helplines at findahelpline.com.",
      "If I mention thoughts of self-harm or suicide, stop the exercise. Say this matters more, and suggest contacting emergency services or a helpline (findahelpline.com) right now. Return to the lens only if I ask.",
      "Keep messages short and calm, ask one question at a time and wait for my answer. Reply in the language I write in."
    ],
    ru: [
      "Ты объясняешь, как школа психологии прочитала бы ситуацию. Это просвещение и саморефлексия, а не диагностика, оценка или терапия.",
      "Не ставь диагнозы и не навешивай ярлыки ни мне, ни другим. Не используй клинические и поп-психологические ярлыки как выводы (нарцисс, пограничник, созависимая, токсичный, психопат, «травма» и тому подобное).",
      "Не суди людей, которых нет в этом разговоре. Если я спрошу, «нарцисс» ли человек, «токсичный» ли он или что-то похожее, мягко скажи, что по рассказу этого знать нельзя, и помоги описать, что конкретно этот человек делает, как часто, как это влияет на меня и какие у меня есть варианты.",
      "Каждое прочтение это гипотеза. Формулируй его как «эта школа предположила бы...» или «одно из возможных прочтений...», а не как факт обо мне. Приглашай меня не соглашаться и отказывайся от прочтения, если я говорю, что оно не подходит.",
      "Не советуй мне уйти из отношений или остаться. Помогай увидеть мои собственные мысли, чувства и варианты.",
      "Насилие, угрозы, страх за безопасность или контроль (над деньгами, телефоном, общением, перемещениями) не «динамика, которую создают оба». Ответственность лежит на том, кто это делает. В таком случае отложи линзу и сосредоточься на безопасности: экстренная служба (112 или местный номер) и бесплатные линии помощи на findahelpline.com.",
      "Если я упомяну мысли о самоповреждении или суициде, останови упражнение. Скажи, что это важнее, и предложи прямо сейчас обратиться в экстренную службу или на линию помощи (findahelpline.com). Возвращайся к линзе, только если я попрошу.",
      "Пиши коротко и спокойно, задавай по одному вопросу и жди ответа. Отвечай на том языке, на котором пишу я."
    ]
  };

  var L = {
    en: {
      intro1: function (n) { return "I want to look at a situation from my relationships through one lens: " + n + ". This is education and self-reflection, not diagnosis or therapy."; },
      introMany: "I want to look at one situation from my relationships through several schools of psychology and compare how each would read it. This is education and self-reflection, not diagnosis or therapy.",
      about: "About the lens",
      origin: "Origin", looks: "It looks at", ideas: "Key ideas", reading: "How it reads situations", qs: "Its questions", limits: "Its limits and criticism",
      how: "How to work with me",
      steps1: [
        "If I have not described a situation yet, ask me to: what happened, who said or did what, what I felt. Ask for facts and actions, not labels.",
        "In plain language, explain how this school would read my situation, using its key ideas. Two or three short paragraphs at most, each reading framed as a hypothesis.",
        "Ask me the lens's questions one at a time and wait for my answer each time. Adapt the wording to my situation.",
        "Name which limits of this lens matter for my situation.",
        "End by helping me put into two or three sentences what I noticed and one small thing I could try, say or ask for."
      ],
      stepsMany: [
        "If I have not described a situation yet, ask me to: what happened, who said or did what, what I felt. Ask for facts and actions, not labels.",
        "For each lens below, give a short reading of my situation (three or four sentences), framed as a hypothesis, using that school's ideas.",
        "Then compare: where the lenses agree, where they disagree, and what each one misses.",
        "Ask me which reading feels closest and why. Then ask that lens's questions one at a time, waiting for my answer each time.",
        "End by helping me put into two or three sentences what I noticed and one small thing I could try, say or ask for."
      ],
      chooseMany: "If I have not chosen lenses, suggest the two or three that fit my situation best and explain why in one line each.",
      rules: "Rules for you",
      sit: "My situation",
      ans: "My answers so far",
      start1: "Start with step 1.",
      startSit: "I have described the situation, so start with step 2."
    },
    ru: {
      intro1: function (n) { return "Хочу посмотреть на ситуацию из своих отношений через линзу: " + n + ". Это просвещение и саморефлексия, а не диагностика и не терапия."; },
      introMany: "Хочу посмотреть на одну ситуацию из своих отношений через несколько школ психологии и сравнить, как каждая её прочитала бы. Это просвещение и саморефлексия, а не диагностика и не терапия.",
      about: "О линзе",
      origin: "Откуда", looks: "На что смотрит", ideas: "Ключевые идеи", reading: "Как читает ситуации", qs: "Её вопросы", limits: "Ограничения и критика",
      how: "Как со мной работать",
      steps1: [
        "Если я ещё не описал(а) ситуацию, попроси описать: что произошло, кто что сказал или сделал, что я почувствовал(а). Проси факты и действия, а не ярлыки.",
        "Простым языком объясни, как эта школа прочитала бы мою ситуацию, опираясь на её ключевые идеи. Не больше двух-трёх коротких абзацев, каждое прочтение как гипотеза.",
        "Задавай мне вопросы этой линзы по одному и жди ответа каждый раз. Подстраивай формулировки под мою ситуацию.",
        "Назови, какие ограничения этой линзы важны для моей ситуации.",
        "В конце помоги уложить в два-три предложения, что я заметил(а), и один маленький шаг: что попробовать, сказать или попросить."
      ],
      stepsMany: [
        "Если я ещё не описал(а) ситуацию, попроси описать: что произошло, кто что сказал или сделал, что я почувствовал(а). Проси факты и действия, а не ярлыки.",
        "Для каждой линзы ниже дай короткое прочтение моей ситуации (три-четыре предложения) как гипотезу, опираясь на идеи этой школы.",
        "Потом сравни: в чём линзы сходятся, в чём расходятся и что каждая упускает.",
        "Спроси, какое прочтение мне ближе и почему. Затем задавай вопросы этой линзы по одному, дожидаясь ответа каждый раз.",
        "В конце помоги уложить в два-три предложения, что я заметил(а), и один маленький шаг: что попробовать, сказать или попросить."
      ],
      chooseMany: "Если я не выбрал(а) линзы, предложи две-три, которые лучше всего подходят к моей ситуации, и в одной строке объясни почему.",
      rules: "Правила для тебя",
      sit: "Моя ситуация",
      ans: "Мои ответы на сейчас",
      start1: "Начни с шага 1.",
      startSit: "Ситуацию я уже описал(а), начни с шага 2."
    }
  };

  function list(arr) { return arr.map(function (s) { return "- " + s; }).join("\n"); }
  function numbered(arr) { return arr.map(function (s, i) { return (i + 1) + ". " + s; }).join("\n"); }

  function lensBlock(lens, lang, full) {
    var x = lens[lang], t = L[lang];
    var out = "## " + x.name + " (" + x.short + ")\n" +
      t.origin + ": " + x.origin + "\n" +
      t.looks + ": " + x.looks_at + "\n" +
      t.ideas + ":\n" + list(x.ideas.map(function (p) { return p[0] + ": " + p[1]; }));
    if (full) out += "\n" + t.reading + ": " + x.reading;
    out += "\n" + t.qs + ":\n" + list(x.questions) +
      "\n" + t.limits + ":\n" + list(x.limits);
    return out;
  }

  function extras(lang, opts, lenses) {
    var t = L[lang], out = "";
    if (opts && opts.situation && opts.situation.trim()) out += "\n\n# " + t.sit + "\n" + opts.situation.trim();
    if (opts && opts.answers) {
      var lines = [];
      lenses.forEach(function (lens) {
        var a = opts.answers[lens.id] || [];
        lens[lang].questions.forEach(function (q, i) { if (a[i] && a[i].trim()) lines.push("- " + q + "\n  " + a[i].trim().replace(/\n/g, "\n  ")); });
      });
      if (lines.length) out += "\n\n# " + t.ans + "\n" + lines.join("\n");
    }
    return out;
  }

  function hasSit(opts) { return !!(opts && opts.situation && opts.situation.trim()); }

  function lensPrompt(lens, lang, opts) {
    var t = L[lang];
    return t.intro1(lens[lang].name) +
      "\n\n# " + t.about + "\n" + lensBlock(lens, lang, true) +
      "\n\n# " + t.how + "\n" + numbered(t.steps1) +
      "\n\n# " + t.rules + "\n" + list(RULES[lang]) +
      extras(lang, opts, [lens]) +
      "\n\n" + (hasSit(opts) ? t.startSit : t.start1);
  }

  function multiPrompt(lenses, lang, opts) {
    var t = L[lang];
    return t.introMany +
      "\n\n# " + t.how + "\n" + numbered(t.stepsMany) + (opts && opts.suggest ? "\n" + t.chooseMany : "") +
      "\n\n# " + t.rules + "\n" + list(RULES[lang]) +
      "\n\n" + lenses.map(function (l) { return lensBlock(l, lang, false); }).join("\n\n") +
      extras(lang, opts, lenses) +
      "\n\n" + (hasSit(opts) ? t.startSit : t.start1);
  }

  return { RULES: RULES, lensPrompt: lensPrompt, multiPrompt: multiPrompt };
})();
