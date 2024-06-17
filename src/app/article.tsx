import { cn } from '@/lib/utils'

type ArticleBlockProps = {
  className?: string
  classNameTitle?: string
  title?: string
  children: React.ReactNode
}

export default function ArticleBlock(props: ArticleBlockProps) {
  return (
    <article className={cn('text-lg font-light', props.className)}>
      <h1 className={cn('text-2xl font-medium', props.classNameTitle)}>
        {props.title}
      </h1>
      <p>{props.children}</p>
    </article>
  )
}
