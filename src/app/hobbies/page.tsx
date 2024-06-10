import Image, { type StaticImageData } from 'next/image'

import { cn } from '@/lib/utils'
import ArticleBlock from '@/app/article'
import Clamp from '@/app/clamp'

import codePic from '/public/images/code.jpg'
import pianoPic from '/public/images/piano.jpg'

type HobbiesCardProps = {
  className?: string
  image: StaticImageData
  alt: string
  title: string
  layoutReverse?: boolean
  children: React.ReactNode
}

function HobbiesCard(props: HobbiesCardProps) {
  return (
    <div
      className={cn(
        'flex max-w-md flex-col-reverse items-center gap-6 self-center md:max-w-none md:flex-row',
        props.layoutReverse && 'md:flex-row-reverse',
        props.className,
      )}
    >
      <div className="animate-fade-up md:w-1/2 lg:w-7/12">
        <ArticleBlock
          className="max-lg:text-base"
          classNameTitle="max-lg:text-xl"
          title={props.title}
        >
          {props.children}
        </ArticleBlock>
      </div>
      <Image
        src={props.image}
        alt={props.alt}
        className={cn(
          'image h-fit md:w-1/2 lg:w-5/12',
          props.layoutReverse ? 'animate-fade-right' : 'animate-fade-left',
        )}
      ></Image>
    </div>
  )
}

export default function HobbiesPage() {
  return (
    <main className="flex-auto">
      <Clamp className="flex flex-col gap-16 py-12">
        <HobbiesCard title="Coden" image={codePic} alt={'Monitor with code'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </HobbiesCard>

        <HobbiesCard
          title="Klavier spielen"
          image={pianoPic}
          alt={'Picture of Piano'}
          layoutReverse
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </HobbiesCard>

        <HobbiesCard title="Tanzen" image={codePic} alt={'Monitor with code'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </HobbiesCard>
      </Clamp>
    </main>
  )
}
