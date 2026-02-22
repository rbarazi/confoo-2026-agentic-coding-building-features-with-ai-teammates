---
theme: default
title: "Agentic Coding: Building Features with AI Teammates"
info: |
  Specs, Subagents, and Verification Loops
class: text-center
drawings:
  persist: false
transition: slide-left
---

# Agentic Coding

### Building Features with AI Teammates

Rida Al Barazi · ConFoo 2026

<!--
Welcome everyone. Friday, 11am, right before lunch. I promise to earn your attention.

Yesterday I talked about giving agents a safe place to work — isolation, identity, feedback loops.

Today is the other half: once you have that safe ground, how do you actually *work* with agents to build features?
-->

---
layout: center
---

# Yesterday: give agents safe ground.

# Today: work with them effectively on it.

<!--
If you missed yesterday's talk, quick recap: isolated environments, scoped credentials, verification loops.

Today is the operator playbook. The tactics.
-->

---
layout: center
class: text-center
---

<div class="text-6xl mb-8">🎰</div>

# The Bingo Machine

Allow. Allow. Allow.

"Done."

<p class="text-gray-400 mt-4 text-sm">...it was not done.</p>

<!--
Raise your hand if this sounds familiar.

The agent works. It stops. You hit allow. It stops again. Allow. Allow. Allow.
You're just pulling the lever, waiting for the dopamine hit.

Then you test it. And it's not done. Not even close.
-->

---

# What actually happened

I asked an agent to build a Kafka consumer.

Four steps: consume event → convert HTML → store in DB → expose via API.

The agent built all four pieces. Clean code. Each one worked in isolation.

I tested the full flow.

**The database was empty.**

Four working components that didn't work together.

<!--
The code was genuinely good. Well-structured. Each piece ran fine on its own.

But nobody tested the full flow. Including the agent.

This is the pattern. Agents are trained on code that works in isolation.
Real features need integration.
-->

---
layout: center
class: text-center
---

<div class="text-8xl mb-4">🤖💬</div>

## "The feature is production ready."

<div class="text-6xl mt-8">🧑‍💻🔍</div>

## *narrator: it was not*

<!--
Agents are optimized to declare victory.

Not because they're lying — because they're trained on examples where isolated components are the deliverable.

Real software doesn't work that way.
-->

---
layout: center
---

# The agent didn't fail because it's dumb.

# It failed because I gave it an ambiguous job.

<!--
This is the core insight. It took me a year of daily agent use to really internalize this.

The model isn't the bottleneck. Your instructions are.
-->

---

# The Playbook

<div class="grid grid-cols-3 gap-8 mt-12">
<div class="text-center">
<div class="text-5xl mb-4">📋</div>
<h3>Spec</h3>
<p class="text-sm text-gray-400">Define what "done" means</p>
</div>
<div class="text-center">
<div class="text-5xl mb-4">🔄</div>
<h3>Verify</h3>
<p class="text-sm text-gray-400">Prove the work holds up</p>
</div>
<div class="text-center">
<div class="text-5xl mb-4">🧩</div>
<h3>Decompose</h3>
<p class="text-sm text-gray-400">Split work across agents</p>
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
layout: center
class: text-center bg-black text-white
---

# 📋 The Spec

---

# How my prompts evolved

**Phase 1: Vibes**

> "Implement the OpenAI Responses API."

<div class="mt-4 text-gray-400 text-sm">Allow. Allow. Allow. 🎰</div>

<!--
My earliest prompts were just... wishes.

"Implement X." Then I'd hit allow 47 times and hope for the best.
-->

---

# How my prompts evolved

**Phase 2: File pointers**

> "Implement the Responses API. Look at `app/services/llm_provider.rb` and follow the pattern in `openai_provider.rb`."

<div class="mt-4 text-gray-400 text-sm">Better, but still missing context</div>

<!--
Cursor's @ mentions forced me to think about which files mattered.
That was the first shift: from "just do it" to "here's where to look."
-->

---

# How my prompts evolved

**Phase 3: The convincing argument**

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

