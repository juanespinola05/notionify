interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
}

export default function Section (props: SectionProps): JSX.Element {
  return (
    <section className={`text-white bg-black h-screen ${props.className ?? ''}`}>
      {props.children}
    </section>
  )
}