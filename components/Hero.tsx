"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 via-stone-100/30 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 pt-20 transition-colors duration-300">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-transparent"></div>
        
        {/* Minimal animated gold accents */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gold opacity-[0.06] rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gold opacity-[0.04] dark:opacity-[0.08] rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-medium"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-black dark:text-white mb-4"
            >
              SALAMATU ISHAYA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-light"
            >
              Your Reliable & Professional Virtual Assistant
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="mr-2" size={20} />
                Hire Me
              </Link>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-[3/4] rounded-2xl border-4 border-gold/30 shadow-2xl overflow-hidden relative">
                <Image
                  src="/assets/image/sally-photo.jpg"
                  alt="Salamatu Ishaya - Professional Virtual Assistant"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gold rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gold rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

