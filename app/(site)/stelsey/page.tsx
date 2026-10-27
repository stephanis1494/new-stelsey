import { OutlineBackground } from "@/src/components/OutlineBackground"
import { StelseyFrames } from "@/app/(site)/stelsey/_components/StelseyFrames"

export default function Stelsey() {
  return (
    <div className="flex w-full flex-1 flex-col items-center px-4">
      <OutlineBackground shape="heart" />
      <div className="flex w-full max-w-300 flex-col gap-12 pt-12 pb-20 md:pt-40">
        <h1 className="text-center font-header text-5xl md:text-6xl">
          Stelsey
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-center text-lg">
            The Story of Stelsey goes way way back to when we first met in the
            summer of 2003 at Northview Community Church, in a youth program
            called CQ. I was absolutely smitten by Chelsey’s larger than life
            personality, her breathtaking smile, piercing hazel eyes and a
            proclivity for playful violence. She loved to laugh, she loved to
            yell, she loved to hit me with her bright pink purse that was in the
            shape of a butt. We made a lot of sweet teenage love memories back
            then, just a couple of young kids trying to find ourselves while
            getting lost in each other. We dated for a little under a year
            before my youthful immaturity made things fall apart. I moved back
            to Washington shortly thereafter.
          </p>
          <p className="text-center text-lg">
            In the summer of 2013, after having been apart living our separate
            lives for 10 years I unashamedly looked Chelsey up on Facebook and
            slide into her DM’s. Needless to say after 10 years of being apart
            Chelsey was more than a little hesitant to give her kind of a mess
            high school boyfriend a second chance. She agreed to see me and took
            my breath away as she always had whenever I was around her, but she
            reasonably kept me at a distance. We spent time together, she
            absolutely loved to tease me, let me buy her and her friends drinks
            when we’d go out, but she knew better than to let me back into her
            life in a more significant way.
          </p>
          <p className="text-center text-lg">
            That all changed in January of 2015. After a year of intense
            groveling (Which I deserved), topped off with a good old fashioned
            over the top romantic gesture, Chelsey agreed to give us a second
            chance. We dated for over a year, her still living in Abbotsford,
            B.C. and I in Seattle, spending most weekends together but going our
            separate ways during the week. After more than a year of long
            distance Chelsey made the decision to move down to the US for the
            first time when we bought our condo in Everett. I asked Chelsey to
            marry me that year on October 22nd, 2016 in front of 40 of her
            closest friends and relatives on the dock in Edmonds. August 26th
            2017 we were married in Bellingham in a beautiful outdoor ceremony.
            In 2022 we bought our house on the backside of McCollum Park in Mill
            Creek and live there to this day with our two kitty babies Cheese
            and Moe. We love our little 60’s rambler on our quarter acre lot,
            surrounded by tall evergreens and full of birds, squirrels and
            bunnies. I couldn’t imagine a more beautiful life than the one I
            have been blessed with. If I had a million lives to live, I would
            live each one of them with Chelsey and our sweet kitties.
          </p>
        </div>
        <StelseyFrames />
      </div>
    </div>
  )
}
