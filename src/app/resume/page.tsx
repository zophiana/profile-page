import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import Clamp from '../clamp'

function DotWithLine(props: { small?: boolean }) {
  return (
    <div className="w-fit pl-6">
      <div className="relative w-16">
        <div className={cn('h-32 w-1/2 border-r', props.small && 'h-20')}></div>
        <div className="absolute left-0 top-0 flex size-full items-end justify-center pb-5">
          <div className="size-12 rounded-full border bg-background"></div>
        </div>
      </div>
    </div>
  )
}

function ResumeDate(props: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-end justify-start pl-3">
      <div className="pb-5">
        <div className="flex h-12 items-center">
          <p className="text-base font-medium">{props.children}</p>
        </div>
      </div>
    </div>
  )
}

function Li(props: { children: React.ReactNode }) {
  return <li className="ml-3.5">{props.children}</li>
}

export default function CVPage() {
  return (
    <main className="flex-auto">
      <Clamp className="flex flex-col items-center pb-24 pt-8">
        <div className="grid animate-fade-left grid-cols-[auto]">
          <div className="w-fit pl-6">
            <div className="w-16 gradient-mask-t-0">
              <div className="h-24 w-1/2 border-r"></div>
            </div>
          </div>

          <div className="flex flex-row">
            <DotWithLine small></DotWithLine>
            <ResumeDate>Aug. 2023 - laufend</ResumeDate>
          </div>
          <Card className="rounded-3xl">
            <CardHeader className="pb-3">
              <CardTitle>
                Ausbildung zum Fachinformatiker für{' '}
                <br className="max-500px:hidden" />
                Anwendungsentwicklung
              </CardTitle>
              <CardDescription>
                Rhenus Freight Network GmbH,&nbsp;
                <br className="block lg:hidden" />
                Rhenus-Platz 1, 59439 Holzwickede
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-1">
                <Li>Arbeit in einem Software-Entwicklungsteam</Li>
                <Li>IntelliJ mit Java und Scout-Framework</Li>
                <Li>Oracle DB und Oracle PL/SQL</Li>
                <Li>Jira und Confluence</Li>
                <Li>GitLab Entwicklungs-Workflow</Li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-row">
            <DotWithLine></DotWithLine>
            <ResumeDate>Nov. 2023 - laufend</ResumeDate>
          </div>
          <Card className="rounded-3xl">
            <CardHeader className="pb-3">
              <CardTitle>Nebenjob: Systemverwaltung und -wartung</CardTitle>
              <CardDescription>
                Umweltzentrum Westfalen gGmbH,&nbsp;
                <br className="block lg:hidden" />
                Westenhellweg 110, 59192 Bergkamen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-1">
                <Li>
                  Verwaltung von Linux-Servern (Nextcloud, Docker, Ansible)
                </Li>
                <Li>Verwaltung von Windows 10/11</Li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-row">
            <DotWithLine></DotWithLine>
            <ResumeDate>Aug. 2022 - Juli 2023</ResumeDate>
          </div>
          <Card className="rounded-3xl">
            <CardHeader className="pb-3">
              <CardTitle>Freiwilliges Ökologisches Jahr (FÖJ)</CardTitle>
              <CardDescription>
                Umweltzentrum Westfalen gGmbH,&nbsp;
                <br className="block lg:hidden" />
                Westenhellweg 110, 59192 Bergkamen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-1">
                <Li>Landessprecher des FÖJ in NRW</Li>
                <Li>Einsatz für die Interessen der Freiwilligen</Li>
                <Li>Organisation von Treffen mit LWL-Landesrätin</Li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-row">
            <DotWithLine></DotWithLine>
            <ResumeDate>Aug. 2013 - Juli 2022</ResumeDate>
          </div>
          <Card className="rounded-3xl">
            <CardHeader className="pb-3">
              <CardTitle>Abitur</CardTitle>
              <CardDescription>
                Werner-von-Siemens-Gesamtschule Königsborn,&nbsp;
                <br className="block max-420px:hidden lg:hidden" />
                Döbelner Str. 7, 59425 Unna
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-1">
                <Li>Mathe und Technik als Leistungskurse</Li>
                <Li>Geschichte und Englisch als Grundkurse</Li>
                <Li>Physik und Chemie als reguläre Fächer</Li>
              </ul>
            </CardContent>
          </Card>

          <div className="w-fit pl-6">
            <div className="w-16 gradient-mask-b-0">
              <div className="h-24 w-1/2 border-r"></div>
            </div>
          </div>
        </div>
      </Clamp>
    </main>
  )
}
