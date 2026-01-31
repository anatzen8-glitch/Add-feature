# Setup Guide – Tools & Configuration

Step-by-step setup for each tool in the AI development workflow. Use what fits your stack.

---

## Required

### Cursor + Claude Code

1. **Install [Cursor](https://cursor.com)** – AI-powered IDE.
2. **Use Claude Code** – Available in Cursor (or Claude Code directly). This is your main coding agent.
3. **Copy slash commands** – Copy `.cursor/prompts/` into your project root so Cursor loads them.

---

## Issue tracking (Step 1 – Create Issue)

The `/1-create-issue` command captures issues. You need somewhere to store them.

### Option A: Linear (original setup)

**What it is:** Issue tracker. Use it with MCP so Claude can create issues automatically.

**Setup:**

1. Create a [Linear](https://linear.app) account and workspace.
2. **Connect Linear MCP to Claude Code:**
   - In Claude Code / Cursor: add Linear MCP.
   - Typically: `claude mcp add --transport http notion https://mcp.notion.com/mcp` (Notion example; Linear will have its own MCP if available).
   - Or use Cursor’s MCP settings to add Linear.
3. Create an API key in Linear (Settings → API) if required for MCP.
4. When you run `/1-create-issue`, Claude will create issues in Linear via MCP.

**Note:** Linear MCP support may depend on Cursor/Claude version. Check the latest docs.

---

### Option B: Google Sheets (simple alternative)

**What it is:** Spreadsheet as a backlog. No API key if you copy-paste; optional Apps Script for automation.

**Setup:**

1. Create a [Google Sheet](https://sheets.google.com) for your backlog.
2. Add columns, e.g.:
   - `ID` | `Title` | `TL;DR` | `Type` | `Priority` | `Status` | `Created` | `Notes`
3. When you run `/1-create-issue`, Claude will output a formatted issue. **Manually copy** it into a new row.
4. (Optional) Use a simple [Google Apps Script](https://script.google.com) to append from a form or automation if you want partial automation.

**Minimal sheet structure:**

| ID | Title | TL;DR | Type | Priority | Status | Created |
|----|-------|-------|------|----------|--------|---------|
| 1  | Add dark mode | Toggle for dark/light theme | feature | normal | Backlog | 2025-01-31 |

---

### Option C: Local CSV / Markdown file

**What it is:** A file in your repo as a backlog. Good for solo projects.

**Setup:**

1. Create `ISSUES.md` or `issues.csv` in your project:

**ISSUES.md example:**
```markdown
# Backlog

## STU-1: Add dark mode
- **TL;DR:** Toggle for dark/light theme
- **Type:** feature | **Priority:** normal | **Status:** Backlog
- **Created:** 2025-01-31
```

2. When you run `/1-create-issue`, Claude outputs a formatted issue. **Append** it to `ISSUES.md` or `issues.csv`.

---

### Option D: GitHub Issues

**What it is:** Native issue tracker if you use GitHub.

**Setup:**

1. Use a GitHub repo for your project.
2. If Cursor/Claude has GitHub MCP or integration, configure it (GitHub token, OAuth, etc.).
3. Otherwise, run `/1-create-issue`, then **manually create** a GitHub issue from Claude’s output.

---

## Optional tools

### Wispr Flow (dictation)

**What it is:** Voice-to-text for describing features and bugs.

**Setup:** Install [Wispr Flow](https://www.wispr.ai/) and use it to dictate when running slash commands.

---

### Codex (peer review)

**What it is:** ChatGPT’s coding agent. Used to get a second review on code.

**Setup:** Use ChatGPT with Codex (or similar coding mode). Run a code review there, then paste the feedback into `/6-peer-review` in Cursor.

---

### Gemini (UI work)

**What it is:** Strong at UI. Useful for frontend-heavy steps.

**Setup:** Use [Antigravity](https://antigravity.dev/) (Google’s Cursor alternative) or another Gemini-powered IDE for UI tasks. Or use different models in Cursor.

---

## Checklist

- [ ] Cursor installed
- [ ] Claude Code available in Cursor
- [ ] Slash commands copied to project (`.cursor/prompts/`)
- [ ] Issue tracker chosen and configured (Linear, Sheets, CSV, or GitHub)
- [ ] (Optional) Wispr Flow or other dictation tool
- [ ] (Optional) Second model (Codex, Gemini) for peer review

---

## Troubleshooting

**“Slash commands don’t show up”**
- Ensure `.cursor/prompts/` is in the project root (the project you have open).
- Cursor loads prompts from the active workspace. If your workflow folder is separate from your app, copy the prompts into the app project.
- Restart Cursor after adding prompts.
- Check that filenames match exactly (e.g. `1-create-issue.md`).

**“Linear MCP not working”**
- Confirm Linear MCP is supported in your Cursor/Claude version.
- Try Google Sheets or CSV as a fallback.

**“Context gets too long”**
- Start a new chat and only attach the plan file (e.g. `PLAN-feature-name.md`).
