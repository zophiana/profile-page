import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ClampProps = {
  className?: string
  children?: ReactNode
}

export default function Clamp(props: ClampProps) {
  return (
    <div className="flex size-full justify-center">
      <div className={cn('flex w-full max-w-7xl px-4', props.className)}>
        {props.children}
      </div>
    </div>
  )
}
