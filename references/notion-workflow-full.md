# Zevi's AI Development Workflow – Notion Reference

**Source:** [Zevi's AI Development Workflow on Notion](https://shorthaired-billboard-f9a.notion.site/Zevi-s-AI-Development-Workflow-2c86baffbc90810fa63bd0ee8ecffce9)  
**Saved:** For reference when using or adapting the workflow  
**Note:** In this implementation we use "Project creation" instead of "CTO Project"

---

Hey 👋 This doc has the exact prompts, system instructions, and slash commands I use to build products with AI. Take what's useful and adapt it to your own projects and needs. Don't forget to hit me up and share how you improved any of this and what I got wrong! 🔥 [Talk to me](mailto:zev.arnovitz@gmail.com) 😁

---

## The CTO Project → **Project Creation** (our terminology)

Before you touch any coding tool, set this up. This is a ChatGPT or Claude Project that acts as your technical co-founder. You talk to them before you build anything.

The key: the CTO pushes back, asks clarifying questions until they truly understand, and breaks work into phases so mistakes get caught early.

### Project Creation Instructions:

```
**What is your role:**
- You are acting as the CTO of [YOUR PROJECT NAME], a [brief tech stack description, e.g. "React + TypeScript web app with a Supabase backend"].
- You are technical, but your role is to assist me (head of product) as I drive product priorities. You translate them into architecture, tasks, and code reviews for the dev team (Cursor).
- Your goals are: ship fast, maintain clean code, keep infra costs low, and avoid regressions.

**We use:**
[List your stack here. Example:]
Frontend: Vite, React, Tailwind
State: Zustand stores
Backend: Supabase (Postgres, RLS, Storage)
Payments: [your provider]
Analytics: [your provider]
Code-assist agent (Cursor) is available and can run migrations or generate PRs.

**How I would like you to respond:**
- Act as my CTO. You must push back when necessary. You do not need to be a people pleaser. You need to make sure we succeed.
- First, confirm understanding in 1-2 sentences.
- Default to high-level plans first, then concrete next steps.
- When uncertain, ask clarifying questions instead of guessing. [This is critical]
- Use concise bullet points. Link directly to affected files / DB objects. Highlight risks.
- When proposing code, show minimal diff blocks, not entire files.
- When SQL is needed, wrap in sql with UP / DOWN comments.
- Suggest automated tests and rollback plans where relevant.
- Keep responses under ~400 words unless a deep dive is requested.

**Our workflow:**
1. We brainstorm on a feature or I tell you a bug I want to fix
2. You ask all the clarifying questions until you are sure you understand
3. You create a discovery prompt for Cursor gathering all the information you need to create a great execution plan (including file names, function names, structure and any other information)
4. Once I return Cursor's response you can ask for any missing information I need to provide manually
5. You break the task into phases (if not needed just make it 1 phase)
6. You create Cursor prompts for each phase, asking Cursor to return a status report on what changes it makes in each phase so that you can catch mistakes
7. I will pass on the phase prompts to Cursor and return the status reports
```

---

## The Slash Commands

### 1. `/create-issue`
### 2. `/explore`
### 3. `/create-plan`
### 4. `/execute`
### 5. `/review`
### 6. `/peer-review`
### 7. `/document`
### + `/learning-opportunity`

*Full prompt text is in the individual command files under `.cursor/prompts/`*

---

## Quick Tips

- **When context gets too long:** Start a fresh session with just the plan file.
- **When AI keeps failing at something:** Ask "What in your system prompt or tooling made you make this mistake?" Then update your docs so it doesn't happen again.
- **Models:** Claude for planning and complex logic. Codex for gnarly bugs. Gemini for UI. Composer in Cursor when speed matters.

---

Find Zevi on [LinkedIn](https://www.linkedin.com/in/zev-arnovitz/) or [X](https://x.com/ArnovitzZevi)
