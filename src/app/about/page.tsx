import SectionTitle from "../components/SectionTitle"

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-bl from-pink-500 via-purple-600 to-blue-400 flex flex-col items-center justify-center px-8 py-20 text-white">
      <SectionTitle title="About Me 🌟" />
      <p className="mt-10 max-w-2xl text-xl text-center leading-relaxed tracking-wide">
        Hello! I’m <span className="font-bold text-yellow-300">Usman Yousaf</span>,  
        a dedicated <span className="italic">businessman</span> and enthusiastic <span className="italic">developer</span>.  
        I enjoy exploring <span className="underline decoration-yellow-400">AI innovations</span>,  
        building modern web experiences, and transforming ideas into reality. 🚀  
        <br /> <br />
        My vision is simple: <span className="text-pink-300 font-semibold">to inspire people</span>  
        and <span className="text-blue-300 font-semibold">create impact through technology</span>.
      </p>
    </section>
  )
}
