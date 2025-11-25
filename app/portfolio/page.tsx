"use client";

import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Email Management System",
      description: "Developed and implemented a comprehensive email management system for a busy executive, reducing inbox clutter by 80% and improving response times significantly.",
      image: "Email Management Dashboard",
      category: "Administrative Support",
    },
    {
      title: "Social Media Scheduling Platform",
      description: "Created and managed a complete social media content calendar and scheduling system for a growing e-commerce brand, resulting in 150% increase in engagement.",
      image: "Social Media Dashboard",
      category: "Social Media Management",
    },
    {
      title: "Customer Support Templates",
      description: "Designed professional customer support templates and response systems that improved customer satisfaction scores by 40% and reduced response time by 60%.",
      image: "Support Templates",
      category: "Customer Support",
    },
    {
      title: "Data Entry Dashboard",
      description: "Built an efficient data entry and management dashboard that streamlined operations for a real estate agency, processing 500+ listings with 99.9% accuracy.",
      image: "Data Entry Interface",
      category: "Data Management",
    },
    {
      title: "Travel Planning System",
      description: "Coordinated complex international travel arrangements for a corporate team, managing 20+ simultaneous trips with detailed itineraries and expense tracking.",
      image: "Travel Itinerary",
      category: "Travel Planning",
    },
    {
      title: "Document Management Portal",
      description: "Organized and digitized a complete document management system for a law firm, improving document retrieval time by 75% and ensuring compliance with industry standards.",
      image: "Document Portal",
      category: "Document Management",
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
            Portfolio
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Explore a selection of my work showcasing successful projects and client collaborations. 
            Each project demonstrates my commitment to excellence, attention to detail, and ability 
            to deliver results that exceed expectations.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-20 bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "200+", label: "Projects Completed" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

