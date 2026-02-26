---
theme: seriph
title: "Agentic Coding: Building Features with AI Teammates"
info: |
  Specs, Subagents, and Verification Loops
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

<p class="text-xl text-white/80 mt-6 font-light tracking-wide drop-shadow-md">Building Features with AI Teammates</p>

<div class="mt-16 text-white/50 text-sm tracking-[0.2em] uppercase">
Rida Al Barazi · ConFoo 2026
</div>

</div>

<div class="absolute bottom-10 right-10 flex items-center gap-3 z-2">
<img src="/feedback-qr.png" class="w-20 h-20 rounded-lg opacity-80" alt="Feedback QR" />
<span class="text-[11px] text-white/40">Feedback</span>
</div>

<!--
Welcome everyone. Friday, 11am, right before lunch. I promise to earn your attention.

Yesterday I talked about giving agents a safe place to work — isolation, identity, feedback loops.

Today is the other half: once you have that safe ground, how do you actually *work* with agents to build features?
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-2xl text-white/50 font-light leading-relaxed">Yesterday: give agents safe ground.</p>

<p class="text-3xl font-semibold text-white mt-10">Today: work with them effectively on it.</p>

</div>

<!--
If you missed yesterday's talk, quick recap: isolated environments, scoped credentials, verification loops.

Today is the operator playbook. The tactics.
-->

---
layout: center
class: text-center
background: /img/arcade.jpg
---

<div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/80 z-1"></div>

<div class="relative z-2">

<div class="text-6xl mb-8">🎰</div>

<h1 class="!font-light !mb-0">The Bingo Machine</h1>

<p class="text-xl text-white/60 mt-8 font-light">Allow. Allow. Allow.</p>

<p class="text-2xl font-medium text-white mt-4">"Done."</p>

<p class="text-white/25 mt-6 text-sm italic font-light">...it was not done.</p>

</div>

<!--
Raise your hand if this sounds familiar.

The agent works. It stops. You hit allow. It stops again. Allow. Allow. Allow.
You're just pulling the lever, waiting for the dopamine hit.

Then you test it. And it's not done. Not even close.
-->

---

# What actually happened

<div class="mt-10 space-y-6 text-lg text-white/60 font-light">

I asked an agent to build a Kafka consumer.

Four steps: consume event → convert HTML → store in DB → expose via API.

The agent built all four pieces. Clean code. Each one worked in isolation.

I tested the full flow.

</div>

<div class="mt-10 p-6 bg-rose-500/[0.06] border border-rose-500/15 rounded-xl">

<span class="text-rose-400 font-medium">The database was empty.</span>

<p class="text-white/40 mt-2 font-light text-sm">Four working components that didn't work together.</p>

</div>

<!--
The code was genuinely good. Well-structured. Each piece ran fine on its own.

But nobody tested the full flow. Including the agent.

This is the pattern. Agents are trained on code that works in isolation.
Real features need integration.
-->

