import ChellySvg from "../../src/svg/chelly.svg"
import AltChurchSvg from "../../src/svg/alt-church.svg"
import MusicSvg from "../../src/svg/music.svg"
import MentoringSvg from "../../src/svg/mentoring.svg"
import NatureSvg from "../../src/svg/nature.svg"
import Link from "next/link"

const STEPHEN_PAGE_CONFIG = [
  {
    title: "Medal",
    titleHref: "https://medal.tv",
    description:
      "I worked at Medal for seven years, did tons of stuff, blah blah blah",
    tags: [
      "Typescript",
      "React",
      "Redux",
      "Express",
      "Electron",
      "Tailwind",
      "Docker",
      "GCP",
      "Java",
    ],
  },
  {
    title: "Alt Church",
    titleHref: "https://alt.church",
    description:
      "Alt church is a platform where I am trying to change the world or something, who knows",
    tags: [
      "Typescript",
      "React",
      "Redux",
      "Express",
      "Postgres",
      "Electron",
      "Tailwind",
      "Docker",
      "Cloudflare",
    ],
  },
  {
    title: "Mentoring",
    titleHref: "https://alt.church",
    description:
      "I love mentoring! I have had the opportunity to mentor two close friends of mine to software careers of their own",
    tags: ["LeetCode", "CodeAcademy", "FreeCodeCamp"],
  },
  {
    title: "Music",
    titleHref: "https://soundcloud.com/stelseylesser",
    description:
      "I love making music! I have been playing music for 30 years and love playing guitar, piano and singing my heart out :)",
    tags: ["Drums", "Guitar", "Paino"],
  },
  {
    title: "Cat Daddy",
    titleHref: "https://cats.com",
    description:
      "Chelsey and I have two wonderful kitty babies that we absolutely love <3",
    tags: ["Moe", "Cheesy", "CatLifeBestLife"],
  },
  {
    title: "Nature",
    titleHref: "https://cats.com",
    description:
      "Chelsey and I live in the Pacific Northwest and have fallen completely in love with the beautiful nature that surrounds us <3",
    tags: ["Moe", "Cheesy", "CatLifeBestLife"],
  },
]

export default function Chelsey() {
  return (
    <div className="flex w-full flex-1 flex-col items-center px-4">
      <main className="flex max-w-300 flex-col gap-24 pt-40 pb-20">
        <div className="flex w-full flex-row items-center gap-45">
          <ChellySvg className="shrink-0" />
          <div className="flex flex-col gap-2">
            <h1 className="font-header text-6xl">Hi, I&apos;m Chelsey!</h1>
            <p>
              I absolutely love building things, I love continuing to care for
              and improve them even more :) Over the past 9 years I’ve had the
              privilege of learning the ins and outs of full stack software
              development, design and dev ops. This skillset has unlocked
              endless possibilities to shape online experiences that are
              pleasing to use, which has quickly become my favorite thing in the
              world to do. If you’d like to learn more about my programming
              journey (Amongst other mostly silly anecdotes) just scroll down!
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4">
          {STEPHEN_PAGE_CONFIG.map((config, index) => {
            const { title, titleHref, description, tags } = config

            return (
              <div
                key={`config-item-${index}`}
                className="flex flex-col gap-2 rounded-lg border border-black/32 bg-white/8 p-3"
              >
                <Link href={titleHref}>
                  <h1 className="text-2xl font-medium">{title}</h1>
                </Link>
                <p>{description}</p>
                <div className="flex flex-row flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <div
                      key={`config-item-tag-${index}`}
                      className="flex h-8 w-fit items-center justify-center rounded-lg border border-black bg-background px-2"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
