"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:border-gold transition-all duration-300 group cursor-pointer"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
          <Icon className="text-gold group-hover:text-white transition-colors duration-300" size={32} />
        </div>
        <h3 className="text-xl font-semibold text-black dark:text-white mb-4 font-serif">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

