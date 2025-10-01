import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-green-300 to-yellow-300 animate-gradient-x"></div>

      {/* Floating Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
        
        {/* Left Side - Intro */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 drop-shadow-xl animate-fade-in">
            Hi, I’m Usman Yousaf
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in delay-200">
            Businessman | Developer | AI Enthusiast  
            I craft modern, colourful and impactful digital experiences 🚀
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in delay-500">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold rounded-2xl shadow-xl hover:scale-110 hover:shadow-2xl transition">
              Explore My Work
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side - Picture */}
        <div className="flex justify-center">
          <Image
            src="/usman.jpg" // image public folder ke andar rakho
            alt="Usman Yousaf"
            width={400}
            height={400}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-white/50"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
