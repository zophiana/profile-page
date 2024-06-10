import Clamp from './clamp'

type FooterProps = {
  className?: string
}

export default function Footer(props: FooterProps) {
  return (
    <footer className={`py-2 ${props.className}`}>
      <Clamp>Made by Leonard Schwennesen 2024 &copy;</Clamp>
    </footer>
  )
}
