# AI Development Workflow

A step-by-step AI-assisted development workflow and slash commands for Cursor.

Start with **create-issue**—capture bugs and features as you think of them—then work through explore, plan, execute, review, and document.

---

## Quick start

1. **Copy slash commands to your project**
   - In your app project (e.g. `my-app/`), ensure you have a `.cursor` folder.
   - Copy all `.md` files from `workflow/.cursor/prompts/` into `my-app/.cursor/prompts/` (create the folder if needed).
   - Restart Cursor if needed.

2. **Configure tools**
   - See [SETUP-GUIDE.md](SETUP-GUIDE.md) for issue tracking (Linear, Google Sheets, CSV, etc.).

3. **Start with create-issue**
   - Open Cursor, type `/1-create-issue`, and capture your first bug or feature idea.

---

## Workflow steps

| Step | Slash command       | Purpose |
|------|---------------------|---------|
| 1    | `/1-create-issue`   | Capture bug/feature quickly while mid-development |
| 2    | `/2-explore`        | Understand the problem before writing code |
| 3    | `/3-create-plan`    | Generate a markdown execution plan with status tracking |
| 4    | `/4-execute`        | Implement the plan step by step |
| 5    | `/5-review`         | Comprehensive code review |
| 6    | `/6-peer-review`    | Have other models review; Claude explains or fixes |
| 7    | `/7-document`       | Update documentation after changes |

**Extra:** `/learning-opportunity` – Explain something complex using the 80/20 rule.

---

## Typical flow

Start with create-issue. When ready to build, continue through the steps:

```
1-create-issue → 2-explore → 3-create-plan → 4-execute → 5-review → 6-peer-review → 7-document
```

**Tip:** For step 4 (execute), reference the plan file so the AI knows what to build—e.g. type `/4-execute` then add `@PLAN-feature-name.md` or paste the plan path. For step 2 (explore), if you're not using Linear, paste the issue content from your backlog.

---

## Structure

```
workflow/
├── .cursor/prompts/          # Slash commands (copy to your project)
│   ├── 1-create-issue.md
│   ├── 2-explore.md
│   ├── 3-create-plan.md
│   ├── 4-execute.md
│   ├── 5-review.md
│   ├── 6-peer-review.md
│   ├── 7-document.md
│   └── learning-opportunity.md
├── references/
│   ├── notion-original-pasted.md
│   ├── notion-workflow-full.md
│   ├── youtube-transcript.md
│   └── youtube-transcript-full.md
├── scripts/                  # Optional helpers (append-issue.js for CSV backlog)
├── templates/                # Sample ISSUES.csv, ISSUES.md
├── README.md
└── SETUP-GUIDE.md
```

---

## Thanks

Based on [Zevi Arnovitz's workflow](https://shorthaired-billboard-f9a.notion.site/Zevi-s-AI-Development-Workflow-2c86baffbc90810fa63bd0ee8ecffce9) from Lenny's Podcast. [LinkedIn](https://www.linkedin.com/in/zev-arnovitz/) | [X](https://x.com/ArnovitzZevi)
