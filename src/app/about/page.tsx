import SectionTitle from "../components/SectionTitle"

export default function About() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-20 overflow-hidden bg-black text-white">
      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ff6ec7,_#4facfe,_#00f2fe)] animate-gradient-x"></div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl"></div>

      {/* Floating Blobs */}
      <div className="absolute -top-24 left-10 w-80 h-80 bg-purple-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-pink-500/30 rounded-full blur-3xl animate-bounce"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <SectionTitle title="About Me 🌟" />
        <p className="mt-10 text-lg md:text-xl leading-relaxed tracking-wide text-gray-200/90">
          Hello! I’m <span className="font-bold text-pink-400">Usman Yousaf</span>,  
          a passionate <span className="italic text-yellow-300">businessman</span> and  
          enthusiastic <span className="italic text-cyan-300">developer</span>.  
          <br /> <br />
          I love exploring <span className="underline decoration-pink-400">AI innovations</span>,  
          building modern web experiences, and turning unique ideas into reality 🚀  
          <br /> <br />
          My vision is simple:  
          <span className="text-pink-300 font-semibold"> to inspire people</span>  
          and <span className="text-cyan-300 font-semibold"> create real impact through technology</span>.
        </p>
      </div>
    </section>
  )
}
