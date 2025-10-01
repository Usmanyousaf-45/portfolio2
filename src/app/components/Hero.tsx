const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-pink-300 to-purple-700 opacity-20 animate-pulse"></div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 drop-shadow-lg">
        Hi, I’m <span className="underline decoration-pink-400">Usman Yousaf</span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
        Businessman | Developer | <span className="font-bold text-pink-300">AI Enthusiast</span>  
        <br />I create colourful, modern and impactful digital solutions.
      </p>

      {/* Call to Action Button */}
      <button className="mt-10 px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-2xl font-semibold shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300">
        🚀 Explore My Work
      </button>
    </section>
  )
}

export default Hero