<!--
This is what works. Not instructions. A convincing argument.

Why the change matters. What the constraints are. What done looks like.

And — crucially — I'm asking the agent to show me its thinking before it writes code.

This is the same walkthrough you'd give a coworker.
-->

---

# The spec is a contract

```
docs/
├── backlog/
│   └── feature-x.md        ← not started
├── in-progress/
│   └── feature-y.md        ← agent is working on this
└── manual-tests/
    └── feature-y.md        ← how to verify it works
```

Every feature starts with a spec.

Not an automated test — a **written document** that describes what "done" looks like.

<!--
I keep these in a docs folder. Backlog for things I haven't started.
In-progress for active work. Manual-tests for verification scripts.

When I kick off an agent session, I point it at the spec.
The agent reads the plan, understands the success criteria,
and tracks progress against it.
-->

---

# What goes in a spec

<div class="grid grid-cols-2 gap-8">
<div>

### ✅ Include

- What the feature does (user perspective)
- Architecture constraints
- What success looks like
- Edge cases you're worried about
- How to verify it manually

</div>
<div>

### ❌ Skip

- Implementation details
- Which files to edit
- Step-by-step instructions
- Technology choices

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
---

# The spec is a convincing argument.

# Not instructions — context.

<p class="text-gray-400 mt-4">Same walkthrough you'd give a new teammate on their first day.</p>

<!--
Think about how you onboard a new hire.

You don't hand them a list of files to edit.
You explain the system. The constraints. The history.
Why things are the way they are.

Do the same for your agent.
-->

---
layout: center
class: text-center bg-black text-white
---

# 🔄 The Verification Loop

---

# The agent's definition of "done"

<div class="grid grid-cols-2 gap-12 mt-8">
<div class="text-center">
<div class="text-6xl mb-4">🤖</div>
<h3>"Done" = code compiles</h3>
<p class="text-sm text-gray-400">Tests pass.<br/>Linter is happy.<br/>Ship it.</p>
</div>
<div class="text-center">
<div class="text-6xl mb-4">🧑‍💻</div>
<h3>"Done" = feature works</h3>
<p class="text-sm text-gray-400">User can do the thing.<br/>End-to-end.<br/>Actually works.</p>
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

<p class="text-gray-400 text-sm mt-2">Markdown. Human-readable. Agent-executable.</p>

<!--
This is just markdown. A human could follow these steps.
But with Playwright, so can the agent.

The key insight: "manual" describes the format, not the executor.

If you've written Cucumber specs, this will feel very familiar.
Except these are cheaper to write and more forgiving to run.
-->

---

# The self-healing loop

```
Agent makes change
    ↓
Agent runs manual test
    ↓
Test fails? → Agent knows what it just changed → fixes it
    ↓
Test passes? → Move on
```

<div class="mt-8 p-4 border border-gray-600 rounded">
<strong>Real example:</strong> code review said "move this logic."
Agent refactored. Widgets stopped rendering.
Agent caught it immediately — it knew what it just moved.
Fixed it. Re-ran the test. Green. ✅
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

# An agent without verification

# is just autocomplete with confidence.

<!--
Let that sink in for a second.

If you're not giving the agent a way to prove its work,
you're trusting vibes.
-->

---

# Practical tip: run verification cheaply

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### Wrong ❌

One session does everything:
- Writes the feature
- Runs Playwright
- Analyzes screenshots
- Fixes bugs
- Context explodes 💥

</div>
<div>

### Right ✅

Split the work:
- **Session 1:** writes code + unit tests
- **Session 2:** runs manual tests
- Feed results back to Session 1
- Context stays clean 🧹

</div>
</div>

<p class="text-gray-400 text-sm mt-4">Playwright is token-heavy. Keep your implementation context lean.</p>

<!--
Playwright eats context for breakfast.
Every DOM snapshot, every page state, adds thousands of tokens.

Don't bloat your implementation session with verification output.
Use a separate, cheaper session for running tests.
Feed the results back as input.
-->

