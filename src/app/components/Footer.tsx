import { FaGithub, FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 text-white py-8 mt-12 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5 text-center">
        
        {/* Footer Text */}
        <div>
          <p className="text-sm tracking-wide">
            © {new Date().getFullYear()} <span className="font-semibold">Usman’s Portfolio</span>. All Rights Reserved.
          </p>
          <p className="mt-2 text-yellow-200 font-semibold italic">
            Crafted with ❤️ using Next.js + TailwindCSS
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-7 text-2xl mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 hover:text-gray-100 transition-transform duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 hover:text-pink-300 transition-transform duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:scale-110 hover:text-gray-300 transition-transform duration-200"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:scale-110 hover:text-red-400 transition-transform duration-200"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 hover:text-blue-300 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
