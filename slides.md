---
theme: seriph
title: "Agentic Coding: Live Demo"
info: |
  Rebuilding ConFoo's website with parallel AI agents
class: text-center
background: /img/team-collab.jpg
drawings:
  persist: false
transition: slide-left
fonts:
  sans: Inter
  serif: Playfair Display
  mono: JetBrains Mono
  provider: google
  weights: '300,400,500,600,700'
  italic: true
---

<div class="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-indigo-950/40 z-1"></div>

<div class="relative z-2 flex flex-col items-center justify-center h-full">

<h1 class="!text-6xl !font-light tracking-tight !leading-tight !mb-0 text-white drop-shadow-lg">Agentic Coding</h1>

<p class="text-xl text-white/80 mt-6 font-light tracking-wide drop-shadow-md">Rebuilding ConFoo's Website with AI Agents</p>

<div class="mt-16 text-white/50 text-sm tracking-[0.2em] uppercase">
Rida Al Barazi · ConFoo 2026
</div>

</div>

<div class="absolute bottom-10 right-10 flex items-center gap-3 z-2">
<img src="/feedback-qr.png" class="w-20 h-20 rounded-lg opacity-80" alt="Feedback QR" />
<span class="text-[11px] text-white/40">Feedback</span>
</div>

<!--
Welcome everyone. Friday, right before lunch. I'll earn your attention.

Yesterday I talked about giving agents a safe place to work — isolation, identity, feedback loops.

Today you're going to see me put all of that into practice. I rebuilt confoo.ca — this conference's website — using AI agents working in parallel. Different models, different branches, automated review.

I'll walk you through exactly how it happened, show you the actual agent sessions, and you'll see the working result.
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-2xl text-white/50 font-light leading-relaxed">Yesterday: give agents safe ground.</p>

<p class="text-3xl font-semibold text-white mt-10">Today: build on it.</p>

<p class="mt-12 text-sm text-white/25 font-light">Slides from yesterday → <span class="text-white/40 font-mono">rbarazi.github.io/confoo-2026-safe-agentic-dev-environments</span></p>

</div>

<!--
If you missed yesterday's talk — quick version: isolated environments, scoped credentials, verification loops. The trust architecture.

Today is the other half. I took a fresh Rails app, pointed AI agents at real ConFoo data — 193 sessions, 108 speakers — and had them build a working conference site.

I'm going to walk you through the whole thing. The setup, the sessions, the results — warts and all.
-->

---
layout: cover
background: /img/arcade.jpg
class: text-left
---

<div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-1"></div>

<div class="relative z-2 max-w-2xl">

<h1 class="!text-[2.5rem] !font-light !leading-snug !mb-0">What We're Building</h1>

<div class="mt-10 space-y-4 text-lg text-white/60 font-light">
<p>ConFoo's conference website → a Rails app</p>
<p>193 sessions · 108 speakers · real data</p>
<p>Two agents building in parallel on separate branches</p>
<p>Automated cross-model code review on every PR</p>
</div>

<div class="mt-10 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl inline-block">
<p class="text-white/40 font-mono text-sm">github.com/rbarazi/confoo26</p>
</div>

</div>

<!--
Here's the goal. Take ConFoo's real conference data and build a working site.

The repo is public — you can follow along, fork it, try this yourself after. Let me show you where we're starting from.

[SHOW THE REPO — the starting Rails app, the data files]
-->

---
layout: center
class: text-center
---

<div class="max-w-2xl mx-auto">

<div class="text-emerald-400/80 font-light tracking-[0.15em] text-sm uppercase mb-6">Step 1</div>

<h1 class="!font-light !mb-0">The Style Guide Skill</h1>

<p class="text-white/40 font-light mt-6 text-lg">Giving agents coding conventions before they write a line</p>

<div class="mt-10 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl inline-block">
<p class="text-white/40 font-mono text-sm">github.com/marckohlbrugge/unofficial-37signals-coding-style-guide</p>
</div>

</div>

<!--
First thing I did: create a coding style guide skill.

Marc Kohlbrugge put together the unofficial 37signals coding style guide — the conventions behind Basecamp and HEY. Clean, opinionated Rails.

I turned this into an agent "skill" — a reusable package of context that any agent session loads automatically. Think of it like onboarding a contractor: "Here's how we write code around here."

Let me show you the session where this happened.

[SHOW THE COMPLETED SKILL SESSION — walk through what the agent did, the output, the skill structure]

This took about 8 minutes. The agent read the guide, extracted the relevant conventions, structured them as a skill. Now every agent on this project inherits these rules without me pasting them into every prompt.

