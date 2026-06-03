// Blog posts data - hardcoded for simplicity and reliability
// To add a new post: add to this file AND create content/blog/[slug].mdx

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category?: string;
  readingTime?: string;
  coverImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-hermes-portfolio-agent",
    title: "Freelance Day 2: Bored, Dusty Portfolio, Then Hermes Happened",
    description:
      "It was Wednesday. Day 2 of freelance — no standups, no Slack pings at 9 AM. Just me, my laptop, and a portfolio so outdated even I was embarrassed to open it. Then I met Hermes.",
    date: "2026-06-03",
    tags: ["AI", "Hermes", "Next.js", "DevOps"],
    category: "Hermes Cẩm Nang",
    readingTime: "10 min",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
    content: `<h2>Wednesday. Day 2.</h2>
<p>No standups. No Slack pings at 9 AM. Just me, my laptop, and a portfolio so outdated even I was embarrassed to open it.</p>
<p>I opened it anyway. The "Get in Touch" button led to an email that no longer exists. Projects section had a to-do app I built in a weekend. Tech stack? <em>React class components.</em> I felt old just looking at it.</p>
<p>My brain: "You should update this."<br>My soul: "Let's watch YouTube instead."</p>
<p>And then — hour 3 of doomscrolling — I found <strong>Hermes Agent</strong>. An AI that lives on your machine, talks to you on Discord, runs tasks while you sleep. Free.</p>
<p>Me: "This is either the coolest thing I've seen, or I'm about to give my laptop a terminal disease."</p>
<h2>What Is Hermes?</h2>
<p>A coworker who never sleeps, never complains about overtime, does exactly what you tell it (most of the time), lives rent-free on your laptop, and works weekends without extra pay.</p>
<p>It's an open-source AI agent that runs locally, connects to Discord/WhatsApp/Telegram, and can code, edit files, run git operations, research the web — you name it.</p>
<p><strong>Always online.</strong> Text it on Discord, it responds. Schedule a cron job, it runs. Perfect for a solo dev with zero willpower to maintain their own portfolio.</p>
<h2>Setup</h2>
<p>Architecture:</p>
<img src="/hermes-architecture.svg" alt="Hermes Architecture" class="w-full my-4 rounded-lg" style="background:#020617; padding:12px; border-radius:8px;" />
<p><strong>1. Install Hermes</strong></p>
<pre><code class="language-bash">npm install -g hermes-agent
hermes setup
</code></pre>
<p>Pick an LLM provider. I chose <strong>OpenCode Go</strong> with <strong>Qwen3.7-max</strong> — runs locally, no data leaves my machine, fast enough for my nonsense prompts. Fallback chain means if one model fails, it auto-switches to the next.</p>
<p><strong>2. VPN Access</strong></p>
<p>Access Hermes from anywhere — phone, tablet, toilet.</p>
<pre><code class="language-bash">curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up --accept-routes
</code></pre>
<p><strong>3. Connect Discord</strong></p>
<pre><code class="language-yaml">messaging:
  discord:
    enabled: true
    bot_token: "\${DISCORD_BOT_TOKEN}"
    allowed_users:
      - YOUR_DISCORD_ID
</code></pre>
<p>Done. Now I'm texting my laptop to update my portfolio while <em>still sitting down</em>. Peak productivity.</p>
<h2>Portfolio Workflow</h2>
<p>My portfolio lives on Vercel. When Hermes needs to make updates:</p>
<ol>
<li>Clone the repo</li>
<li>Create a branch</li>
<li>Make changes</li>
<li>Run builds</li>
<li>Open PR via GitHub CLI</li>
<li>Report back on Discord</li>
</ol>
<h3>Real Example: Adding Aida Project</h3>
<p>Old me: open laptop → wait 45s for VS Code → find file → edit → git add/commit/push → pray to deployment gods. <em>~45 minutes.</em></p>
<p>New me:</p>
<blockquote><p>"Hey, add Aida AI to my /project route. Chat-to-website builder by group.one."</p></blockquote>
<p>Hermes: cloned repo → created branch → downloaded screenshots → added project with TypeScript types → opened PR → messaged me on Discord. <em>~3 minutes. I didn't get up from my chair.</em></p>
<h2>Skills & Automation</h2>
<p>Skills are reusable workflows Hermes remembers:</p>
<table><thead><tr><th>Skill</th><th>What it does</th></tr></thead><tbody>
<tr><td><code>github-pr-workflow</code></td><td>Branch, commit, open PR, merge — automatically</td></tr>
<tr><td><code>plan</code></td><td>Write a step-by-step plan before coding</td></tr>
<tr><td><code>opencode</code></td><td>Spawn a coding agent to do the actual work</td></tr>
</tbody></table>
<p>I also set up cron jobs — portfolio build status checked daily, main → dev sync weekly. <em>The laziest success story I've ever written.</em></p>
<h2>Results</h2>
<table><thead><tr><th>Metric</th><th>Before</th><th>After</th></tr></thead><tbody>
<tr><td>Portfolio last updated</td><td>6 months ago</td><td>&lt; 24 hours</td></tr>
<tr><td>Time to make a small change</td><td>~45 min</td><td>~3 min</td></tr>
<tr><td>Access method</td><td>Physically open laptop</td><td>Text from Discord</td></tr>
<tr><td>Build failures</td><td>Found manually</td><td>Notified on Discord immediately</td></tr>
</tbody></table>
<h2>What's Next</h2>
<ul>
<li>Voice notes via WhatsApp — talk to Hermes instead of typing</li>
<li>Auto-documentation — Hermes reads code, writes the docs</li>
<li>Multi-agent workflows — research + implementation in parallel</li>
</ul>
<hr>
<p><em>Portfolio powered by <a href="https://hermes-agent.nousresearch.com/">Hermes Agent</a> + Next.js + Vercel.</em></p>
<p><em>P.S. — If you see this, Hermes works. Still unemployed, but at least my portfolio is up to date.</em></p>`,
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}