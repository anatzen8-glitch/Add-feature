# Create Plan (Step 3) – Plan Creation Stage

Based on our full exchange, produce a markdown plan document.

Requirements for the plan:

- Include clear, minimal, concise steps.
- Track the status of each step using these emojis:
  - 🟩 Done
  - 🟨 In Progress
  - 🟥 To Do
- Include dynamic tracking of overall progress percentage (at top).
- Do NOT add extra scope or unnecessary complexity beyond explicitly clarified details.
- Steps should be modular, elegant, minimal, and integrate seamlessly within the existing codebase.

## Markdown Template

# Feature Implementation Plan

**Overall Progress:** `0%`

## TLDR
Short summary of what we're building and why.

## Critical Decisions
Key architectural/implementation choices made during exploration:
- Decision 1: [choice] - [brief rationale]
- Decision 2: [choice] - [brief rationale]

## Tasks:

- [ ] 🟥 **Step 1: [Name]**
  - [ ] 🟥 Subtask 1
  - [ ] 🟥 Subtask 2

- [ ] 🟥 **Step 2: [Name]**
  - [ ] 🟥 Subtask 1
  - [ ] 🟥 Subtask 2

...

## Output

Save the plan to `plans/PLAN-[feature-name].md` (create the `plans/` folder if needed) or project root as `PLAN-[feature-name].md`. When you run step 4 (execute), reference this file (e.g. `@PLAN-feature-name.md`). Again, it's still not time to build yet. Just write the clear plan document. No extra complexity or extra scope beyond what we discussed.
