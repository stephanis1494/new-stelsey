import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { LandscapeBackground } from "@/src/components/LandscapeBackground"

export const metadata: Metadata = {
  title: "Stephen Fairris · Resume",
  description: "Senior Software Engineer · Full-Stack & Applied AI",
}

const RESUME_PDF = "/stephen-fairris-resume.pdf"

const CONTACT_LINKS = [
  { label: "stephen@stelsey.com", href: "mailto:stephen@stelsey.com" },
  { label: "GitHub", href: "https://github.com/stephanis1494" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/stelseylesser/" },
  { label: "alt.church", href: "https://alt.church" },
]

const SUMMARY =
  "Senior full-stack engineer with 7 years building production desktop and web applications in TypeScript, React, Electron and Node.js. Helped scale Medal from 40K to 1.8M daily active users. Most recently created and leads development of Alt: a web, mobile and desktop platform whose voice assistant runs entirely on a local LLM, with tool calling, vision, voice and smart-home control and no cloud inference. Experienced across Cloudflare, GCP and AWS, with CI/CD and observability through GitHub Actions, Sentry and Honeycomb. Works AI-first (Claude Code, MCP integrations with Linear, Sentry and GitHub) to ship like a larger team."

const SKILLS = [
  { label: "Languages", items: "TypeScript, JavaScript, SQL, Java" },
  {
    label: "AI / LLM",
    items:
      "Local LLM serving (Ollama, LM Studio, OpenAI-compatible APIs), tool/function calling, streaming, vision models (Qwen3-VL), structured output with Zod, on-device speech recognition and TTS, latency profiling",
  },
  {
    label: "Frontend",
    items:
      "React, Next.js, Electron, React Native/Expo, Tailwind CSS, Redux Toolkit/RTK Query",
  },
  {
    label: "Backend & Realtime",
    items:
      "Node.js, Express, WebSockets/Socket.io, WebRTC (data channels, P2P media), Spring, REST, Redis pub/sub",
  },
  { label: "Data", items: "PostgreSQL, MySQL, Drizzle, Prisma, Neon" },
  {
    label: "Infrastructure",
    items:
      "Cloudflare (Workers, R2, Containers), GCP, AWS, DigitalOcean, Docker, GitHub Actions, EAS Build/Update, electron-builder",
  },
  {
    label: "Tools",
    items: "Claude Code, Sentry, Aikido, Honeycomb, Amplitude, Linear, Figma",
  },
]

type Role = {
  company: string
  title: string
  where: string
  when: string
  description?: string
  groups: { heading?: string; points: ReactNode[] }[]
}

const EXPERIENCE: Role[] = [
  {
    company: "Alt",
    title: "Creator & Lead Engineer",
    where: "Seattle, WA",
    when: "06/2026 – Present",
    description:
      "Transparent community platform for non-profits: web, iOS/Android and desktop (macOS, Windows, Linux). Private alpha at alt.church (guest mode available). Leading two engineers, both mentored into the field with no prior programming experience.",
    groups: [
      {
        heading: "Jackson: a private, local-LLM voice assistant",
        points: [
          "Built a voice assistant that runs on the user's own machine through Ollama or LM Studio. The Electron app proxies the model and streams replies to web and mobile over WebRTC data channels, so prompts never touch a cloud AI provider.",
          "Designed a tool-calling layer that lets the model control WiZ smart lights (UDP), an LG webOS TV and DLNA casting, and play movies from the user's media library, with typed tools and results written back for the model to read.",
          "Cut 15–30 s waits on common commands with an 8B model by adding a deterministic fast path that handles everyday requests without inference, pinning the model in memory, skipping reasoning for device commands, and answering from device read-back instead of a second model round.",
          "Added per-request observability (fast path vs. model, time to first token, thinking, tool rounds, total) with an in-app Performance card for finding where slow replies spend their time.",
          "Shipped “Hey Jackson” hands-free voice mode on iOS with on-device speech recognition and sentence-by-sentence text-to-speech as tokens stream in, plus Siri Shortcut and Apple Watch access through a token-scoped API relay to the desktop.",
          "Used a local vision model (Qwen3-VL) to turn photos of handwritten recipe cards into structured, Zod-validated recipes; added in-app model management (install, remove, download progress, default model) and a streaming filter that strips model reasoning.",
        ],
      },
      {
        heading: "Platform",
        points: [
          "Full-stack pnpm monorepo (Express 5, Drizzle, PostgreSQL, Next.js 16, Expo, Electron) with Zod contracts shared by every client, and a registry of feature apps: feed, events, public finance ledger, messaging, recipes, media, maps.",
          "Built peer-to-peer Theater streaming from the desktop to browsers and phones over WebRTC, remuxing MKV to MP4 + WebVTT with ffmpeg and no re-encoding.",
          "Real-time messaging over per-user WebSocket inboxes fanned out with Redis pub/sub, with keepalive and reconnect handling for sleeping containers.",
          "Deployed on Cloudflare Workers, OpenNext and Containers, with Postgres on Neon, media on R2 and a self-hosted maps and turn-by-turn routing server. Release pipelines include tag-driven desktop builds with auto-update and over-the-air mobile updates.",
        ],
      },
    ],
  },
  {
    company: "Medal",
    title: "Senior Software Engineer",
    where: "Remote (NYC)",
    when: "08/2019 – 08/2026",
    groups: [
      {
        points: [
          "Built and shipped Medal's Electron desktop client and Next.js web app in React/TypeScript, supporting growth from 40K to 1.8M daily active users.",
          "Owned front-end architecture across desktop and web. Designed a shared component library used by both the Electron shell and the Next.js app, cutting duplicate UI work and keeping one design system.",
          "Built real-time services in TypeScript, Express and Socket.io handling 1M+ concurrent connections for voice, chat and streaming.",
          "Shipped end-to-end features across the core Java/Spring/MySQL API.",
          "Led the web app's migration from a Create React App SPA to Next.js, adding server-side rendering and route-level code splitting that improved Core Web Vitals across the board, including cutting FMP from 3.4 s to 1.6 s.",
          "Helped move CI/CD to a serverless pipeline on GitHub Actions, Docker, Kubernetes and GCP.",
          "Led a team of three engineers, mentoring two into full-time engineering roles. Handled project coordination, technical reviews and their continued growth.",
        ],
      },
    ],
  },
  {
    company: "CoinTaxes",
    title: "Software Developer Intern (Part-time)",
    where: "Remote",
    when: "04/2018 – 01/2019",
    groups: [
      {
        points: [
          "Built UI components and added theming for a crypto tax web app in React/JavaScript.",
        ],
      },
    ],
  },
  {
    company: "Panasonic Avionics",
    title: "Quality Inspector II",
    where: "Bothell, WA",
    when: "08/2014 – 08/2019",
    groups: [
      {
        points: [
          "Ran end-to-end systems testing across in-flight entertainment displays, servers and network hardware to Boeing/Airbus specifications.",
        ],
      },
    ],
  },
  {
    company: "Boeing",
    title: "NDT Specialist",
    where: "Tukwila, WA",
    when: "08/2011 – 08/2014",
    groups: [
      {
        points: [
          "Performed ultrasonic and radiographic inspection of composite structures for the 777X and 737 MAX. Helped develop robotic inspection systems for production lines.",
          "Led the 5S lean manufacturing team driving continuous process improvement.",
        ],
      },
    ],
  },
]

const EDUCATION = [
  "Edmonds Community College — Computer Science coursework (2016)",
  "Lean Six Sigma Green Belt, Villanova University (2013)",
  "ASNT Level II NDT — Ultrasonic & Radiographic (2013)",
  "Mentorship — mentored two people with no prior programming experience into full-stack TypeScript engineering roles",
]

const Section = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <section className="flex flex-col gap-3">
    <h2 className="border-b border-accent/40 pb-1 text-sm font-semibold tracking-widest text-accent uppercase">
      {title}
    </h2>
    {children}
  </section>
)

