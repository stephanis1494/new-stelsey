import StephenSvg from "../../src/svg/stephen.svg"
import AltChurchSvg from "../../src/svg/alt-church.svg"
import MusicSvg from "../../src/svg/music.svg"
import MentoringSvg from "../../src/svg/mentoring.svg"
import NatureSvg from "../../src/svg/nature.svg"
import PawSvg from "../../src/svg/paw.svg"
import ArrowUpRightFromSquareSvg from "../../src/svg/arrow-up-right-from-square.svg"
import Link from "next/link"
import { PortraitFrame } from "@/src/components/PortraitFrame"

const JUAN_LINK = "https://juanlusichaurant.com"
const HUNTER_LINK = "https://hunterjerochim.com"

const STEPHEN_PAGE_CONFIG = [
  {
    title: "Medal",
    titleHref: "https://medal.tv",
    description:
      "I spent 7 years at Medal, and it was my first software job, first remote job and first startup all at once! I helped build the desktop and web apps used by millions of gamers to capture and share their clips, and got to lead entire projects from a rough idea all the way to production. Along the way I learned to dig into user behavior data to figure out what actually mattered, and to ship features that made people want to stick around.",
    icon: (
      <NatureSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: [
      "Typescript",
      "React",
      "Redux",
      "Express",
      "Electron",
      "Tailwind",
      "Docker",
      "GCP",
      "Cloudflare",
      "Amplitude",
      "Sentry",
      "Honeycomb",
    ],
  },
  {
    title: "Alt Church",
    titleHref: "https://alt.church",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium sapien magna, in tempor tellus fermentum ac. Ut congue viverra ligula at tincidunt. Proin hendrerit, diam in placerat sodales, mi nisi auctor mi, sed efficitur eros libero sed enim. Suspendisse hendrerit nibh ac egestas ullamcorper. Integer eu lobortis augue, quis. ",
    icon: (
      <AltChurchSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
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
    description: (
      <>
        When I first started to learn software development back in 2017, I was
        mentored by a close friend for almost 2 years before I secured my first
        job at Medal. While at Medal I had the opportunity to mentor{" "}
        <Link href={HUNTER_LINK} className="text-accent">
          Hunter
        </Link>{" "}
        and{" "}
        <Link href={JUAN_LINK} className="text-accent">
          Juan
        </Link>{" "}
        in the way I was mentored and helped both of them secure full time
        engineering positions at Medal.
      </>
    ),
    icon: (
      <MentoringSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: ["LeetCode", "CodeAcademy", "FreeCodeCamp"],
  },
  {
    title: "Music",
    titleHref: "https://soundcloud.com/stelseylesser",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium sapien magna, in tempor tellus fermentum ac. Ut congue viverra ligula at tincidunt. Proin hendrerit, diam in placerat sodales, mi nisi auctor mi, sed efficitur eros libero sed enim. Suspendisse hendrerit nibh ac egestas ullamcorper. Integer eu lobortis augue, quis. ",
    icon: (
      <MusicSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: ["Drums", "Guitar", "Piano", "Bass"],
  },
  /*  {
    title: "Cat Daddy",
    titleHref: "https://cats.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium sapien magna, in tempor tellus fermentum ac. Ut congue viverra ligula at tincidunt. Proin hendrerit, diam in placerat sodales, mi nisi auctor mi, sed efficitur eros libero sed enim. Suspendisse hendrerit nibh ac egestas ullamcorper. Integer eu lobortis augue, quis. ",
    icon: (
      <PawSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: ["Moe", "Cheesy", "CatLifeBestLife"],
  },
  {
    title: "Nature",
    titleHref: "https://cats.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium sapien magna, in tempor tellus fermentum ac. Ut congue viverra ligula at tincidunt. Proin hendrerit, diam in placerat sodales, mi nisi auctor mi, sed efficitur eros libero sed enim. Suspendisse hendrerit nibh ac egestas ullamcorper. Integer eu lobortis augue, quis. ",
    icon: (
      <NatureSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: ["Moe", "Cheesy", "CatLifeBestLife"],
  },*/
]

export default function Stephen() {
  return (
    <div className="flex w-full flex-1 flex-col items-center px-4">
      <main className="flex max-w-300 flex-col gap-24 pt-40 pb-20">
        <div className="flex w-full flex-col items-center gap-24 lg:flex-row xl:gap-45">
          <PortraitFrame innerClassName="px-5 py-6">
            <StephenSvg className="text-accent" />
          </PortraitFrame>
          <div className="flex flex-col gap-2">
            <h1 className="font-header text-6xl">Hi, I&apos;m Stephen!</h1>
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
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {STEPHEN_PAGE_CONFIG.map((config, index) => {
            const { title, titleHref, description, tags, icon } = config

            return (
              <div
                key={`config-item-${index}`}
                className="relative flex flex-col gap-2 overflow-hidden rounded-lg border border-ink/24 bg-white/6 p-3"
              >
                {icon}
                <div className="group flex w-fit flex-row items-center gap-2">
                  <h3 className="text-3xl font-medium">{title}</h3>
                  {titleHref && (
                    <Link href={titleHref}>
                      <ArrowUpRightFromSquareSvg className="w-5 transition-colors duration-250 hover:text-accent" />
                    </Link>
                  )}
                </div>
                <p>{description}</p>
                <div className="flex flex-row flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <div
                      key={`config-item-tag-${index}`}
                      className="flex h-8 w-fit items-center justify-center rounded-lg border border-accent/80 bg-accent/15 px-2 text-accent"
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
