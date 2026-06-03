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
    title: "From 0 to AI-Powered Portfolio: How I Built a 24/7 AI Agent with Hermes",
    description:
      "Tired of managing multiple AI tools manually? Here's how I connected Hermes Agent to my portfolio and turned a static site into a living, breathing assistant that never sleeps.",
    date: "2026-06-03",
    tags: ["AI", "Hermes", "Next.js", "DevOps"],
    readingTime: "12 min",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
    content: `<h2>The Problem</h2>
<p>Every developer knows this feeling: you're deep in a project, and suddenly you need to check something on your portfolio — only to realize it's outdated, the contact form is broken, or you forgot to update that project from three months ago.</p>
<p>I've been there. My portfolio sat static for months, collecting dust while I jumped between Claude CLI, ChatGPT, and a dozen other tools. Each one powerful on its own, but none of them <em>connected</em> to my actual work.</p>
<p>That's when I discovered <strong>Hermes Agent</strong>.</p>
<h2>What is Hermes Agent?</h2>
<p><a href="https://hermes-agent.nousresearch.com/">Hermes</a> is an open-source AI agent framework that runs on your own infrastructure. Think of it as a personal AI assistant that lives on your machine (or a server), connected to your preferred messaging platforms — Discord, WhatsApp, Telegram — and can access your tools, files, and workflows.</p>
<p>The killer feature? <strong>It's always online.</strong> Unlike a CLI tool you have to manually invoke, Hermes runs 24/7, waiting for messages, running scheduled tasks, and monitoring your projects.</p>
<h2>The Setup</h2>
<p>My portfolio runs on a <strong>MSI Bravo 17</strong> laptop — 12 cores, 16GB RAM, Ubuntu 24.04. Not a powerhouse, but more than enough for a personal AI agent.</p>
<p>Here's the stack I built:</p>
<pre><code>┌─────────────────────────────────────────────────────────┐
│  Laptop (MSI Bravo 17, Ubuntu 24.04)                     │
│                                                          │
│  ┌──────────────┐    ┌──────────────┐    ┌────────────┐ │
│  │ Hermes Agent │───▶│ Tailscale    │───▶│ Discord    │ │
│  │ (Node.js)    │    │ (VPN Tunnel) │    │ (Messaging)│ │
│  └──────────────┘    └──────────────┘    └────────────┘ │
│         │                                        ▲      │
│         ▼                                        │      │
│  ┌──────────────┐                           ┌────────┐ │
│  │ Portfolio    │                           │ Phone  │ │
│  │ (Next.js)    │                           │ (Binh) │ │
│  └──────────────┘                           └────────┘ │
└─────────────────────────────────────────────────────────┘
</code></pre>
<h3>Step 1: Install Hermes</h3>
<pre><code class="language-bash">npm install -g hermes-agent
hermes setup
</code></pre>
<p>The setup wizard asks for your preferred LLM provider. I went with <strong>OpenCode Go</strong> (runs locally, respects privacy) with <strong>Qwen3.7-max</strong> as the model. You can also chain fallback models — if the primary is unavailable, it automatically tries the next one.</p>
<h3>Step 2: Configure Tailscale</h3>
<p>Since I wanted to access Hermes from anywhere (including my phone), I set up <a href="https://tailscale.com/">Tailscale</a> for zero-config VPN. The MSI laptop joins my tailnet, and I can reach it via a persistent IP address (<code>100.100.198.109</code>) from any device.</p>
<pre><code class="language-bash"># On the laptop (MSI Bravo 17)
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up --accept-routes

# Now accessible as: 100.100.198.109
</code></pre>
<h3>Step 3: Connect Discord</h3>
<p>Hermes supports multiple messaging platforms out of the box. I connected it to my Discord server so I can DM the agent from my phone while commuting:</p>
<pre><code class="language-yaml"># ~/.hermes/config.yaml
messaging:
  discord:
    enabled: true
    bot_token: "$\{DISCORD_BOT_TOKEN\}"
    allowed_users:
      - 1090997585063460935  # Binh Nguyen
</code></pre>
<p>Now when I text from Discord, Hermes responds in seconds — no SSH required.</p>
<h2>The Portfolio Connection</h2>
<p>Here's where it gets interesting. My portfolio is a Next.js site on Vercel. When Hermes needs to make updates (like the recent TypeScript migration), it can:</p>
<ol>
<li><strong>Clone the repo</strong> and make edits locally</li>
<li><strong>Run build checks</strong> (<code>npm run build</code>) to verify changes</li>
<li><strong>Open PRs</strong> via GitHub CLI</li>
<li><strong>Report back</strong> via Discord with a link to the PR</li>
</ol>
<h3>Real Example: The Aida Project Update</h3>
<p>Last week, I needed to add a new project entry for <strong>Aida AI Website Builder</strong> (the AI platform I worked on at group.one). Instead of:</p>
<ul>
<li>Opening my laptop</li>
<li>Finding the project folder</li>
<li>Editing the code</li>
<li>Committing and pushing</li>
</ul>
<p>I just sent this to Hermes on Discord:</p>
<blockquote>
<p>"Add Aida AI Website Builder to my portfolio /project route. It's a chat-to-website builder by group.one. Description: Aida is an AI-native business platform built specifically for European small businesses and start-ups."</p>
</blockquote>
<p>Hermes:</p>
<ol>
<li>Cloned the repo</li>
<li>Created a new branch (<code>add-aida-project-entry</code>)</li>
<li>Downloaded screenshots from one.com</li>
<li>Added the project entry with proper typing</li>
<li>Opened PR #3 on GitHub</li>
<li>Messaged me on Discord with the link</li>
</ol>
<p>Total time: <strong>3 minutes</strong>. I didn't touch my laptop.</p>
<h2>Skills &amp; Automation</h2>
<p>One of Hermes's most powerful features is <strong>skills</strong> — reusable workflows that the agent remembers. Here's my current setup:</p>
<table><thead><tr><th>Skill</th><th>What it does</th></tr></thead><tbody>
<tr><td><code>hermes-agent</code></td><td>Configure/maintain Hermes itself</td></tr>
<tr><td><code>github-pr-workflow</code></td><td>Branch, commit, open PR, merge</td></tr>
<tr><td><code>opencode</code></td><td>Delegate coding tasks to AI coding agents</td></tr>
<tr><td><code>plan</code></td><td>Write implementation plans before coding</td></tr>
</tbody></table>
<p>I also have scheduled cron jobs:</p>
<ul>
<li><strong>Daily</strong>: Check portfolio build status</li>
<li><strong>Weekly</strong>: Pull latest changes from main to dev branches</li>
</ul>
<h2>The Development Workflow</h2>
<p>For day-to-day coding, I use a hybrid approach:</p>
<ol>
<li><strong>Complex/refactoring tasks</strong> → Delegate to OpenCode via Hermes</li>
<li><strong>Quick fixes</strong> → SSH into the laptop, code directly</li>
<li><strong>Reviews</strong> → Hermes opens PRs, I review on GitHub</li>
<li><strong>Monitoring</strong> → Discord notifications for builds and deployments</li>
</ol>
<pre><code class="language-bash"># My typical flow:
# 1. Think of a feature
# 2. /plan it via Hermes (optional)
# 3. Ask Hermes to implement it via OpenCode
# 4. Review PR on GitHub
# 5. Merge when green
</code></pre>
<h2>Results</h2>
<p>After 2 months of running Hermes, here's what changed:</p>
<table><thead><tr><th>Metric</th><th>Before</th><th>After</th></tr></thead><tbody>
<tr><td>Portfolio updates</td><td>~2 weeks delayed</td><td>&lt; 1 hour</td></tr>
<tr><td>PR review time</td><td>3-4 days</td><td>Same day</td></tr>
<tr><td>Access method</td><td>Laptop + SSH</td><td>Discord on phone</td></tr>
<tr><td>Build verification</td><td>Manual check</td><td>Auto-reported</td></tr>
</tbody></table>
<h2>What's Next</h2>
<p>I'm currently exploring:</p>
<ul>
<li><strong>Voice interactions</strong> via WhatsApp</li>
<li><strong>Automated documentation</strong> — Hermes reads code and writes docs</li>
<li><strong>Multi-agent workflows</strong> — spawning sub-agents for research + implementation</li>
</ul>
<p>The AI landscape is moving fast. Having a persistent, customizable agent that's <em>yours</em> — running on your hardware, connected to your platforms — is a game changer for solo developers.</p>
<hr>
<p><em>Portfolio powered by <a href="https://hermes-agent.nousresearch.com/">Hermes Agent</a> + Next.js + Vercel. Laptop: MSI Bravo 17, Ubuntu 24.04.</em></p>`,
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