import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  const gradientText =
    "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent";

  return (
    <footer className="bg-gray-900 text-gray-400 ">
      <div className="container mx-auto py-12 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 px-4 md:px-6 lg:px-8">
        <div className="col-span-2 md:col-span-2 space-y-4">
          <h1 className={`text-3xl font-extrabold ${gradientText}`}>HERO.IO</h1>
          <p className="text-sm max-w-sm">
            Ready to revolutionize your workflow? Join our newsletter for
            updates, tips, and early access features.
          </p>

          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 w-full bg-gray-800 border border-gray-700 focus:ring-[#632EE3] focus:border-[#632EE3] rounded-l-lg text-sm transition-all"
            />
            <button
              type="submit"
              className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-[13px] font-semibold rounded-r-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              <FaEnvelope size={20} />
            </button>
          </div>
        </div>

        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold text-white mb-2 uppercase tracking-wider">
            Product
          </h6>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Features
          </a>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Pricing
          </a>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Get Started
          </a>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Release Notes
          </a>
        </nav>

        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold text-white mb-2 uppercase tracking-wider">
            Company
          </h6>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            About Us
          </a>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Careers
          </a>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Contact Sales
          </a>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Press Kit
          </a>
        </nav>

        <nav className="flex flex-col space-y-3">
          <h6 className="font-semibold text-white mb-2 uppercase tracking-wider">
            Support
          </h6>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            FAQ
          </a>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Terms of Service
          </a>
          <a href="/#" className="hover:text-white transition-colors text-sm">
            Privacy Policy
          </a>
        </nav>
      </div>

      <div className="container mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm px-4 md:px-6 lg:px-8">
        <aside className="mb-4 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} HERO.IO. All rights reserved.
        </aside>

        <nav className="flex space-x-6 text-2xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9F62F2] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9F62F2] transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9F62F2] transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9F62F2] transition-colors"
          >
            <SiDiscord />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
