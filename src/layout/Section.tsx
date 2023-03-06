interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
}

export default function Section (props: SectionProps): JSX.Element {
  return (
    <section className={`text-white bg-black min-h-screen ${props.className ?? ''}`}>
      {props.children}
    </section>
  )
}
