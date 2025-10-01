import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[100vh] px-8 overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ff6ec7,_#4facfe,_#00f2fe)] animate-gradient-x"></div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl"></div>

      {/* Floating Neon Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-pink-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl animate-bounce"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 grid md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
        
        {/* Left Side - Intro */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 animate-fade-in">
            Hey 👋 I’m <br /> <span className="text-white">Usman Yousaf</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200/90 leading-relaxed animate-fade-in delay-200">
            🚀 Businessman • Developer • AI Enthusiast  
            I love creating <span className="text-pink-400 font-semibold">colourful</span> &  
            <span className="text-cyan-300 font-semibold"> modern</span> experiences for the web ✨
          </p>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6 animate-fade-in delay-500">
            <button className="px-8 py-4 text-lg bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white font-bold rounded-2xl shadow-[0_0_25px_rgba(255,0,255,0.6)] hover:scale-110 transition">
              🚀 Explore My Work
            </button>
            <button className="px-8 py-4 text-lg bg-white/10 backdrop-blur-lg border border-white/30 text-white font-semibold rounded-2xl shadow-md hover:scale-105 transition">
              📩 Contact Me
            </button>
          </div>
        </div>

        {/* Right Side - Picture */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 blur-3xl opacity-70 animate-pulse"></div>
            <Image
              src="/usman.jpg"
              alt="Usman Yousaf"
              width={420}
              height={420}
              className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full object-cover shadow-[0_0_40px_rgba(255,255,255,0.3)] border-4 border-white/50 hover:scale-105 transition"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
