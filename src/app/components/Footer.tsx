const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-6 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Usman’s Portfolio. All rights reserved.
        </p>
        <p className="mt-2 text-yellow-300 font-medium">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
export default Footer
