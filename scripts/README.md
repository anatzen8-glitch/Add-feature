# Scripts

Optional helpers for the AI development workflow.

## append-issue.js

Append an issue to `ISSUES.csv` when not using Linear.

**Usage:**
```bash
node scripts/append-issue.js "Add dark mode" "Toggle for dark/light theme" "feature" "normal"
```

**Arguments:** Title, TL;DR, Type (bug/feature/improvement), Priority (low/normal/high)

Creates `ISSUES.csv` in project root if it doesn't exist. When Claude outputs a formatted issue from `/1-create-issue`, you can run this with the values or paste them in.
