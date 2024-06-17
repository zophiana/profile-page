'use client'

import Image from 'next/image'
import { useResizeDetector } from 'react-resize-detector'

import { cn } from '@/lib/utils'
import ArticleBlock from '@/app/article'
import Clamp from '@/app/clamp'

import profilePic from '/public/images/me.jpg'

type HobbiesBlockProps = {
  className?: string
}

function HobbiesBlock(props: HobbiesBlockProps) {
  return (
    <ArticleBlock className={props.className} title="Hobbies">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nihil
      totam aut consequuntur incidunt et, nulla dolorem, perspiciatis in quaerat
      blanditiis! Qui impedit quidem ab neque quibusdam, omnis dignissimos
      doloremque? Quisquam, quaerat, dolores, asperiores, repellat, quaerat,
      quam, doloremque, quibusdam, voluptates, ipsam!
    </ArticleBlock>
  )
}

function PaddingBlock() {
  return <div className="pt-16 sm:pt-48"></div>
}

export default function HomePage() {
  const { width, height, ref } = useResizeDetector()

  type HeightBlockProps = {
    className?: string
    children: React.ReactNode
  }

  function HeightBlock(props: HeightBlockProps) {
    return (
      <div
        style={{ ['--min-height' as string]: `${height}px` }}
        className={cn(
          'flex flex-col justify-center sm:min-h-[--min-height]',
          props.className,
        )}
      >
        {props.children}
      </div>
    )
  }

  return (
    <div>
      <Clamp className="justify-center pb-96">
        <div className="flex flex-col-reverse items-center py-4 sm:flex-row sm:py-12 sm:pe-8 sm:ps-4 sm:[align-items:_unset] md:py-20 md:pe-20 md:ps-16">
          <div className="z-10 flex min-w-0 flex-col">
            <div
              style={{
                ['--min-height' as string]: `${height}px`,
                ['--width' as string]: `${width}px`,
              }}
              className={`flex w-[--width] animate-fade-up flex-col justify-center self-center sm:min-h-[--min-height] sm:w-full`}
            >
              <div className="pt-10 text-5xl font-semibold sm:w-full sm:pt-0 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                <h1 className="inline-block">Hi, I&apos;m</h1>
                <br />
                <h1 className="inline bg-gradient-to-br from-amber-400 via-pink-500 to-indigo-500 to-80% bg-clip-text text-transparent drop-shadow-[0_0_6px_rgb(0,0,0)]">
                  Leonard
                  <br />
                  Schwennesen
                </h1>
              </div>
            </div>
            <div className="animate-fade-up sm:pr-10">
              <PaddingBlock />
              <HeightBlock className="gap-5">
                <ArticleBlock title="Über Mich">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, aperiam dolorem earum aut modi incidunt vitae ipsum.
                  Numquam repellendus, corporis ipsum dolor fugit veniam
                  corrupti ea eaque provident minus. Voluptate! Quisquam
                  voluptate, quia, quaerat, dolores, asperiores, repellat,
                  quaerat, quam, doloremque, quibusdam, voluptates, ipsam!
                </ArticleBlock>
                <HobbiesBlock className="hidden lg:block"></HobbiesBlock>
              </HeightBlock>
              <div className="lg:hidden">
                <PaddingBlock />
                <HeightBlock>
                  <HobbiesBlock></HobbiesBlock>
                </HeightBlock>
              </div>
            </div>
          </div>
          <Image
            ref={ref}
            src={profilePic}
            alt="An image from me"
            width={0}
            height={0}
            className="image sticky z-auto h-fit w-full max-w-sm animate-fade-left sm:top-[6.5rem] sm:min-w-[45%] sm:max-w-none md:top-[8.5rem] md:min-w-[47%] lg:min-w-[43%]"
          ></Image>
        </div>
      </Clamp>
    </div>
  )
}
