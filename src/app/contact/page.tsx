import SectionTitle from "../components/SectionTitle"

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 flex flex-col items-center justify-center px-6 py-20 text-white">
      <SectionTitle title="Contact Me" />
      <form className="mt-10 w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <button className="w-full py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition">
          Send Message 🚀
        </button>
      </form>
    </section>
  )
}
