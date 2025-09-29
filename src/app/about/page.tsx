import SectionTitle from "../components/SectionTitle"

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center px-6 py-20 text-white">
      <SectionTitle title="About Me" />
      <p className="mt-8 max-w-3xl text-lg text-center leading-relaxed">
        Hi, I’m <span className="font-bold text-yellow-300">Usman Yousaf</span>, a passionate businessman and developer.  
        I love exploring AI, modern web technologies, and turning ideas into impactful digital solutions.  
        My mission is to inspire and innovate through technology.
      </p>
    </section>
  )
}
