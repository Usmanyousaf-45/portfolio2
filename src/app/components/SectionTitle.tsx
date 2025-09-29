interface SectionTitleProps {
  title: string
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 drop-shadow-lg">
      {title}
    </h2>
  )
}
export default SectionTitle
