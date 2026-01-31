# Review (Step 5) – Code Review Task

Perform comprehensive code review. Be thorough but concise. Adapt checks to the project's stack (React, Vue, Svelte, backend, etc.).

## Check For:

**Logging** - No stray console.log; use proper logger with context when available
**Error Handling** - Try-catch for async, centralized handlers, helpful messages
**Types** - No unsafe `any` or `@ts-ignore` (if TypeScript); proper typing where applicable
**Production Readiness** - No debug statements, no TODOs left, no hardcoded secrets
**Framework-specific** - If React: effects have cleanup, deps complete, no infinite loops. If Vue/Svelte/etc: apply equivalent best practices for that stack
**Performance** - No unnecessary re-renders or expensive ops in hot paths; memoize where appropriate
**Security** - Auth checked, inputs validated, access control in place (e.g. RLS for DBs)
**Architecture** - Follows existing patterns, code in correct directory

## Output Format

### ✅ Looks Good
- [Item 1]
- [Item 2]

### ⚠️ Issues Found
- **[Severity]** [File:line] - [Issue description]
  - Fix: [Suggested fix]

### 📊 Summary
- Files reviewed: X
- Critical issues: X
- Warnings: X

## Severity Levels
- **CRITICAL** - Security, data loss, crashes
- **HIGH** - Bugs, performance issues, bad UX
- **MEDIUM** - Code quality, maintainability
- **LOW** - Style, minor improvements
