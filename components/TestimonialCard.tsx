"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  testimonial: string;
  delay?: number;
}

const TestimonialCard = ({ name, company, testimonial, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:border-gold transition-all duration-300 relative"
    >
      <Quote className="text-gold opacity-20 absolute top-6 right-6" size={48} />
      <div className="relative z-10">
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">"{testimonial}"</p>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center text-white font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-black dark:text-white">{name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