---
layout: center
class: text-center bg-black text-white
---

# 🧩 Decomposition

---

# One agent, one concern

<div class="text-center mt-8">

🧑‍💻 **You** decompose the feature

↓

🤖 **Agent A** builds the backend

🤖 **Agent B** builds the frontend

🤖 **Agent C** runs verification

🤖 **Agent D** reviews the PR

</div>

<!--
You wouldn't ask one engineer to build the entire feature,
test it, review their own code, and deploy it.

Don't ask one agent to do that either.

Decompose the work. One agent per concern.
-->

---

# Why decomposition works

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### Single agent

- Context grows unbounded
- Loses focus mid-task
- "Remembers" less as session grows
- Can't review its own work
- Optimizes for completion over correctness

</div>
<div>

### Multi-agent

- Each agent has focused context
- Clear deliverable per session
- Fresh perspective on review
- Structural separation of concerns
- Fails independently

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

```
Spec (you)
  → Build agent reads spec, writes code
    → Test agent runs verification
      → Fails? → Build agent fixes
      → Passes? → Review agent reviews PR
        → Comments? → Build agent addresses feedback
          → Re-verify → merge
```

<div class="mt-8">

**Your job:** define the spec, trigger the handoffs, make the final call.

**Their job:** write, test, review, iterate.

</div>

<!--
This is the workflow I've landed on.

You define the spec. The build agent works on it.
The test agent verifies. If it fails, it goes back to the build agent.
A review agent looks at the PR with fresh eyes.

You're the conductor. They're the orchestra.
-->

---

# Real example: cross-agent review

<div class="grid grid-cols-2 gap-8">
<div>

### Build Agent (Claude Code)

- Has full context
- Writes the feature
- Runs unit tests
- Creates the PR

</div>
<div>

### Review Agent (Gemini)

- Fresh context
- Different model = different blind spots
- Reads the diff cold
- Posts review comments

</div>
</div>

<div class="mt-8 text-center">

**Structural dissent enforced by identity boundaries.**

</div>

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

<div class="mt-8">

### Before: steps

```bash
docker compose down
docker compose up -d
rails db:seed
cloudflared tunnel run
curl http://localhost:3000/health
```

### After: jobs

```bash
bin/reset-dev
```

</div>

<p class="text-gray-400 text-sm mt-4">A scripted tool that does one thing beats a chain the agent orchestrates every time.</p>

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

```markdown
You keep running these 4 commands every time you test webhooks:

1. docker compose restart app
2. cloudflared tunnel run
3. curl -X POST ...
4. tail -f logs/development.log

Write a script at bin/test-webhook that does all of this.
Document it in the README.
```

<div class="mt-4 text-gray-400 text-sm">Next agent session is cleaner, leaner, faster.</div>

<!--
This is one of my favorite patterns.

Instead of fixing the symptom each time,
fix the workflow.

Have the agent write a tool for future agents.
The next session starts with better infrastructure.
-->

---
layout: center
---

# The best prompt optimization is

# fewer prompts.

<p class="text-gray-400 mt-4">Script the repetitive stuff. Invest in better tools, not more words.</p>

<!--
People obsess over prompt engineering.
Tweaking words. Adding examples. Chain-of-thought this. Few-shot that.

The biggest wins I've gotten weren't from better prompts.
They were from better tools that eliminated the need for prompts.
-->

---

# Putting it all together

<div class="grid grid-cols-4 gap-4 mt-8 text-center text-sm">
<div class="p-4 border border-gray-600 rounded">
<div class="text-3xl mb-2">📋</div>
<strong>1. Spec</strong>
<p class="text-gray-400 mt-2">What does done look like?</p>
</div>
<div class="p-4 border border-gray-600 rounded">
<div class="text-3xl mb-2">🤖</div>
<strong>2. Build</strong>
<p class="text-gray-400 mt-2">Agent works the spec</p>
</div>
<div class="p-4 border border-gray-600 rounded">
<div class="text-3xl mb-2">🔄</div>
<strong>3. Verify</strong>
<p class="text-gray-400 mt-2">Agent proves the work</p>
</div>
<div class="p-4 border border-gray-600 rounded">
<div class="text-3xl mb-2">👀</div>
<strong>4. Review</strong>
<p class="text-gray-400 mt-2">Fresh eyes, different model</p>
</div>
</div>

