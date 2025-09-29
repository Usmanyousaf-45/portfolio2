import SectionTitle from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-400 via-blackish-900 to-purple-600 px-10 py-20 text-white">
      <SectionTitle title="My Projects" />
      <div className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Portfolio Website"
          description="A modern colourful portfolio made with Next.js, TypeScript & Tailwind."
          image="/portfolio.jpg"
          link="https://vercel.com/usman-yousafs-projects-9dcd356b/portfoliowebsite/3gYN23VwbizZZJVUFujjn1F2jHJq"
        />
        <ProjectCard
          title="E-commerce Store"
          description="A stylish e-commerce website with colourful gradients and smooth UI."
          image="/e-commerece.jpg"
          link="https://vercel.com/usman-yousafs-projects-9dcd356b/e-commerece/DwCr6YGxLc29kGeJgZWjcFSRtTf6"
        />
        <ProjectCard
          title="AI App"
          description="An experimental AI-powered application for businesses."
          image="/ai-app.jpg"
          link="https://vercel.com/usman-yousafs-projects-9dcd356b/ai-app/6rQgYz3284sr1YrzNk1AFEnNnJBC"
        />
      </div>
    </section>
  )
}
