interface SectionHeadingProps {
  children: React.ReactNode
}
export default function SectionHeading(props: SectionHeadingProps) {
  return (
    <h2 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text:4xl">
      {props.children}
    </h2>
  )
}