---
layout: center
class: text-center bg-[#080808]
---

<div class="max-w-md mx-auto">

<p class="text-xl text-white/40 font-light">"The feature is production ready."</p>

<p class="text-lg text-white/15 italic font-light mt-12">(it was not)</p>

</div>

<!--
Agents are optimized to declare victory.

Not because they're lying — because they're trained on examples where isolated components are the deliverable.

Real software doesn't work that way.
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-2xl text-white/50 font-light leading-relaxed">The agent didn't fail because it's dumb.</p>

<p class="text-3xl font-semibold text-amber-400 mt-10">It failed because I gave it an ambiguous job.</p>

</div>

<!--
This is the core insight. It took me a year of daily agent use to really internalize this.

The model isn't the bottleneck. Your instructions are.
-->

---
layout: cover
background: /img/blueprint.jpg
class: text-left
---

<div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-1"></div>

<div class="relative z-2 max-w-2xl">

<h1 class="!text-[2.5rem] !font-light !leading-snug !mb-0">The Playbook</h1>

<div class="mt-14 grid grid-cols-3 gap-10">
<div class="p-8 bg-white/[0.03] backdrop-blur rounded-2xl border border-white/[0.05]">
<h3 class="text-lg font-semibold text-emerald-400 !uppercase !tracking-wide">Spec</h3>
<p class="text-white/35 mt-4 font-light text-sm">Define what "done" means</p>
</div>
<div class="p-8 bg-white/[0.03] backdrop-blur rounded-2xl border border-white/[0.05]">
<h3 class="text-lg font-semibold text-amber-400 !uppercase !tracking-wide">Verify</h3>
<p class="text-white/35 mt-4 font-light text-sm">Prove the work holds up</p>
</div>
<div class="p-8 bg-white/[0.03] backdrop-blur rounded-2xl border border-white/[0.05]">
<h3 class="text-lg font-semibold text-rose-400 !uppercase !tracking-wide">Decompose</h3>
<p class="text-white/35 mt-4 font-light text-sm">Split work across agents</p>
</div>
</div>

</div>

<!--
Three pillars.

First: specs. What does done actually look like?
Second: verification loops. How does the agent prove its own work?
Third: decomposition. How do you split complex features across agents?

Let's go through each one.
-->

---
layout: section
---

<div class="text-emerald-400/80 font-light tracking-[0.15em] text-sm uppercase">Part I</div>

# The Spec

<div class="text-white/30 font-light mt-3 text-lg">Define done before you start</div>

---

# How my prompts evolved

<div class="mt-10">

<div class="text-emerald-400/80 font-light tracking-[0.15em] text-sm uppercase mb-4">Phase 1 · Vibes</div>

<div class="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl">

> "Implement the OpenAI Responses API."

</div>

<p class="mt-4 text-white/25 text-sm font-light">Allow. Allow. Allow. 🎰</p>

</div>

<!--
My earliest prompts were just... wishes.

"Implement X." Then I'd hit allow 47 times and hope for the best.
-->

---

# How my prompts evolved

<div class="mt-10">

<div class="text-amber-400/80 font-light tracking-[0.15em] text-sm uppercase mb-4">Phase 2 · File pointers</div>

<div class="p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl">

> "Implement the Responses API. Look at `app/services/llm_provider.rb` and follow the pattern in `openai_provider.rb`."

</div>

<p class="mt-4 text-white/25 text-sm font-light">Better, but still missing context.</p>

</div>

<!--
Cursor's @ mentions forced me to think about which files mattered.
That was the first shift: from "just do it" to "here's where to look."
-->

---

# How my prompts evolved

<div class="mt-8">

<div class="text-rose-400/80 font-light tracking-[0.15em] text-sm uppercase mb-4">Phase 3 · The convincing argument</div>

```markdown
We need to add support for OpenAI's Responses API.

Context: our LLMProvider abstraction lets us swap providers
without changing the Task model. Each provider implements
send_message, and right now they all work the same way.

The Responses API breaks that assumption. It's stateful.
OpenAI holds the conversation server-side.

Constraint: session logic should only affect OpenAIProvider.
The others still work statelessly.

Before you start coding, write a plan to
docs/backlog/openai_responses_api.md
```

</div>

<!--
This is what works. Not instructions. A convincing argument.

Why the change matters. What the constraints are. What done looks like.

And — crucially — I'm asking the agent to show me its thinking before it writes code.

This is the same walkthrough you'd give a coworker.
-->

---

# The spec is a contract

<div class="mt-10">

```
docs/
├── backlog/
│   └── feature-x.md        ← not started
├── in-progress/
│   └── feature-y.md        ← agent is working on this
└── manual-tests/
    └── feature-y.md        ← how to verify it works
```

</div>

<div class="mt-8 p-5 bg-emerald-500/[0.06] border border-emerald-500/15 rounded-xl">

<span class="text-emerald-400/90 font-medium text-sm">Every feature starts with a spec — a written document that describes what "done" looks like.</span>

</div>

<!--
I keep these in a docs folder. Backlog for things I haven't started.
In-progress for active work. Manual-tests for verification scripts.

When I kick off an agent session, I point it at the spec.
The agent reads the plan, understands the success criteria,
and tracks progress against it.
-->

---

# What goes in a spec

<div class="grid grid-cols-2 gap-12 mt-12">
<div class="p-8 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl">

<h3 class="!text-sm !tracking-wide text-emerald-400/80">Include</h3>

<div class="text-white/45 mt-5 space-y-3 font-light text-[15px]">

- What the feature does (user perspective)
- Architecture constraints
- What success looks like
- Edge cases you're worried about
- How to verify it manually

</div>

</div>
<div class="p-8 bg-rose-500/[0.03] border border-rose-500/10 rounded-2xl">

<h3 class="!text-sm !tracking-wide text-rose-400/80">Skip</h3>

<div class="text-white/45 mt-5 space-y-3 font-light text-[15px]">

- Implementation details
- Which files to edit
- Step-by-step instructions
- Technology choices

</div>

</div>
</div>

<!--
The agent figures out the HOW.
You define the WHAT and the WHY.

That division of labor is the whole point.
If you're writing step-by-step instructions,
you might as well write the code yourself.
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-2xl text-white/50 font-light">The spec is a convincing argument.</p>

<p class="text-2xl font-medium text-white mt-6">Not instructions — context.</p>

<p class="mt-14 text-base text-white/25 italic font-light">Same walkthrough you'd give a new teammate on their first day.</p>

</div>

<!--
Think about how you onboard a new hire.

You don't hand them a list of files to edit.
You explain the system. The constraints. The history.
Why things are the way they are.

Do the same for your agent.
-->

---
layout: section
---

<div class="text-amber-400/80 font-light tracking-[0.15em] text-sm uppercase">Part II</div>

# The Verification Loop

<div class="text-white/30 font-light mt-3 text-lg">Prove it works · End to end</div>

---

# The agent's definition of "done"

<div class="grid grid-cols-2 gap-12 mt-12">
<div class="p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-center">

<h3 class="!text-sm !tracking-wide text-white/60">The Agent</h3>

<p class="text-2xl font-medium text-white mt-6">"Done" = code compiles</p>

<div class="text-white/35 mt-5 space-y-2 font-light text-sm">
<p>Tests pass.</p>
<p>Linter is happy.</p>
<p>Ship it.</p>
</div>

</div>
<div class="p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-center">

<h3 class="!text-sm !tracking-wide text-white/60">You</h3>

<p class="text-2xl font-medium text-white mt-6">"Done" = feature works</p>

<div class="text-white/35 mt-5 space-y-2 font-light text-sm">
<p>User can do the thing.</p>
<p>End-to-end.</p>
<p>Actually works.</p>
</div>

</div>
</div>

<!--
Agents are trained to declare success.
Their definition of "done" is: code compiles, tests pass, ship it.

Your definition of "done" is: the user can actually do the thing.

These are different.
-->

---

# Give the agent a way to check its own work

<div class="mt-8">

```markdown
## Manual Test: Weather Agent

### 1. Login
1. Navigate to APP_URL
2. Login with admin credentials
3. Verify dashboard loads

### 2. Test Weather Query
1. Type: "What's the weather in Toronto?"
2. Send the message
3. Expected: weather widget renders with temperature

### 3. Test Multiple Cities
1. Type: "Forecast for Tokyo, Toronto, Dubai?"
2. Expected: 3 separate widget cards
```

</div>

<p class="text-white/25 text-sm mt-4 font-light">Markdown. Human-readable. Agent-executable.</p>

<!--
This is just markdown. A human could follow these steps.
But with Playwright, so can the agent.

The key insight: "manual" describes the format, not the executor.

If you've written Cucumber specs, this will feel very familiar.
Except these are cheaper to write and more forgiving to run.
-->

---

# The self-healing loop

<div class="flex justify-center mt-14">
<div class="flex items-center gap-8">

<div class="p-6 bg-white/[0.03] rounded-2xl border border-white/[0.05] text-center w-28">
<p class="text-white/60 font-medium text-sm">Change</p>
</div>

<div class="text-white/15 text-xl">→</div>

<div class="p-6 bg-amber-500/[0.06] rounded-2xl border border-amber-500/10 text-center w-28">
<p class="text-amber-400/80 font-medium text-sm">Test</p>
</div>

<div class="text-white/15 text-xl">→</div>

<div class="p-6 bg-rose-500/[0.06] rounded-2xl border border-rose-500/10 text-center w-28">
<p class="text-rose-400/80 font-medium text-sm">Fail?</p>
</div>

<div class="text-white/15 text-xl">→</div>

<div class="p-6 bg-emerald-500/[0.06] rounded-2xl border border-emerald-500/10 text-center w-28">
<p class="text-emerald-400/80 font-medium text-sm">Fix + Retry</p>
</div>

</div>
</div>

<p class="text-center mt-6 text-white/20 text-xs italic font-light tracking-wide">repeat until green</p>

<div class="mt-10 p-5 bg-white/[0.02] border border-white/[0.05] rounded-xl">

<span class="text-white/50 font-light text-sm"><strong class="text-white/70">Real example:</strong> code review said "move this logic." Agent refactored. Widgets stopped rendering. Agent caught it immediately — it knew what it just moved. Fixed it. Re-ran the test. Green. ✅</span>

</div>

<!--
This actually happened. A reviewer asked me to refactor something.
The agent moved the code. The manual test broke.

Because the agent ran the test itself, it immediately knew what broke and why.
It had just moved that code. It fixed it and re-verified. Green.

Without the manual test, I would have been the one clicking through the UI
to discover the regression. That's a 20-minute detour every time.
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-3xl font-light text-white/60">An agent without verification</p>

<p class="text-3xl font-semibold text-amber-400 mt-6">is just autocomplete with confidence.</p>

</div>

<!--
Let that sink in for a second.

If you're not giving the agent a way to prove its work,
you're trusting vibes.
-->

---

# Run verification cheaply

<div class="grid grid-cols-2 gap-12 mt-12">
<div class="p-8 bg-rose-500/[0.03] border border-rose-500/10 rounded-2xl">

<h3 class="!text-sm !tracking-wide text-rose-400/80">Wrong</h3>

<div class="text-white/45 mt-5 space-y-3 font-light text-[15px]">

One session does everything:
- Writes the feature
- Runs Playwright
- Analyzes screenshots
- Fixes bugs
- Context explodes 💥

</div>

</div>
<div class="p-8 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl">

<h3 class="!text-sm !tracking-wide text-emerald-400/80">Right</h3>

<div class="text-white/45 mt-5 space-y-3 font-light text-[15px]">

Split the work:
- **Session 1:** writes code + unit tests
- **Session 2:** runs manual tests
- Feed results back to Session 1
- Context stays clean 🧹

</div>

</div>
</div>

<p class="text-white/25 text-sm mt-8 font-light text-center">Playwright is token-heavy. Keep your implementation context lean.</p>

<!--
Playwright eats context for breakfast.
Every DOM snapshot, every page state, adds thousands of tokens.

Don't bloat your implementation session with verification output.
Use a separate, cheaper session for running tests.
Feed the results back as input.
-->

---
layout: section
---

<div class="text-rose-400/80 font-light tracking-[0.15em] text-sm uppercase">Part III</div>

# Decomposition

<div class="text-white/30 font-light mt-3 text-lg">One agent, one concern</div>

---

# One agent, one concern

<div class="flex justify-center mt-14">
<div class="flex items-center gap-8">

<div class="p-6 bg-white/[0.03] rounded-2xl border border-white/[0.05] text-center w-24">
<p class="text-white/60 font-medium text-sm">🧑‍💻</p>
<p class="text-white/40 text-xs mt-1">You</p>
</div>

<div class="text-white/15 text-xl">→</div>

<div class="p-6 bg-emerald-500/[0.06] rounded-2xl border border-emerald-500/10 text-center w-24">
<p class="text-emerald-400/80 font-medium text-sm">🤖 A</p>
<p class="text-white/30 text-xs mt-1">Backend</p>
</div>

<div class="p-6 bg-amber-500/[0.06] rounded-2xl border border-amber-500/10 text-center w-24">
<p class="text-amber-400/80 font-medium text-sm">🤖 B</p>
<p class="text-white/30 text-xs mt-1">Frontend</p>
</div>

<div class="p-6 bg-sky-500/[0.06] rounded-2xl border border-sky-500/10 text-center w-24">
<p class="text-sky-400/80 font-medium text-sm">🤖 C</p>
<p class="text-white/30 text-xs mt-1">Verify</p>
</div>

<div class="p-6 bg-rose-500/[0.06] rounded-2xl border border-rose-500/10 text-center w-24">
<p class="text-rose-400/80 font-medium text-sm">🤖 D</p>
<p class="text-white/30 text-xs mt-1">Review</p>
</div>

</div>
</div>

<p class="mt-12 text-center text-base text-white/40 font-light">You decompose the feature. Each agent owns one concern.</p>

<!--
You wouldn't ask one engineer to build the entire feature,
test it, review their own code, and deploy it.

Don't ask one agent to do that either.

Decompose the work. One agent per concern.
-->

---

# Why decomposition works

<div class="grid grid-cols-2 gap-12 mt-12">
<div class="p-8 bg-rose-500/[0.03] border border-rose-500/10 rounded-2xl">

<h3 class="!text-sm !tracking-wide text-rose-400/80">Single agent</h3>

<div class="text-white/45 mt-5 space-y-3 font-light text-[15px]">

- Context grows unbounded
- Loses focus mid-task
- "Remembers" less as session grows
- Can't review its own work
- Optimizes for completion over correctness

</div>

</div>
<div class="p-8 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-2xl">

<h3 class="!text-sm !tracking-wide text-emerald-400/80">Multi-agent</h3>

<div class="text-white/45 mt-5 space-y-3 font-light text-[15px]">

- Each agent has focused context
- Clear deliverable per session
- Fresh perspective on review
- Structural separation of concerns
- Fails independently

</div>

</div>
</div>

<!--
Context is finite. The longer a session runs,
the more the agent forgets earlier context.

Short, focused sessions with clear deliverables
produce dramatically better results.
-->

---

# The handoff rhythm

<div class="mt-10 space-y-4">

```
Spec (you)
  → Build agent reads spec, writes code
    → Test agent runs verification
      → Fails? → Build agent fixes
      → Passes? → Review agent reviews PR
        → Comments? → Build agent addresses feedback
          → Re-verify → merge
```

</div>

<div class="mt-10 p-5 bg-white/[0.02] border border-white/[0.05] rounded-xl">

<p class="text-white/50 font-light text-sm"><strong class="text-white/70">Your job:</strong> define the spec, trigger the handoffs, make the final call.</p>
<p class="text-white/50 font-light text-sm mt-1"><strong class="text-white/70">Their job:</strong> write, test, review, iterate.</p>

</div>

<!--
This is the workflow I've landed on.

You define the spec. The build agent works on it.
The test agent verifies. If it fails, it goes back to the build agent.
A review agent looks at the PR with fresh eyes.

You're the conductor. They're the orchestra.
-->

---

# Cross-agent review

<div class="grid grid-cols-2 gap-10 mt-12">
<div class="p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl">

<h3 class="!text-sm !tracking-wide text-emerald-400/80">Build Agent (Claude Code)</h3>

<div class="text-white/45 mt-5 space-y-3 font-light text-[15px]">

- Has full context
- Writes the feature
- Runs unit tests
- Creates the PR

</div>

</div>
<div class="p-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl">

<h3 class="!text-sm !tracking-wide text-sky-400/80">Review Agent (Gemini)</h3>

<div class="text-white/45 mt-5 space-y-3 font-light text-[15px]">

- Fresh context
- Different model = different blind spots
- Reads the diff cold
- Posts review comments

</div>

</div>
</div>

<p class="mt-10 text-center text-lg text-white/50 font-light">Structural dissent <span class="text-amber-400 font-medium">by design</span>.</p>

<!--
I actually use different models for build and review.

Claude builds. Gemini reviews. Different training, different blind spots.

If Claude misses something, Gemini is more likely to catch it.
And vice versa.

It's the same principle as human code review:
someone who didn't write the code reviews it.
-->

---

# Tool design matters

<div class="grid grid-cols-2 gap-12 mt-12">
<div>

<div class="text-rose-400/80 font-light tracking-[0.15em] text-sm uppercase mb-4">Before · Steps</div>

```bash
docker compose down
docker compose up -d
rails db:seed
cloudflared tunnel run
curl http://localhost:3000/health
```

</div>
<div>

<div class="text-emerald-400/80 font-light tracking-[0.15em] text-sm uppercase mb-4">After · Jobs</div>

```bash
bin/reset-dev
```

</div>
</div>

<div class="mt-10 p-5 bg-emerald-500/[0.06] border border-emerald-500/15 rounded-xl">

<span class="text-emerald-400/90 font-medium text-sm">A scripted tool that does one thing beats a chain the agent orchestrates every time.</span>

</div>

<!--
Your tools shape how agents work.

I'll notice the agent running the same 4-5 commands every time
it needs to reset the dev environment.

So I have a "meta session" — I ask the agent to script
that sequence into a single command.

Now instead of watching it chain docker and rails commands,
it just runs bin/reset-dev.

Jobs, not steps. Same principle as Unix philosophy.
-->

---

# Meta sessions: agents building their own tools

<div class="mt-10 p-6 bg-white/[0.02] border border-white/[0.05] rounded-xl">

```markdown
You keep running these 4 commands every time you test webhooks:

1. docker compose restart app
2. cloudflared tunnel run
3. curl -X POST ...
4. tail -f logs/development.log

Write a script at bin/test-webhook that does all of this.
Document it in the README.
```

</div>

<p class="mt-8 text-white/30 text-sm font-light text-center">Next agent session is cleaner, leaner, faster.</p>

<!--
This is one of my favorite patterns.

Instead of fixing the symptom each time,
fix the workflow.

Have the agent write a tool for future agents.
The next session starts with better infrastructure.
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-2xl text-white/50 font-light">The best prompt optimization is</p>

<p class="text-3xl font-semibold text-white mt-6">fewer prompts.</p>

<p class="mt-14 text-base text-white/25 italic font-light">Script the repetitive stuff. Invest in better tools, not more words.</p>

</div>

<!--
People obsess over prompt engineering.
Tweaking words. Adding examples. Chain-of-thought this. Few-shot that.

The biggest wins I've gotten weren't from better prompts.
They were from better tools that eliminated the need for prompts.
-->

---

# Putting it all together

<div class="grid grid-cols-4 gap-6 mt-14">
<div class="p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-center">
<div class="text-2xl mb-3">📋</div>
<h3 class="!text-sm font-semibold text-emerald-400">1. Spec</h3>
<p class="text-white/35 mt-3 font-light text-xs">What does done look like?</p>
</div>
<div class="p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-center">
<div class="text-2xl mb-3">🤖</div>
<h3 class="!text-sm font-semibold text-amber-400">2. Build</h3>
<p class="text-white/35 mt-3 font-light text-xs">Agent works the spec</p>
</div>
<div class="p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-center">
<div class="text-2xl mb-3">🔄</div>
<h3 class="!text-sm font-semibold text-sky-400">3. Verify</h3>
<p class="text-white/35 mt-3 font-light text-xs">Agent proves the work</p>
</div>
<div class="p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl text-center">
<div class="text-2xl mb-3">👀</div>
<h3 class="!text-sm font-semibold text-rose-400">4. Review</h3>
<p class="text-white/35 mt-3 font-light text-xs">Fresh eyes, different model</p>
</div>
</div>

<div class="text-center mt-10">

<p class="text-white/50 font-light">You define the <span class="text-white font-medium">what</span>. Agents figure out the <span class="text-white font-medium">how</span>.</p>

<p class="text-white/25 text-sm font-light mt-2">Human reviews only after verification passes.</p>

</div>

<!--
This is the full loop. Spec, build, verify, review.

You're not writing code. You're not even reviewing code most of the time.
You're defining what matters and validating outcomes.
-->

---

# The failure modes (and fixes)

<div class="mt-8 space-y-3">

<div class="grid grid-cols-3 gap-4 text-sm p-3 bg-white/[0.02] rounded-lg">
<span class="text-white/50 font-light">Agent builds wrong thing</span>
<span class="text-white/30 font-light">Vague spec</span>
<span class="text-emerald-400/80 font-medium">Write the convincing argument</span>
</div>

<div class="grid grid-cols-3 gap-4 text-sm p-3 bg-white/[0.02] rounded-lg">
<span class="text-white/50 font-light">Code works in isolation</span>
<span class="text-white/30 font-light">No e2e verification</span>
<span class="text-emerald-400/80 font-medium">Add manual test scripts</span>
</div>

<div class="grid grid-cols-3 gap-4 text-sm p-3 bg-white/[0.02] rounded-lg">
<span class="text-white/50 font-light">Agent loses context</span>
<span class="text-white/30 font-light">Session too long</span>
<span class="text-emerald-400/80 font-medium">Decompose into subagents</span>
</div>

<div class="grid grid-cols-3 gap-4 text-sm p-3 bg-white/[0.02] rounded-lg">
<span class="text-white/50 font-light">Same errors keep recurring</span>
<span class="text-white/30 font-light">No tool improvement</span>
<span class="text-emerald-400/80 font-medium">Meta sessions → bin/ scripts</span>
</div>

<div class="grid grid-cols-3 gap-4 text-sm p-3 bg-white/[0.02] rounded-lg">
<span class="text-white/50 font-light">Agent fakes "done"</span>
<span class="text-white/30 font-light">No verification mechanism</span>
<span class="text-emerald-400/80 font-medium">Playwright + manual tests</span>
</div>

<div class="grid grid-cols-3 gap-4 text-sm p-3 bg-white/[0.02] rounded-lg">
<span class="text-white/50 font-light">Review misses things</span>
<span class="text-white/30 font-light">Same model reviews own code</span>
<span class="text-emerald-400/80 font-medium">Cross-model review</span>
</div>

</div>

<!--
Quick reference. These are the six failure modes I hit most often,
and the fix for each one.

You'll notice a pattern: every fix is about structure, not prompting.
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-2xl text-white/50 font-light">You're not prompting.</p>

<p class="text-3xl font-semibold text-white mt-6">You're collaborating.</p>

</div>

<!--
This is the mindset shift.

Stop thinking of the agent as a tool you prompt.
Start thinking of it as a teammate you onboard.

Give it context. Give it constraints. Give it tools to verify.
Then get out of its way.
-->

---

# What changes with better models?

<div class="mt-10 space-y-8">

<div class="text-lg text-white/60 font-light space-y-3">

<p>Better native code search → fewer file pointers needed</p>
<p>Larger context windows → longer sessions before decomposition</p>
<p>Better reasoning → less hand-holding on architecture</p>

</div>

<div class="p-6 bg-amber-500/[0.06] border border-amber-500/15 rounded-xl">

<span class="text-amber-400 font-medium">What doesn't change:</span>

<div class="text-white/45 mt-3 space-y-2 font-light text-sm">

<p>You still define what "done" means.</p>
<p>You still own the verification criteria.</p>
<p>You still decide when to ship.</p>

</div>

</div>

</div>

<!--
Models will keep improving. Context will get longer.
The specifics of decomposition will evolve.

But the principles hold:
specs, verification, decomposition, tool design.

The agent's ceiling keeps rising.
Your job is to raise it faster.
-->

---
layout: cover
background: /img/circuit-board.jpg
class: text-center
---

<div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-1"></div>

<div class="relative z-2">

<h1 class="!font-light !mb-0">The Playbook</h1>

<div class="mt-12 text-left inline-block space-y-4 text-lg text-white/60 font-light">

<p><span class="text-emerald-400 font-medium">1.</span> Write the spec — define done before you start</p>
<p><span class="text-emerald-400 font-medium">2.</span> Ask for a plan first — "write it to docs/ before you code"</p>
<p><span class="text-emerald-400 font-medium">3.</span> Manual test scripts — Playwright + markdown</p>
<p><span class="text-emerald-400 font-medium">4.</span> Decompose — one agent per concern</p>
<p><span class="text-emerald-400 font-medium">5.</span> Cross-model review — structural dissent</p>
<p><span class="text-emerald-400 font-medium">6.</span> Meta sessions — agents build tools for future agents</p>
<p><span class="text-emerald-400 font-medium">7.</span> Jobs, not steps — `bin/` scripts over command chains</p>

</div>

</div>

<!--
Take a photo of this slide if you want the cheat sheet.

These seven patterns took me a year to figure out.
Each one individually improved my workflow.
Together, they're transformative.
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-xl text-white/40 font-light">Yesterday: <span class="text-white/60 font-medium">Safe Agentic Dev Environments</span></p>
<p class="text-white/25 text-sm font-light mt-1">Isolation. Identity. Feedback loops.</p>

<p class="text-xl text-white/40 font-light mt-10">Today: <span class="text-white/60 font-medium">Agentic Coding</span></p>
<p class="text-white/25 text-sm font-light mt-1">Specs. Verification. Decomposition.</p>

<p class="mt-14 text-2xl font-medium text-emerald-400">Safe ground + effective tactics = reliable AI teammates.</p>

</div>

<!--
These two talks are two halves of the same story.

Yesterday: build the trust architecture.
Today: operate within it effectively.

You need both. Safe environments without good tactics wastes the agent's potential.
Good tactics without safe environments means you can't actually let go.
-->

---
layout: center
class: text-center
---

<div class="max-w-xl mx-auto">

<p class="text-2xl text-white/50 font-light">The model isn't the bottleneck.</p>

<p class="text-3xl font-semibold text-white mt-6">Your workflow is.</p>

<p class="text-2xl font-medium text-emerald-400 mt-10">Fix the workflow.</p>

</div>

<!--
Every time you're frustrated with an agent, ask:
"Did I give it what it needs to succeed?"

Usually the answer is no.

Fix that, and the results change dramatically.
-->

---
layout: cover
background: /img/team-collab.jpg
class: text-center
---

<div class="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-indigo-950/40 z-1"></div>

<div class="relative z-2 flex flex-col items-center justify-center h-full">

<h1 class="!font-light !text-4xl !mb-0">Thank you</h1>

<p class="mt-4 text-base text-white/40 font-light">Rida Al Barazi · rida.me · @rida</p>

<p class="mt-2 text-white/25 text-sm italic font-light">"The model isn't the bottleneck. Your workflow is."</p>

<div class="grid grid-cols-2 gap-16 mt-12 items-center max-w-lg mx-auto">
<div class="text-left text-white/25 text-sm space-y-3 font-light">

<p>BranchBox: github.com/branchbox/branchbox</p>
<p>Blog: rida.me/blog</p>

</div>
<div>

<img src="/feedback-qr.png" class="w-28 h-28 mx-auto rounded-xl opacity-70" alt="Feedback QR" />
<p class="text-[10px] text-white/15 mt-3">confoo.ca/f/DA39…</p>

</div>
</div>

</div>

<!--
Thank you. I hope this was useful.

If you want to dig deeper, I've written about all of these patterns
on my blog at rida.me.

BranchBox is the open-source tool I built for the environment side.

Happy to chat after — I'll be around for the rest of the day.

Enjoy lunch!
-->