const Bullets = ({ points }: { points: ReactNode[] }) => (
  <ul className="flex list-disc flex-col gap-1.5 pl-5 marker:text-accent/70">
    {points.map((point, index) => (
      <li key={`point-${index}`}>{point}</li>
    ))}
  </ul>
)

export default function StephenResume() {
  return (
    <div className="flex w-full flex-1 flex-col items-center px-4">
      <LandscapeBackground />
      <div className="flex w-full max-w-200 flex-col gap-6 pt-12 pb-20 md:pt-24">
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          <Link
            href="/stephen"
            className="opacity-70 transition-[color,opacity] duration-250 hover:text-accent hover:opacity-100"
          >
            ← Back to Stephen
          </Link>
          <a
            href={RESUME_PDF}
            download
            className="flex h-9 items-center gap-2 rounded-lg border border-accent/80 bg-accent/15 px-3 text-accent transition-colors duration-250 hover:bg-accent/25"
          >
            Download PDF
          </a>
        </div>

        <article className="flex flex-col gap-8 rounded-lg border border-ink/24 bg-white/6 p-5 md:p-10">
          <header className="flex flex-col gap-2">
            <h1 className="font-header text-5xl md:text-6xl">
              Stephen Fairris
            </h1>
            <p className="text-lg font-medium text-accent">
              Senior Software Engineer · Full-Stack &amp; Applied AI
            </p>
            <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-1 text-sm opacity-80">
              <span>Seattle, WA</span>
              {CONTACT_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-accent transition-opacity duration-250 hover:opacity-80"
                >
                  {label}
                </Link>
              ))}
            </div>
          </header>

          <Section title="Summary">
            <p>{SUMMARY}</p>
          </Section>

          <Section title="Technical Skills">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-[10rem_1fr]">
              {SKILLS.map(({ label, items }) => (
                <div key={label} className="contents">
                  <dt className="font-semibold">{label}</dt>
                  <dd className="mb-2 opacity-90 sm:mb-0">{items}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Experience">
            <div className="flex flex-col gap-8">
              {EXPERIENCE.map((role) => (
                <div key={role.company} className="flex flex-col gap-2">
                  <div className="flex flex-col justify-between gap-x-4 sm:flex-row sm:items-baseline">
                    <h3 className="text-2xl font-medium">
                      {role.company}{" "}
                      <span className="text-lg opacity-80">— {role.title}</span>
                    </h3>
                    <span className="shrink-0 text-sm opacity-70">
                      {role.where} · {role.when}
                    </span>
                  </div>
                  {role.description && (
                    <p className="italic opacity-80">{role.description}</p>
                  )}
                  {role.groups.map((group, index) => (
                    <div
                      key={`${role.company}-group-${index}`}
                      className="flex flex-col gap-1.5"
                    >
                      {group.heading && (
                        <h4 className="mt-2 font-semibold text-accent">
                          {group.heading}
                        </h4>
                      )}
                      <Bullets points={group.points} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education & Certifications">
            <Bullets points={EDUCATION} />
          </Section>
        </article>
      </div>
    </div>
  )
}
