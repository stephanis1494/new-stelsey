import AltChurchSvg from "@/src/svg/alt-church.svg"
import MusicSvg from "@/src/svg/music.svg"
import MentoringSvg from "@/src/svg/mentoring.svg"
import NatureSvg from "@/src/svg/nature.svg"
import PawSvg from "@/src/svg/paw.svg"
import ArrowUpRightFromSquareSvg from "@/src/svg/arrow-up-right-from-square.svg"
import Link from "next/link"
import { PortraitFrame } from "@/src/components/PortraitFrame"
import { KittyModalButton } from "@/src/components/KittyModalButton"
import { LandscapeBackground } from "@/src/components/LandscapeBackground"

const JUAN_LINK = "https://juanlusichaurant.com"
const HUNTER_LINK = "https://hunterjerochim.com"
const STEPHEN_DAPPER = "https://images.stelsey.com/seflie-beard.png"

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
      "Alt Church is my side project and a hopeful future passion to bring a 100% transparent non-profit backed suite of software to users at the lowest possible cost. It is in a pre-alpha state with only a couple friends having full access. You can however poke around in guest mode and check out the 8 apps that are currently live. There is also a react-native app that is in alpha and work has started on the desktop app as well. ",
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
    tags: [
      "LeetCode",
      "CodeAcademy",
      "FreeCodeCamp",
      "Javascript",
      "Node",
      "Html",
      "CSS",
      "SQL",
    ],
  },
  {
    title: "Music",
    titleHref: "https://soundcloud.com/stelseylesser",
    description:
      "Since I was very young, my favorite hobby has always been music. Chelsey and I’s living room is a band room with a full sound system, guitars, piano, drums and a variety of other instruments. I host jam sessions with friends at our house regularly and I also really love Karaoke. My favorite musical era is blues rock from the 60’s / 70’s and I am actively trying to improve my skills at both blues improvisation on the guitar and jazz on the piano.",
    icon: (
      <MusicSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: ["Drums", "Guitar", "Piano", "Bass", "Saxophone", "Flute"],
  },
  {
    title: "Cat Dad",
    modalId: "kitties",
    description:
      "Chelsey and I have two wonderful kitty babies, Cheese and Moe. Moe loves to sit by the window and watch our neighborhood squirrels eat Walnuts or spread out in front of the fire and get toasty. Cheese loves to curl up next to me while I work or meow insatiably at me until I follow him into his favorite bedroom so he can flop and receive affection. Both of them love to wander outside on their leashes and take in nature, both of them lose their minds for Churu <3 ",
    icon: (
      <PawSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: ["Jackson", "Moe", "Cheesy", "CatLifeBestLife"],
  },
  {
    title: "Nature",
    description:
      "Chelsey and I are very blessed to have a small rambler on the backside of McCollum Park in Mill Creek, Wa. There are majestic Cedar and Spruce trees surrounding our home and most homes in the neighborhood. We have a wonderful quarter acre piece of land that sure does keep us busy. We transformed the front yard two years ago to remove over a dozen stumps, bring in a bunch of soil and lay fresh grass <3 We still have a lot of work to realize it’s full potential but it is so much nicer than it was already :) ",
    icon: (
      <NatureSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: ["Moe", "Cheesy", "CatLifeBestLife"],
  },
]

export default function Stephen() {
  return (
    <div className="flex w-full flex-1 flex-col items-center px-4">
      <LandscapeBackground />
      <div className="flex max-w-300 flex-col gap-16 pt-12 pb-20 md:gap-24 md:pt-40">
        <div className="flex w-full flex-col items-center gap-24 lg:flex-row xl:gap-45">
          <PortraitFrame innerClassName="h-[400px] w-[260px] sm:h-[521px] sm:w-[338px]">
            <img src={STEPHEN_DAPPER} className="h-full object-cover" />
          </PortraitFrame>
          <div className="flex flex-col gap-2">
            <h1 className="font-header text-5xl md:text-6xl">
              Hi, I&apos;m Stephen!
            </h1>
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
            const { title, titleHref, description, tags, icon, modalId } =
              config

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
                  {modalId === "kitties" && <KittyModalButton />}
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
      </div>
    </div>
  )
}