That's the key: you're building institutional knowledge that persists across sessions.
-->

---
layout: center
class: text-center
---

<div class="max-w-2xl mx-auto">

<div class="text-amber-400/80 font-light tracking-[0.15em] text-sm uppercase mb-6">Step 2</div>

<h1 class="!font-light !mb-0">Isolated Environments</h1>

<p class="text-white/40 font-light mt-6 text-lg">Two branches · two agents · zero conflicts</p>

<div class="mt-10 p-4 bg-white/[0.04] border border-white/[0.08] rounded-xl inline-block">
<p class="text-white/40 font-mono text-sm">github.com/branchbox/branchbox</p>
</div>

</div>

<!--
Next: isolated environments. This is BranchBox — the tool I talked about yesterday.

Each agent gets its own branch, its own working directory. They can't step on each other.

[SHOW BRANCHBOX SETUP — the two environments, the branch names]

Branch one: Claude. Data models, migrations, import pipeline. Turn 193 sessions and 108 speakers from JSON into a working database.

Branch two: Codex. The UI. Schedule view, speaker pages, session details. Make it look like a conference website.

Same repo, different branches, completely isolated. And both have the style guide skill loaded.
-->

---
layout: cover
background: /img/blueprint.jpg
class: text-left
---

<div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-1"></div>

<div class="relative z-2 max-w-2xl">

<div class="text-rose-400/80 font-light tracking-[0.15em] text-sm uppercase mb-6">Step 3</div>

<h1 class="!text-[2.5rem] !font-light !leading-snug !mb-0">The Agent Sessions</h1>

<div class="grid grid-cols-2 gap-8 mt-10">
<div class="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
<p class="text-amber-400 font-medium text-sm uppercase tracking-wide">Claude</p>
<p class="text-white/40 font-light mt-3 text-sm">Data models · Import pipeline · API</p>
<p class="text-white/20 font-light mt-2 text-xs italic">Spec, not step-by-step instructions</p>
</div>
<div class="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
<p class="text-emerald-400 font-medium text-sm uppercase tracking-wide">Codex</p>
<p class="text-white/40 font-light mt-3 text-sm">Schedule UI · Speaker pages · Navigation</p>
<p class="text-white/20 font-light mt-2 text-xs italic">Style guide skill loaded automatically</p>
</div>
</div>

<div class="mt-10 p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
<p class="text-white/50 font-light text-sm"><span class="text-white/70 font-medium">The spec is a convincing argument</span> — not instructions. Context, constraints, what "done" looks like. Same walkthrough you'd give a new teammate on day one.</p>
</div>

</div>

<!--
Here's where it gets interesting. Let me show you what each agent actually did.

I gave them specs — not step-by-step instructions. A spec is a convincing argument. Why this feature matters, what the constraints are, what done looks like. Same briefing you'd give a coworker.

[SHOW CLAUDE'S SESSION — walk through the spec, the agent's work, key decisions it made]

Notice how Claude figured out the schema on its own. I didn't say "create a sessions table with these columns." I said "we have 193 sessions with this JSON structure, build the data layer." The agent reads the data and makes the architectural calls.

