"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  FileText,
  Mail,
  Share2,
  Headphones,
  Search,
  Plane,
  FileCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Comprehensive administrative assistance including document preparation, data entry, file organization, and general office management to keep your business running smoothly.",
    },
    {
      icon: Mail,
      title: "Email & Calendar Management",
      description: "Professional email handling, inbox organization, calendar scheduling, appointment coordination, and meeting management to optimize your time and productivity.",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, scheduling, engagement management, and analytics tracking to grow your online presence and brand awareness.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated customer service including inquiry handling, issue resolution, support ticket management, and maintaining positive customer relationships.",
    },
    {
      icon: Search,
      title: "Research & Data Entry",
      description: "Thorough research services, data collection and analysis, database management, and accurate data entry to support your business decisions and operations.",
    },
    {
      icon: Plane,
      title: "Travel Planning",
      description: "Complete travel coordination including flight bookings, hotel reservations, itinerary planning, and travel document management for seamless business trips.",
    },
    {
      icon: FileCheck,
      title: "Document Preparation",
      description: "Professional document creation, editing, formatting, proofreading, and preparation of reports, presentations, proposals, and other business documents.",
    },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-black dark:text-white mb-6">
            My Services
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Comprehensive virtual assistance services designed to streamline your operations, 
            enhance productivity, and support your business growth. Each service is tailored 
            to meet your specific needs with professionalism and efficiency.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-gradient-to-r from-black to-gray-900 dark:from-gray-800 dark:to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help streamline your business operations and support your success.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
            >
              Contact Me Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

