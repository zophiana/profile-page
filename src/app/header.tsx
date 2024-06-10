import { Bars3Icon } from '@heroicons/react/24/solid'

import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import Clamp from './clamp'

type NavbarProps = {
  className?: string
  vertial?: boolean
}

function Navbar(props: NavbarProps) {
  return (
    <nav className={props.className}>
      <ul
        className={cn(
          'flex gap-x-4 gap-y-1 text-3xl font-medium md:text-base md:font-normal',
          props.vertial && 'flex-col gap-y-2',
        )}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/hobbies">Hobbies</a>
        </li>
        <li>
          <a href="/my-apprenticeship">Meine Ausbildung</a>
        </li>
        <li>
          <a href="/resume">Lebenslauf</a>
        </li>
        <li>
          <a href="/contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  )
}

type HeaderProps = {
  className?: string
}

export default function Header(props: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-20 h-14 animate-fade-down bg-[hsl(var(--background)_/_var(--tw-bg-opacity))] bg-opacity-60 backdrop-blur after:backdrop-blur-xl',
        props.className,
      )}
    >
      <Clamp className="items-center">
        <h1>Leonard Schwennesen</h1>
        <div className="ml-auto">
          <Navbar className={'hidden md:flex'}></Navbar>
          <Sheet>
            <SheetTrigger className="flex md:hidden">
              <Bars3Icon className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent className="w-80" side="right">
              <Navbar vertial></Navbar>
            </SheetContent>
          </Sheet>
        </div>
      </Clamp>
    </header>
  )
}