[SHOW CODEX'S SESSION — walk through the UI work, where the style guide influenced decisions]

And here's Codex on the UI branch. See where the style guide kicked in — [point out specific convention choices]. That's the skill doing its job. I didn't have to say "use partials" or "keep controllers thin" in every prompt.

These ran in parallel. While Claude was building migrations, Codex was laying out views. Neither knew about the other.
-->

---
layout: center
class: text-center
---

<div class="max-w-2xl mx-auto">

<div class="text-violet-400/80 font-light tracking-[0.15em] text-sm uppercase mb-6">Step 4</div>

<h1 class="!font-light !mb-0">Cross-Model Review</h1>

<p class="text-white/40 font-light mt-6 text-lg">Claude builds · Codex builds · Gemini reviews</p>

<div class="grid grid-cols-3 gap-6 mt-10 max-w-lg mx-auto">
<div class="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-center">
<p class="text-amber-400 font-medium text-xs uppercase">Claude</p>
<p class="text-white/30 text-xs mt-1">Build</p>
</div>
<div class="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-center">
<p class="text-emerald-400 font-medium text-xs uppercase">Codex</p>
<p class="text-white/30 text-xs mt-1">Build</p>
</div>
<div class="p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-center">
<p class="text-rose-400 font-medium text-xs uppercase">Gemini</p>
<p class="text-white/30 text-xs mt-1">Review</p>
</div>
</div>

<p class="mt-10 text-lg text-white/50 font-light">Structural dissent <span class="text-amber-400 font-medium">by design</span>.</p>

</div>

<!--
When the agents opened PRs, Gemini code review fired automatically. Different model, fresh context, no knowledge of the build session.

[SHOW THE PR — Gemini's actual review comments, the back-and-forth]

This is structural dissent by design. Claude has blind spots. Gemini has different ones. When they review each other, they catch things a single model would miss.

Same principle as human code review — someone who didn't write the code reviews it.

[Walk through a specific review comment and how the agent addressed it]
-->

---
layout: cover
background: /img/circuit-board.jpg
class: text-center
---

<div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-1"></div>

<div class="relative z-2">

<h1 class="!font-light !mb-0 !text-5xl">The Result</h1>

<p class="text-white/40 font-light mt-8 text-lg">Merge · refresh · ship.</p>

</div>

<!--
Let's see the final product.

[SHOW THE WORKING APP — merge the PRs, show the live site with real ConFoo data]

That's your conference. 193 sessions, 108 speakers. Schedule view, speaker pages, session details. Built by AI agents on isolated branches, reviewed by a third model.

[Click through a few pages, show the data is real]
-->

---
layout: center
class: text-center
---

<div class="max-w-2xl mx-auto">

<h1 class="!font-light !mb-0">What Just Happened</h1>

<div class="mt-10 text-left inline-block space-y-4 text-lg text-white/60 font-light">
<p><span class="text-emerald-400 font-medium">1.</span> Created a style guide skill from an open-source repo</p>
<p><span class="text-emerald-400 font-medium">2.</span> Spun up isolated environments with BranchBox</p>
<p><span class="text-emerald-400 font-medium">3.</span> Two agents built in parallel — Claude (data) + Codex (UI)</p>
<p><span class="text-emerald-400 font-medium">4.</span> Both inherited the same coding conventions automatically</p>
<p><span class="text-emerald-400 font-medium">5.</span> Gemini reviewed every PR — different model, fresh eyes</p>
<p><span class="text-emerald-400 font-medium">6.</span> Merged and shipped a working app with real data</p>
</div>

<div class="mt-10 p-5 bg-emerald-500/[0.06] border border-emerald-500/15 rounded-xl">
<p class="text-emerald-400/90 font-medium">The model isn't the bottleneck. Your workflow is.</p>
</div>

</div>

<!--
Let me recap what you just saw.

We turned an open-source style guide into a reusable agent skill. Once. Every session after that gets it for free.

We spun up isolated environments so agents could work in parallel without stepping on each other.

Two different models — Claude and Codex — got focused specs and built simultaneously. Neither knew about the other. Both followed the same conventions.

A third model — Gemini — reviewed their PRs with fresh context.

And we got a working app.

None of this required exotic infrastructure. BranchBox is open source. The skill is a markdown file. The review is a GitHub App.

The magic isn't the models. It's the workflow around them.
-->

---
layout: cover
background: /img/team-collab.jpg
class: text-center
---

<div class="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-indigo-950/40 z-1"></div>

<div class="relative z-2 flex flex-col items-center justify-center h-full">

<h1 class="!font-light !text-4xl !mb-0">Thank You</h1>

<p class="mt-4 text-base text-white/40 font-light">Rida Al Barazi · rida.me · @rida</p>

<p class="mt-2 text-white/25 text-sm italic font-light">"The model isn't the bottleneck. Your workflow is."</p>

<div class="mt-10 grid grid-cols-2 gap-16 items-start max-w-2xl mx-auto">
<div class="text-left text-white/30 text-sm space-y-3 font-light">

<p><span class="text-white/50">App repo:</span> github.com/rbarazi/confoo26</p>
<p><span class="text-white/50">Style guide:</span> github.com/marckohlbrugge/unofficial-37signals-coding-style-guide</p>
<p><span class="text-white/50">BranchBox:</span> github.com/branchbox/branchbox</p>
<p><span class="text-white/50">Yesterday's talk:</span> rbarazi.github.io/confoo-2026-safe-agentic-dev-environments</p>
<p><span class="text-white/50">Blog:</span> rida.me/blog</p>

</div>
<div>

<img src="/feedback-qr.png" class="w-28 h-28 mx-auto rounded-xl opacity-70" alt="Feedback QR" />
<p class="text-[10px] text-white/15 mt-3">confoo.ca/f/DA39…</p>

</div>
</div>

</div>

<!--
Thank you. All the links are on this slide — take a photo.

The app repo is public. The style guide is public. BranchBox is open source. You can try this exact workflow on Monday.

Happy to chat after — I'll be around for the rest of the day.

Enjoy lunch!
-->
