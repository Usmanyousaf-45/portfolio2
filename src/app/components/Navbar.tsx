import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white shadow-lg">
      <h1 className="text-2xl font-extrabold tracking-wide">
        Usman<span className="text-yellow-300">Portfolio</span>
      </h1>
      <ul className="flex space-x-6 font-medium">
        <li>
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-yellow-300 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
