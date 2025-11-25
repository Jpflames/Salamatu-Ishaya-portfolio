"use client";

import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useState } from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  delay?: number;
}

const PortfolioCard = ({ title, description, image, category, delay = 0 }: PortfolioCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -10 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gold transition-all duration-300 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-64 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gray-200 dark:from-gold/30 dark:to-gray-700 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-sm">{image}</span>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
          </div>
        </div>
        <div className="p-6">
          <span className="text-gold text-sm font-medium uppercase tracking-wide">{category}</span>
          <h3 className="text-xl font-semibold text-black dark:text-white mt-2 mb-2 font-serif">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-black dark:text-white hover:text-gold transition-colors z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
              >
                <X size={24} />
              </button>
              <div className="h-64 bg-gradient-to-br from-gold/20 to-gray-200 dark:from-gold/30 dark:to-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">{image}</span>
              </div>
            </div>
            <div className="p-8">
              <span className="text-gold text-sm font-medium uppercase tracking-wide">{category}</span>
              <h2 className="text-3xl font-semibold text-black dark:text-white mt-2 mb-4 font-serif">{title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{description}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gold hover:text-black transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;