<div class="text-center mt-8">

You define the **what**. Agents figure out the **how**.

Human reviews only after verification passes.

</div>

<!--
This is the full loop. Spec, build, verify, review.

You're not writing code. You're not even reviewing code most of the time.
You're defining what matters and validating outcomes.
-->

---

# The failure modes (and fixes)

| Symptom | Cause | Fix |
|---------|-------|-----|
| Agent builds wrong thing | Vague spec | Write the convincing argument |
| Code works in isolation | No e2e verification | Add manual test scripts |
| Agent loses context mid-task | Session too long | Decompose into subagents |
| Same errors keep recurring | No tool improvement | Meta sessions → `bin/` scripts |
| Agent fakes "done" | No verification mechanism | Playwright + manual tests |
| Review misses same things | Same model reviews own code | Cross-model review |

<!--
Quick reference. These are the six failure modes I hit most often,
and the fix for each one.

You'll notice a pattern: every fix is about structure, not prompting.
-->

---
layout: center
---

# You're not prompting.

# You're collaborating.

<!--
This is the mindset shift.

Stop thinking of the agent as a tool you prompt.
Start thinking of it as a teammate you onboard.

Give it context. Give it constraints. Give it tools to verify.
Then get out of its way.
-->

---

# What changes with better models?

<div class="mt-8">

Agents keep getting smarter:

- Better native code search → fewer file pointers needed
- Larger context windows → longer sessions before decomposition
- Better reasoning → less hand-holding on architecture

**What doesn't change:**

- You still define what "done" means
- You still own the verification criteria
- You still decide when to ship

</div>

<p class="text-gray-400 text-sm mt-4">The gap between "what agents figure out" and "what you provide" keeps shrinking. Your job is to stay at the frontier.</p>

<!--
Models will keep improving. Context will get longer.
The specifics of decomposition will evolve.

But the principles hold:
specs, verification, decomposition, tool design.

The agent's ceiling keeps rising.
Your job is to raise it faster.
-->

---
layout: center
class: text-center
---

# The Playbook

<div class="text-left inline-block mt-8">

1. **Write the spec** — define done before you start
2. **Ask for a plan first** — "write it to docs/ before you code"
3. **Manual test scripts** — Playwright + markdown = agent self-verification
4. **Decompose** — one agent per concern, focused context
5. **Cross-model review** — structural dissent, not rubber stamps
6. **Meta sessions** — agents build tools for future agents
7. **Jobs, not steps** — `bin/` scripts over command chains

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

<div class="text-2xl">

Yesterday: **Safe Agentic Dev Environments**

<p class="text-gray-400 text-sm">Isolation. Identity. Feedback loops.</p>

Today: **Agentic Coding**

<p class="text-gray-400 text-sm">Specs. Verification. Decomposition.</p>

</div>

<div class="mt-12 text-xl">

Safe ground + effective tactics = reliable AI teammates.

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

# The model isn't the bottleneck.

# Your workflow is.

# Fix the workflow.

<!--
Every time you're frustrated with an agent, ask:
"Did I give it what it needs to succeed?"

Usually the answer is no.

Fix that, and the results change dramatically.
-->

---
layout: center
class: text-center
---

# 🙏 Thank you

**Rida Al Barazi**

rida.me · @rida

<div class="mt-4 text-gray-400 text-sm">

BranchBox: github.com/branchbox/branchbox

Blog posts on all of this: rida.me/blog

</div>

<!--
Thank you. I hope this was useful.

If you want to dig deeper, I've written about all of these patterns
on my blog at rida.me.

BranchBox is the open-source tool I built for the environment side.

Happy to chat after — I'll be around for the rest of the day.

Enjoy lunch!
-->
