import { FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-6 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        
        {/* Text */}
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} Usman’s Portfolio. All rights reserved.
          </p>
          <p className="mt-2 text-yellow-300 font-medium">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>

        {/* Social Links with aria-label */}
        <div className="flex gap-6 text-2xl mt-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-200 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-gray-200 transition"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-gray-200 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-200 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
