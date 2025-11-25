"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-gray-900 shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl sm:text-2xl font-serif font-bold text-gold hover:text-black dark:hover:text-white transition-colors"
            >
              SALAMATU ISHAYA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black dark:text-white hover:text-gold transition-colors font-medium text-sm uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="text-gold" size={20} />
                ) : (
                  <Moon className="text-black" size={20} />
                )}
              </button>
            </div>

            {/* Mobile Menu Button & Dark Mode Toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="text-gold" size={20} />
                ) : (
                  <Moon className="text-black dark:text-white" size={20} />
                )}
              </button>
              <button
                className="text-black dark:text-white focus:outline-none p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden"
            />
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-serif font-bold text-gold">
                    Menu
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="text-black dark:text-white" size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-black dark:text-white hover:bg-gold/10 dark:hover:bg-gold/20 hover:text-gold rounded-lg transition-all font-medium text-base"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    © {new Date().getFullYear()} Salamatu Ishaya
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
