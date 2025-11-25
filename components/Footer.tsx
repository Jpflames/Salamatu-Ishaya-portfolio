"use client";

import Link from "next/link";
import { Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/ishaya-salamatu-299a35346", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-black text-white py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">
              SALAMATU ISHAYA
            </h3>
            <p className="text-gray-400 text-sm">
              Your Reliable & Professional Virtual Assistant
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact</h4>
            <a
              href="mailto:salamatuishaya973@gmail.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors text-sm mb-4"
            >
              <Mail size={18} />
              <span>salamatuishaya973@gmail.com</span>
            </a>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-gold transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Salamatu Ishaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

