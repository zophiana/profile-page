import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import Clamp from '../clamp'

function DotWithLine() {
  return (
    <div className="relative w-32">
      <div className="h-full w-1/2 border-r"></div>
      <div className="absolute left-0 top-0 flex size-full items-center justify-center">
        <div className="size-12 rounded-full border bg-background"></div>
      </div>
    </div>
  )
}

function ResumeDate(props: { date: string }) {
  return (
    <div className="flex min-w-44 items-center justify-end">
      <p className="text-base font-medium">{props.date}</p>
    </div>
  )
}

type ResumeCardProps = {
  title?: string
  description?: string
  children?: React.ReactNode
}

function ResumeCard(props: ResumeCardProps) {
  return (
    <div className="py-2">
      <Card className="rounded-3xl">
        <CardHeader className="pb-3">
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>{props.children}</CardContent>
      </Card>
    </div>
  )
}

export default function CVPage() {
  return (
    <main className="flex-auto">
      <Clamp className="flex max-w-6xl flex-col pb-24 pt-8">
        <div className="grid grid-cols-[min-content_min-content_auto]">
          <div></div>
          <div className="w-32 gradient-mask-t-0">
            <div className="h-24 w-1/2 border-r"></div>
          </div>
          <div></div>

          <ResumeDate date="Aug. 2023 - laufend"></ResumeDate>
          <DotWithLine></DotWithLine>
          <ResumeCard
            title="Ausbildung zum Fachinformatiker für Anwendungsentwicklung"
            description="Rhenus Freight Network GmbH, Rhenus-Platz 1, 59439 Holzwickede"
          >
            <ul className="list-inside list-disc pl-1">
              <li>Arbeit in einem Software-Entwicklungsteam</li>
              <li>IntelliJ mit Java und Scout-Framework</li>
              <li>Oracle SQL und Oracle PL/SQL</li>
              <li>Jira und Confluence</li>
              <li>GitLab Entwicklungs-Workflow</li>
            </ul>
          </ResumeCard>

          <ResumeDate date="Nov. 2023 - laufend"></ResumeDate>
          <DotWithLine></DotWithLine>
          <ResumeCard
            title="Nebenjob: Systemverwaltung und -wartung"
            description="Umweltzentrum Westfalen gGmbH, Westenhellweg 110, 59192 Bergkamen"
          >
            <ul className="list-inside list-disc pl-1">
              <li>Verwaltung von Linux-Servern (Nextcloud, Docker, Ansible)</li>
              <li>Verwaltung von Windows 10/11</li>
            </ul>
          </ResumeCard>

          <ResumeDate date="Aug. 2022 - Juli 2023"></ResumeDate>
          <DotWithLine></DotWithLine>
          <ResumeCard
            title="Freiwilliges Ökologisches Jahr (FÖJ)"
            description="Umweltzentrum Westfalen gGmbH, Westenhellweg 110, 59192 Bergkamen"
          >
            <ul className="list-inside list-disc pl-1">
              <li>Landessprecher des FÖJ in NRW</li>
              <li>Einsatz für die Interessen der Freiwilligen</li>
              <li>Organisation von Treffen mit LWL-Landesrätin</li>
            </ul>
          </ResumeCard>

          <ResumeDate date="Aug. 2013 - Juli 2022"></ResumeDate>
          <DotWithLine></DotWithLine>
          <ResumeCard
            title="Abitur"
            description="Werner-von-Siemens-Gesamtschule Königsborn, Döbelner Str. 7, 59425 Unna"
          >
            <ul className="list-inside list-disc pl-1">
              <li>Mathe und Technik als Leistungskurse</li>
              <li>Geschichte und Englisch als Grundkurse</li>
              <li>Physik und Chemie als reguläre Fächer</li>
            </ul>
          </ResumeCard>

          <div></div>
          <div className="w-32 gradient-mask-b-0">
            <div className="h-24 w-1/2 border-r"></div>
          </div>
          <div></div>
        </div>
      </Clamp>
    </main>
  )
}
