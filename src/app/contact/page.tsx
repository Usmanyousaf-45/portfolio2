import SectionTitle from "../components/SectionTitle"

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center px-6 py-20 text-white">
      <SectionTitle title="Get in Touch" />
      <form className="mt-10 w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6 border border-white/20">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
        <textarea
          placeholder="Your Message..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
        <button className="w-full py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-xl font-semibold hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg">
          ✉️ Send Message
        </button>
      </form>
    </section>
  )
}
