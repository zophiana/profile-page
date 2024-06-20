import Image, { type StaticImageData } from 'next/image'

import { cn } from '@/lib/utils'
import ArticleBlock from '@/app/article'
import Clamp from '@/app/clamp'

import codePic from '/public/images/code.jpg'
import dancePic from '/public/images/dance.webp'
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
        <HobbiesCard
          title="Coden & Technik"
          image={codePic}
          alt={'Monitor with code'}
        >
          Ich habe mich als Kind schon immer dafür interessiert, wie dinge
          funktionieren. Vor allem wie alles Elektronische funktioniert und
          welche Komponenten man dafür braucht. Besonders Computer haben es mir
          angetan, weshalb ich immer versucht habe zu verstehen wie sie
          funktionieren. Daher benutze ich seit Jahren Linux als mein
          Hauptbetriebssystem.
        </HobbiesCard>

        <HobbiesCard
          title="Tanzen"
          image={dancePic}
          alt={'Monitor with code'}
          layoutReverse
        >
          Ich tanze seit vielen Jahren sehr gerne Latein- und Standardtanz. Vor
          ein paar Jahren habe ich dann den West Coast Swing für mich entdeckt.
          An diesem Tanz gefällt mir besonders, dass es so viele
          Variationsmöglichkeiten gibt und dass er das Ziel hat, die Musik so
          gut wie möglich zu vertanzen. Dadurch habe ich viel Neues über den
          Aufbau von Musik gelernt, was mir auch beim Klavierspielen geholfen
          hat.
        </HobbiesCard>

        <HobbiesCard
          title="Klavier & Musik"
          image={pianoPic}
          alt={'Picture of Piano'}
        >
          Bevor ich mit dem Klavierspielen angefangen habe, habe ich viele Jahre
          Geige gespielt. Dann habe ich mit dem Klavierspielen angefangen. Mir
          hat daran begeistert, dass man zweistimmig Musik machen kann. Dadurch
          klingt es gleich sehr viel voller als mit der Geige. Außerdem gibt es
          für das Klavier viele Noten für moderne Musik. Deshalb spiele ich nur
          noch Klavier.
        </HobbiesCard>
      </Clamp>
    </main>
  )
}
