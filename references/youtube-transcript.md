# Zevi Arnovitz AI Development Workflow – Lenny's Podcast Transcript

**Episode:** Zevi Arnovitz on vibe coding, Cursor, and building products without writing code  
**Source:** Lenny Rachitsky – Lenny's Podcast (Product | Career | Growth)

---

## Transcript

*achitsky*  
You are a product manager shipping product without knowing how to write code, barely knowing how to review code.

**Zevi Arnovitz**  
I have zero technical background, did music in high school ... when Sonnet 3.5 came out. I remember watching a YouTube video building apps using Bolt or Lovable. It basically felt like someone came up to me and said, "You have superpowers now."

**Lenny Rachitsky**  
These days, you're using Cursor with Claude Code.

**Zevi Arnovitz**  
If you're non-technical like me, code is terrifying, but AI just makes it so much possible. In the next coming years, I think everyone's going to become a builder. Titles are going to collapse and responsibilities are going to collapse.

**Lenny Rachitsky**  
The main challenge people have is reviewing the code that AI has written.

**Zevi Arnovitz**  
It's very difficult for me to catch mistakes. What I'll do is basically /review. This tells Claude to start reviewing its own code, but what's even cooler is I have Codex as well as Cursor open. I will have each of them review the code.

**Lenny Rachitsky**  
This comes back to this quote. I think everyone's always hearing. It's not that you will be replaced by AI. You'll be replaced by someone who's better at using AI than you.

**Zevi Arnovitz**  
It's the best time to be a junior, contrary to what a lot of people are saying, how there's no more junior roles out there. Yeah, that's true, but also when else in history could you get out of school and just build a startup on your own?

**Lenny Rachitsky**  
Today, my guest is Zevi Arnovitz. Zevi is a PM at Meta. Prior to that, he was a PM at Wix, and this is a truly remarkable conversation that every non-technical product person needs to hear.

Zevi is super young and has no technical background, but as a smart, young, ambitious person, has learned how to use Cursor and Claude Code to build significant and real products completely on his own, and he's created his own very clever and effective workflow that everyone listening can copy.

To make that copying even easier, at the top of the show notes of this episode, you can download all of the prompts and /commands and start doing all of this yourself.

Zevi shows you how to work with cursor to quickly add your ideas to Linear to explore your idea with AI, how to develop your plan, how to then build the thing, and then have different LLMs review your code and update your documentation, and then use all of this as a learning opportunity to develop your own sense of how things work.

---

### Core Workflow – /Commands

Zevi describes his full workflow:

1. **Create Issue** – User is mid-development, has a bug or feature idea. Capture it fast so they can keep working. Format and create a Linear issue.
2. **Exploration Phase** – Explore what we want to solve. Can pull from Linear or speak freely. AI analyzes, understands the issue, asks clarifying questions.
3. **Create Plan** – After exploration, create a plan. Uses a template. Output is a markdown file with the plan.
4. **Execute Plan** – Build the feature according to the plan.
5. **Review** – Claude reviews its own code.
6. **Peer Review** – Other models (e.g., Codex, Composer) review the code. Then a "peer review" command: dev lead (Claude) gets feedback from other "team leads" (models), and must either explain why feedback is wrong or fix the issues.
7. **Update Docs** – Update documentation so agents can write better code later.

Additional command:
- **Learning Opportunity** – When something is difficult to understand. Primes Claude: "I am a technical PM in the making. I have mid-level engineering knowledge. I want you to explain using the 80/20 rule."

---

### Key Details from Transcript

**Create Issue:**
- User is mid-development, captures bug/feature/improvement quickly
- Claude asks brief questions to get enough to capture in Linear
- Uses MCP (Model Context Protocol) to connect to Linear and create the issue

**Exploration Phase:**
- Can take argument like `Linear STU88` to reference a ticket
- Claude reads files, understands codebase, comes back with clarifying questions
- Deep understanding of problem and current state before building

**Create Plan:**
- Template from Twitter (unknown author)
- Markdown file with: TLDR, critical decisions, tasks with status trackers
- Good for splitting work (e.g., Composer for simple, Gemini for UI)

**Execute Plan:**
- Can use Composer (fast), Gemini (good at UI), etc.
- Tag the plan file and let AI build

**Review / Peer Review:**
- Always manually QA first
- /review – Claude reviews its own code
- Multiple models review (Codex, Composer)
- /peer review – Claude (dev lead) gets other models' feedback, must explain or fix
- "Have them fight it out" until no more issues

**Update Docs:**
- Update documentation after building
- Postmortems: when AI fails, ask "What in your system prompt or tooling made you make this mistake?" then update tooling/docs

---

### Tools Mentioned

- **Cursor** – Primary IDE
- **Claude Code** – Main AI (within Cursor)
- **Linear** – Issue tracking (via MCP)
- **Wispr Flow** – Dictation/voice input
- **Codex** – ChatGPT's coding agent (for peer review)
- **Composer** – Cursor's fast model
- **Gemini** – Good at UI (Antigravity/Google's Cursor competitor)
- **ChatGPT Projects** – For CTO-style prompting, compartmentalization
- **Bolt, Lovable, Base44, v0, Replit** – Vibe coding tools (graduated to Cursor for more control)

---

*Full transcript continues below... (abbreviated for reference – full content preserved in original)*
