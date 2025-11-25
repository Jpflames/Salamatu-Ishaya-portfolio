"use client";

import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "CEO, TechStart Inc.",
      testimonial: "Salamatu has been an invaluable asset to our team. Her attention to detail, professionalism, and ability to handle multiple tasks simultaneously is remarkable. She's transformed how we manage our administrative tasks, and I couldn't recommend her more highly.",
    },
    {
      name: "Michael Chen",
      company: "Founder, Digital Solutions",
      testimonial: "Working with Salamatu has been a game-changer for my business. Her email management skills and customer support expertise have significantly improved our client relationships. She's reliable, proactive, and always goes above and beyond.",
    },
    {
      name: "Emily Rodriguez",
      company: "Marketing Director, BrandCo",
      testimonial: "Salamatu's social media management has helped us grow our online presence tremendously. Her content creation and scheduling strategies are top-notch. She understands our brand voice perfectly and consistently delivers exceptional work.",
    },
    {
      name: "David Thompson",
      company: "Business Consultant",
      testimonial: "I've worked with many virtual assistants, but Salamatu stands out. Her research capabilities, document preparation, and organizational skills are outstanding. She's become an essential part of my business operations, and I trust her completely.",
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
            Client Testimonials
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say about working with me. 
            Their success stories reflect my commitment to delivering exceptional virtual assistance services.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black dark:text-white mb-4">
              Ready to Experience Exceptional Service?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the list of satisfied clients who have transformed their business operations with my virtual assistance services.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gold hover:text-black transition-colors shadow-lg"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

