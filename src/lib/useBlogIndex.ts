// Blog posts data - hardcoded for simplicity and reliability
// To add a new post: add to this file AND create content/blog/[slug].mdx

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime?: string;
  coverImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-hermes-portfolio-agent",
    title: "Freelance Day 2: I Was Bored, My Portfolio Was Dusty, Then Hermes Happened",
    description:
      "It was Monday. The second day of my freelance life — no boss, no standup meetings, no company Slack pinging me at 9 AM. Just me, my laptop, and a portfolio so outdated even I was embarrassed to open it. Then I met Hermes.",
    date: "2026-06-03",
    tags: ["AI", "Hermes", "Next.js", "DevOps"],
    readingTime: "10 min",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
    content: `<h2>Monday. Freelance Day 2. The Hustle Is Real (Not).</h2>
<p>So here I am. <strong>Day 2 of being my own boss.</strong> No more commuting, no more "quick syncs", no more explaining to HR why I'm wearing a hoodie to the meeting. Freedom! Excitement! ...And absolutely nothing to do because the project hasn't started yet.</p>
<p>I opened my portfolio. The same portfolio I built two years ago and basically abandoned like a tamagotchi with a dead battery. The "Get in Touch" button led to an email that no longer exists. The projects section had a screenshot of a to-do app I built in a weekend. The tech stack? React with class components. <em>Class components.</em> I felt old just looking at it.</p>
<p>My brain: "You should update this."<br>My soul: "Absolutely not. That's boring. Let's watch YouTube instead."</p>
<p>And then — on hour 3 of doomscrolling — I stumbled upon <strong>Hermes Agent</strong>. An AI that lives on your machine. Talks to you on Discord. Runs tasks while you sleep. And it was <em>free</em>.</p>
<p>I thought: "This is either the coolest thing I've ever seen, or I'm about to give my laptop a terminal disease."</p>
<h2>What Even Is Hermes?</h2>
<p>Let me put it this way: imagine if you had a coworker who:</p>
<ul>
<li>Never sleeps</li>
<li>Never complains about overtime</li>
<li>Does exactly what you tell it (most of the time)</li>
<li>Lives rent-free on your laptop</li>
<li>Willing to work on weekends without extra pay</li>
</ul>
<p>That's Hermes. It's an open-source AI agent that runs locally on your machine, connects to your messaging platforms (Discord, WhatsApp, Telegram), and can execute tasks — coding, git operations, file editing, web research, you name it.</p>
<p>The best part? It's <strong>always online</strong>. You text it on Discord, it responds. You schedule a cron job, it runs. You delegate a task to a sub-agent, it goes and does it.</p>
<p>For a solo developer with zero willpower to maintain their own portfolio? This was <em>meant</em> for me.</p>
<h2>The Setup (Or: How I Accidentally Became a 24/7 Tech Support)</h2>
<p>Here's the architecture I ended up with:</p>
<pre><code>┌─────────────────────────────────────────────────────────┐
│                    MY LAPTOP                             │
│                                                          │
│  ┌──────────────┐    ┌──────────────┐    ┌────────────┐ │
│  │ Hermes Agent │───▶│ VPN Tunnel   │───▶│ Discord    │ │
│  │ (Node.js)    │    │ (Zero-config)│   │ (DM me)    │ │
│  └──────────────┘    └──────────────┘    └────────────┘ │
│         │                                        ▲      │
│         ▼                                        │      │
│  ┌──────────────┐                           ┌────────┐ │
│  │ Portfolio    │                           │ Phone  │ │
│  │ (Next.js)    │                           │ (Me)   │ │
│  │ (Dusty)      │                           └────────┘ │
│  └──────────────┘                                     │
└─────────────────────────────────────────────────────────┘
</code></pre>
<h3>Step 1: Install Hermes</h3>
<pre><code class="language-bash">npm install -g hermes-agent
hermes setup
</code></pre>
<p>The setup asks you to pick an LLM provider. I chose <strong>OpenCode Go</strong> with <strong>Qwen3.7-max</strong> — runs locally, no data leaves my machine, and it's fast enough for my nonsense prompts. You can also chain fallback models, so if one model is down, it automatically switches to the next. Very thoughtful, unlike my backup alarm which has never gone off once in my life.</p>
<h3>Step 2: Set Up VPN Access</h3>
<p>Since I wanted to access Hermes from my phone while eating lunch (or avoiding social events), I set up a VPN tunnel. This way my laptop is accessible from anywhere, like a digital panic button I can press whenever I feel like updating my portfolio at 2 AM.</p>
<pre><code class="language-bash"># Install and connect
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up --accept-routes
</code></pre>
<h3>Step 3: Connect Discord</h3>
<p>This is where the magic happens. Hermes connects to your Discord server (or DMs), and suddenly you have a coding buddy who works 24/7 and never asks for a raise.</p>
<pre><code class="language-yaml"># ~/.hermes/config.yaml
messaging:
  discord:
    enabled: true
    bot_token: "\${DISCORD_BOT_TOKEN}"
    allowed_users:
      - YOUR_DISCORD_ID  # Only you can talk to it
</code></pre>
<p>And just like that — I'm texting my laptop to update my portfolio while sitting on the toilet. <em>Peak productivity.</em></p>
<h2>The Portfolio Connection (Or: How I Made My Laptop Do My Homework)</h2>
<p>Here's the beautiful part: my portfolio lives on Vercel. When Hermes needs to make updates, it can:</p>
<ol>
<li><strong>Clone the repo</strong> and make changes locally</li>
<li><strong>Run builds</strong> to make sure nothing is broken</li>
<li><strong>Open PRs</strong> via GitHub CLI</li>
<li><strong>Report back</strong> on Discord with the PR link</li>
</ol>
<h3>Real Example: The Aida Project Update</h3>
<p>Last Tuesday (Day 5 of freelance, already losing track of time), I wanted to add <strong>Aida AI Website Builder</strong> to my portfolio. The old me would have:</p>
<ul>
<li>Opened the laptop</li>
<li>Waited 45 seconds for VS Code to start</li>
<li>Found the right file</li>
<li>Edited it</li>
<li>Git add, git commit, git push</li>
<li>Prayed to the deployment gods</li>
</ul>
<p>The new me, with Hermes:</p>
<blockquote>
<p>"Hey, add Aida AI to my /project route. It's a chat-to-website builder by group.one. Description: AI-native business platform for European small businesses."</p>
</blockquote>
<p>Hermes:</p>
<ol>
<li>Cloned the repo (2 seconds)</li>
<li>Created a new branch (1 second)</li>
<li>Downloaded screenshots (15 seconds, I timed it)</li>
<li>Added the project with proper TypeScript types (30 seconds)</li>
<li>Opened a PR on GitHub (5 seconds)</li>
<li>Messaged me on Discord: "Done. Here's the link." (instant)</li>
</ol>
<p><strong>Total time: 3 minutes. I didn't even get up from my chair.</strong></p>
<p>That's the power of having a personal AI agent. My portfolio went from "ancient artifact" to "semi-maintained" without me lifting a finger. Well, I lifted one finger — to type the message.</p>
<h2>Skills &amp; Automation (The Real Magic)</h2>
<p>Hermes has <strong>skills</strong> — reusable workflows that the agent remembers and executes. Think of them like muscle memory for your AI buddy.</p>
<table><thead><tr><th>Skill</th><th>What it does</th></tr></thead><tbody>
<tr><td><code>hermes-agent</code></td><td>Configure and maintain Hermes itself</td></tr>
<tr><td><code>github-pr-workflow</code></td><td>Branch, commit, open PR, merge — automatically</td></tr>
<tr><td><code>opencode</code></td><td>Spawn a coding agent to do the actual work</td></tr>
<tr><td><code>plan</code></td><td>Write a step-by-step plan before coding anything</td></tr>
</tbody></table>
<p>I also set up <strong>cron jobs</strong>:</p>
<ul>
<li><strong>Daily</strong>: Check portfolio build status and report any failures</li>
<li><strong>Weekly</strong>: Sync main → dev branches so I never fall behind</li>
</ul>
<p>My portfolio is now <em>somewhat</em> maintained, and I didn't have to do anything. This is the laziest success story I've ever written.</p>
<h2>Results (So Far)</h2>
<p>After 2 weeks of running Hermes, here's what changed:</p>
<table><thead><tr><th>Metric</th><th>Before</th><th>After</th></tr></thead><tbody>
<tr><td>Portfolio last updated</td><td>6 months ago</td><td>&lt; 24 hours</td></tr>
<tr><td>Time to make a small change</td><td>~45 min (open laptop, code, push)</td><td>~3 min (DM Hermes)</td></tr>
<tr><td>Access method</td><td>Physically open laptop</td><td>Text from Discord</td></tr>
<tr><td>Build failures</td><td>Found out when checking manually</td><td>Notified on Discord immediately</td></tr>
<tr><td>Motivation to update portfolio</td><td>None (too lazy)</td><td>High (too fun)</td></tr>
</tbody></table>
<h2>What's Next?</h2>
<p>I'm planning to:</p>
<ul>
<li><strong>Add voice notes via WhatsApp</strong> — talk to Hermes instead of typing</li>
<li><strong>Automate documentation</strong> — Hermes reads my code, writes the docs</li>
<li><strong>Multi-agent workflows</strong> — spawn sub-agents for research + implementation simultaneously</li>
</ul>
<p>The AI landscape is moving fast. Having a persistent, customizable agent that runs on <em>your</em> hardware, connected to <em>your</em> platforms, is a game-changer for solo developers who are too lazy to maintain their own projects (like me).</p>
<hr>
<p><em>Portfolio powered by <a href="https://hermes-agent.nousresearch.com/">Hermes Agent</a> + Next.js + Vercel.</em></p>
<p><em>P.S. — If you see this blog post, it means Hermes works. And I'm still unemployed, but at least my portfolio is up to date.</em></p>`,
  },
];

export function useBlogIndex(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}