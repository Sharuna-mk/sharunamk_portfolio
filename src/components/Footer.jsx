import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Sharuna.
            </h2>
            <p className="mt-3 text-gray-400 leading-relaxed">
              Frontend Developer specializing in building modern, responsive, and user-friendly web applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white transition"><a href="#home">Home</a></li>
              <li className="hover:text-white transition"><a href="#about">About</a></li>
              <li className="hover:text-white transition"><a href="#skills">Skills</a></li>
              <li className="hover:text-white transition"><a href="#projects">Projects</a></li>
              <li className="hover:text-white transition"><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-white transition">
                <FaEnvelope />sharunamk3@gmail.com
              </li>
              <li className="flex items-center gap-3 hover:text-white transition">
                <FaPhone /> +91 995844514
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex items-center gap-5">
              <a
              href="https://github.com/Sharuna-mk"
                className="text-gray-400 hover:text-white hover:scale-110 transition text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sharuna-m-k"
                className="text-gray-400 hover:text-white hover:scale-110 transition text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sharuna. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

