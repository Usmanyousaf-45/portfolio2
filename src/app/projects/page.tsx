import SectionTitle from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-700 via-black to-yellow-500 px-8 py-20 text-white">
      <SectionTitle title="Featured Projects 🚀" />
      <div className="grid gap-12 mt-14 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Portfolio Website"
          description="A colourful & responsive portfolio built with Next.js, TypeScript, and TailwindCSS."
          image="/portfolio.jpg"
          link="https://portfoliowebsite-mauve-two.vercel.app/"
        />
        <ProjectCard
          title="E-commerce Store"
          description="A creative e-commerce platform with smooth UI and modern design."
          image="/e-commerece.jpg"
          link="https://e-commerece-two-theta.vercel.app/"
        />
        <ProjectCard
          title="AI App"
          description="An AI-powered business tool with experimental features."
          image="/ai-app.jpg"
          link="https://ai-app-ochre-two.vercel.app/"
        />
      </div>
    </section>
  )
}
