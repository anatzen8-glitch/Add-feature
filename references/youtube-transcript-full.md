# Zevi Arnovitz AI Development Workflow – Full Transcript

**Source:** Lenny's Podcast (Lenny Rachitsky) – Zevi Arnovitz on vibe coding  
**Saved:** For future reference when building the workflow implementation (based on Zevi Arnovitz's approach)

---

achitsky
You are a product manager shipping product without knowing how to write code, barely knowing how to review code.
Zevi Arnovitz
I have zero technical background, did music in high school ... when Sonnet 3.5 came out. I remember watching a YouTube video building apps using Bolt or Lovable. It basically felt like someone came up to me and said, "You have superpowers now."
Lenny Rachitsky
These days, you're using Cursor with Claude Code.
Zevi Arnovitz
If you're non-technical like me, code is terrifying, but AI just makes it so much possible. In the next coming years, I think everyone's going to become a builder. Titles are going to collapse and responsibilities are going to collapse.
Lenny Rachitsky
The main challenge people have is reviewing the code that AI has written.
Zevi Arnovitz
It's very difficult for me to catch mistakes. What I'll do is basically /review. This tells Claude to start reviewing its own code, but what's even cooler is I have Codex as well as Cursor open. I will have each of them review the code.
Lenny Rachitsky
This comes back to this quote. I think everyone's always hearing. It's not that you will be replaced by AI. You'll be replaced by someone who's better at using AI than you.
Zevi Arnovitz
It's the best time to be a junior, contrary to what a lot of people are saying, how there's no more junior roles out there. Yeah, that's true, but also when else in history could you get out of school and just build a startup on your own?
Lenny Rachitsky
Today, my guest is Zevi Arnovitz. Zevi is a PM at Meta. Prior to that, he was a PM at Wix, and this is a truly remarkable conversation that every non-technical product person needs to hear.
Zevi is super young and has no technical background, but as a smart, young, ambitious person, has learned how to use Cursor and Claude Code to build significant and real products completely on his own, and he's created his own very clever and effective workflow that everyone listening can copy.
To make that copying even easier, at the top of the show notes of this episode, you can download all of the prompts and /commands and start doing all of this yourself.
Zevi shows you how to work with cursor to quickly add your ideas to Linear to explore your idea with AI, how to develop your plan, how to then build the thing, and then have different LLMs review your code and update your documentation, and then use all of this as a learning opportunity to develop your own sense of how things work.
I haven't stopped thinking about this conversation since we had it, and everyone needs to pay attention to what AI is unlocking for non-technical people. A huge thank you to Tal Raviv for encouraging me to meet Zevi. If you enjoy this podcast, don't forget to subscribe and follow it in your favorite podcasting app or YouTube. It helps tremendously.
And if you become an annual subscriber of my newsletter, you get 19 premium products for free for an entire year including Lovable, Replit, Bolt, Gamma, n8n, Linear, Devin, PostHog, Superhuman, Descript, Wispr Flow, Perplexity, Warp, Granola, Magic Patterns, Raycast, ChatPRD, Mobbin, and Stripe Atlas. Head on over to lennysnewsletter.com and click product pass.
With that, I bring you Zevi Arnovitz after a short word from our sponsors. [Sponsor ads omitted for brevity]
Zevi, thank you so much for being here and welcome to the podcast.
Zevi Arnovitz
Thanks for having me, Lenny. I'm a huge fan of the show and tons of people that I've admired most and learned the most from. I've been on here, so it's a crazy moment for me. I'm really excited for this.
Lenny Rachitsky
I really appreciate that. I want to start by reading actually a note I got about you from Tal Raviv... "Zevi is the most hands-on vibe coding PM I know... His engineers at Meta ask him to teach them how to do what he does."
Zevi Arnovitz
That's so nice.
Lenny Rachitsky
We're going to get very hands-on. We're going to do a lot of show versus tell. Give people a little bit of background on you.
Zevi Arnovitz
I'm very non-technical. I have zero technical background. Did music in high school. A lot of Israelis do technology units in the Army. I was not in a tech unit. And basically a year ago, I was traveling with my wife for three months in Asia and we were in Japan and that was around when Sonnet 3.5 came out.
And I remember watching a YouTube video. I think it was either Greg Isenberg or Riley Brown and they were basically building apps using, it was either Bolt or Lovable, just using AI.
And it was like a crazy moment for me because I was watching this and it basically felt like someone came up to me and said, "Hey Zevi, there's this cool new technology you should check out. You should really give it a try. Oh, and by the way, you have superpowers now."
And the second I got home from Japan, I didn't even unpack my bags, ran to my computer, opened Bolt, opened an account, and for the past year I've been building.
...
Zevi Arnovitz
This all started where I was a project's power user. I love projects, GPT projects.
Lenny Rachitsky
ChatGPT projects?
Zevi Arnovitz
Yeah, exactly. GPT projects and Claude projects, which are basically a shared folder of chats which share both custom instructions and shared knowledge base.
...
So tracking back to the story I told when we came back from Japan, I started building this app. The first thing I noticed was that these products [Bolt, Lovable] were built in a way where they were super eager to write code. So their system prompt was you're a coding agent. So when you'd write something, they'd straight away start coding.
So at the beginning of a project, this was super fun and exciting because they just go and start building your app. But later on when things got more complex, this created much more problems because planning is really important...
So basically what I did was I created a CTO. So again, I'm not technical... So basically what I did was I created a CTO with the custom prompt of it being the complete technical owner of the project. So I told it, "I own the problem. I own how we want the users to feel. You're the complete owner of how this is going to be built. I want you to challenge me. I don't want you to be a people pleaser."
...
Lenny Rachitsky
So these days you're using Cursor with Claude Code. And what I love about that is that you've never written code.
Zevi Arnovitz
Yeah, 100%.
...
Zevi Arnovitz
So within my code base, what you can see here on the left, these are all my code files. Here on the right is Cursor. So this is basically like having AI, which has access to all the code. And here in the middle, I have Claude Code running.
And what you can see here, I'm going to close cursor for a second. What you can see here are all my /commands. Basically what /commands are, they are reusable prompts that I save within the code base that I can run by writing / and then the name of the file.
So here you can see Create Issue, which is the first command that I'm going to use. And basically what this tells Claude, it says the user is meant development and thought of a bug or a feature and improvement, capture it fast so they can keep working. And then it basically says, this is the format that I want you to capture the linear issue in, and it explains a bunch of things what exactly Claude needs to do to get there.
So the way I invoke this is basically I'll do /create issue and this injects this prompt into Claude. So it says, "I'm ready to help you to capture this issue, what's on your mind."
So basically when I'll do this is if I'm working on a big project and I suddenly come across a bug or have an idea that I don't want to work on right now, but I want to work on later, I'll do this really quick and Claude's main goal is to quickly capture what I'm thinking about.
So quickly to run through my full workflow. So basically it starts with creating an issue. So this is the create issue /command, which basically tells Claude that I'm mid-development and it should quickly capture what I'm thinking about and create an issue within linear.
Then later on, when I want to pick this up, I have the exploration phase. Exploration phase is basically telling Claude, we're going to only explore what we want to solve here. It could either pull from linear or I can just speak freely to it. And what it will do is it will analyze and understand the issue and just ask clarifying questions.
The next phase after we've done finished exploration phase is we're going to create a plan. So you can see create plan. This basically has a template that I love for creating plans, and the output of this at the end of the day will be a markdown file with our plan that we can end up building along with code.
After creating the plan, we have execute plan. After execution, we have review and then we have peer review, which is really cool and we'll get into later on, and at the end, we update the docs. So this is updating documentation and everything so that agents can write better code later on.
...
Zevi Arnovitz
So I'll do /create issue and... I want to add fill in the blank questions to StudyMate. I want this to be 30% of tests to be generated as fill in the blank questions. I want there to be six potential answers for two blank spots... So it's going to ask me a few questions... So now basically what Claude is going to do is it's going to use MCP, which is basically a technology that was created by Anthropic, which gives AI the ability to use tools. So this is connected to my linear. So what it's going to do now is it's going to use everything we've said and create an issue within Linear.
...
Zevi Arnovitz
So when I pick it up, I do /exploration phase... So basically, exploration phase, what it does is it will take an argument. This is basically a placeholder within the prompt, which allows me to enter something that is extra context for the AI. I can say here, Linear STU88, which is referencing the ticket. And now what it's going to do is it's going to go, it's going to fetch the Linear ticket.
...
Zevi Arnovitz
So it's both for the CTO to deeply understand the problem that we're trying to solve and also understand the current state of the code base, what files need to be affected, and how is the best way to implement this technically. And usually what happens is right now, Claude is just basically reading a bunch of files, understanding the basic structure of the code, and then it's going to come back with a bunch of clarifying questions that will decide how we end up implementing this.
...
Zevi Arnovitz
So basically what I'm going to do now is I'm going to go and do /create plan... So basically, these plans are from a template that I found on Twitter. I forgot who it was, but it was just a template that really resonated with me. And it's basically saying, based on our exchange, create a markdown file that will be the plan, include clear, minimal, concise steps, track the status... it will have a TLDR, some critical decisions that we've made and the plan itself.
...
Zevi Arnovitz
So what we're going to do now is we're going to execute the plan... So now I think we're going to do this with Cursor just because Composer is so freaking fast.
...
Zevi Arnovitz
So now the next phase after I've QA'd it and basically tested it manually, I'll have Claude review its own work. So what I'll do is I'll reopen Claude Code... So I'll always manually QA at first to make sure if I can see any mistakes that Claude made. And then what I'll do is basically /review. And this tells Claude to start reviewing its own code. But what's even cooler and something that I'm really proud of is I will usually do multiple reviews and I'll have Codex, which is ChatGPT's competitor to Claude Code, as well as cursor open, and I will have each of them review the code.
And then what I do is I have a /command called peer review, which is really interesting. And basically what it does is it's going to take Claude, which is usually the agent who I'm working with... The /command is basically saying, "You're the dev lead on this project. Other team leads within the company have looked at your code and reviewed it and found these issues." Don't take what they said at face value. The reason is you have more context than them and you led this project. You need to either explain why the stuff they found are not real issues and wrong or fix them yourself.
...
Zevi Arnovitz
So I'll do peer review a bunch of times and I'll copy and paste the results. I'll do peer review and then I'll say dev lead one and then paste from one of the models. And then I'll say dev lead two and paste from the other model and basically have them fight it out until I feel like we have no more issues.
...
Zevi Arnovitz
The one thing I'll say is that I think just like working in general with AI and even just like working on any product, doing constant postmortems is critical. So a lot of times we'll find all these kind of bugs or maybe Claude will fail to execute something correctly. And at the beginning when I started vibe coding, I would basically just keep running at it like running at the wall and until it worked. And once it worked, I was like, "All right, awesome. This works. Let's keep going." But I've learned over time that updating documentation and tooling is one of the biggest hacks for productivity.
So when Claude will fail to do something or I'll see this really bad bug that shows that Claude really didn't understand something, I'll ask it, "What in your system prompt or tooling made you make this mistake?" And Claude will kind of like go introspective and think of what made it create that mistake. And then I'll say, "Okay, great. Let's update your tooling and documentation so that this mistake never occurs again."
...
Zevi Arnovitz
Also, a very cool /command that I haven't showed yet is learning opportunity, which basically when something is really difficult for me to understand, I'll do /learning opportunity and then talk about what I want to learn. And this basically primes Claude and says, "I am a technical PM in the making. I have mid-level engineering knowledge. I understand architecture and basically I want you to explain what we're currently working on using the 80/20 rule."
...
