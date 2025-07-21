import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Github,
  Linkedin,
  MessageCircle,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between h-25">
          {/* Logo - Left */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="Robotics Collective Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <Image
                src="/logotext.svg"
                alt="Robotics Collective Text Logo"
                width={140}
                height={42}
                className="hidden md:block h-10 w-auto ml-4"
              />
            </Link>
          </div>

          {/* Navigation - Right */}
          <div className="text-right">
            <ul className="space-y-2 mt-2">
              <li>
                <Link
                  href="/about"
                  className="text-4xl hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-4xl hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/meetup"
                  className="text-4xl hover:text-white transition-colors"
                >
                  Meetup
                </Link>
              </li>
              <li>
                <Link
                  href="/positions"
                  className="text-4xl hover:text-white transition-colors"
                >
                  Positions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons - Bottom Left */}
          <div className="flex space-x-3 mb-4 md:mb-0">
            <a
              href="https://x.com/robocollectiv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/roboticscollective/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/openroboticmetaverse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/roboticscollective/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Robotics Collective | All rights
            reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/imprint"
              className="text-sm hover:text-white transition-colors"
            >
              Imprint
            </Link>

            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              Powered by Netlify
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
