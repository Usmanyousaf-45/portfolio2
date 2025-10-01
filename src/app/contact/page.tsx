import SectionTitle from "../components/SectionTitle"

export default function Contact() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 py-20 overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#ff6ec7,_#4facfe,_#00f2fe)] animate-gradient-x"></div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl"></div>

      {/* Neon Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-cyan-500/30 rounded-full blur-3xl animate-bounce"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <SectionTitle title="Get in Touch" />

        <form className="mt-10 bg-white/10 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,0,255,0.3)] p-10 space-y-6 border border-white/20">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <textarea
            placeholder="Your Message..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button className="w-full py-3 text-lg font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 rounded-xl shadow-[0_0_25px_rgba(255,0,255,0.6)] hover:scale-105 active:scale-95 transition">
            ✉️ Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
