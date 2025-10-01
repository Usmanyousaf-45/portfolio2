import SectionTitle from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-20 overflow-hidden bg-black text-white">
      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ff6ec7,_#4facfe,_#00f2fe)] animate-gradient-x"></div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl"></div>

      {/* Floating Blobs */}
      <div className="absolute top-20 -left-24 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-pink-500/30 rounded-full blur-3xl animate-bounce"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <SectionTitle title="Featured Projects 🚀" />
        <div className="grid gap-12 mt-14 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Portfolio Website"
            description="A colourful & responsive portfolio built with Next.js, TypeScript, and TailwindCSS."
            image="/portfolio.jpeg"
            link="https://portfoliowebsite-mauve-two.vercel.app/"
          />
          <ProjectCard
            title="E-commerce Store"
            description="A creative e-commerce platform with smooth UI and modern design."
            image="/e-commerece.jpeg"
            link="https://e-commerece-two-theta.vercel.app/"
          />
          <ProjectCard
            title="AI App"
            description="An AI-powered business tool with experimental features."
            image="/ai-app.jpeg"
            link="https://ai-app-ochre-two.vercel.app/"
          />
        </div>
      </div>
    </section>
  )
}
