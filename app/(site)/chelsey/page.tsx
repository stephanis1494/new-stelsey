import Link from "next/link"
import { PortraitFrame } from "@/src/components/PortraitFrame"
import { LandscapeBackground } from "@/src/components/LandscapeBackground"
import PawSvg from "@/src/svg/paw.svg"
import ArrowUpRightFromSquareSvg from "@/src/svg/arrow-up-right-from-square.svg"
import { KittyModalButton } from "@/src/components/KittyModalButton"

const CHELSEY_PAGE_CONFIG = [
  {
    title: "Photography",
    titleHref: "https://www.instagram.com/chelseyrae__",
    description:
      "Photography is how I slow down and actually notice the world around me. I love chasing golden hour light, catching friends in candid little moments and finding beauty in the everyday stuff most people walk right past. Living in the Pacific Northwest means moody skies, misty forests and endless green, which are basically a photographer's dream :) Most of my favorite shots end up on my Instagram, so hop on over if you'd like to see more!",
    tags: [
      "Portraits",
      "Landscapes",
      "Golden Hour",
      "Candids",
      "Lightroom",
      "PNW",
    ],
  },
  {
    title: "Travel",
    description:
      "Some of my happiest memories are from being somewhere new with a camera in hand. Whether it's a spontaneous road trip, a weekend getaway to a cozy little town or a bigger adventure somewhere I've never been, I love soaking in the local food, the scenery and the people. Stephen and I are always dreaming up our next trip, and there's a never-ending list of places we can't wait to explore together <3",
    tags: [
      "Road Trips",
      "Weekend Getaways",
      "Hiking",
      "Local Eats",
      "Bucket List",
    ],
  },
  {
    title: "Art",
    description:
      "Art has been a part of my life for as long as I can remember. I love getting lost in a project, whether that's painting, sketching, crafting or tackling some DIY project around the house. It's my favorite way to unwind after a long day and to make our home feel a little more like us. I don't always know where a piece is going when I start, and honestly that's my favorite part :)",
    tags: ["Painting", "Sketching", "Crafting", "DIY", "Home Decor"],
  },
  {
    title: "Cat Mom",
    modalId: "kitties",
    description:
      "Stephen and I have two wonderful kitty babies, Cheese and Moe. Moe loves to sit by the window and watch our neighborhood squirrels eat Walnuts or spread out in front of the fire and get toasty. Cheese loves to curl up next to me while I work or meow insatiably at me until I follow him into his favorite bedroom so he can flop and receive affection. Both of them love to wander outside on their leashes and take in nature, both of them lose their minds for Churu <3 ",
    icon: (
      <PawSvg className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-auto opacity-10" />
    ),
    tags: ["Jackson", "Moe", "Cheesy", "CatLifeBestLife"],
  },
]

export default function Chelsey() {
  return (
    <div className="flex w-full flex-1 flex-col items-center px-4">
      <LandscapeBackground />
      <div className="flex max-w-300 flex-col gap-16 pt-12 pb-20 md:gap-24 md:pt-40">
        <div className="flex w-full flex-col items-center gap-16 lg:flex-row xl:gap-45">
          <PortraitFrame innerClassName="h-[400px] w-[260px] sm:h-[521px] sm:w-[338px]">
            <img src="https://images.stelsey.com/chelsey-octoberfest-crown-queen.jpg" />
          </PortraitFrame>
          <div className="flex flex-col gap-2">
            <h1 className="font-header text-5xl md:text-6xl">
              Hi, I&apos;m Chelsey!
            </h1>
            <p>
              I&apos;m a creative at heart and happiest when I&apos;m making
              something, whether that&apos;s capturing a moment behind the
              camera, working on a new art project or planning our next
              adventure :) I love finding beauty in the little things, spending
              cozy days at home with Stephen and our two kitties, and getting
              outside to soak up everything the Pacific Northwest has to offer.
              If you&apos;d like to get to know me a little better (Amongst
              other mostly silly anecdotes) just scroll down!
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {CHELSEY_PAGE_CONFIG.map((config, index) => {
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
