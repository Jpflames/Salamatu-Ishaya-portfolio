"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MessageCircle, Mail } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("projectDetails", formData.projectDetails);
      formDataToSubmit.append("budget", formData.budget);

      const result = await submitContactForm(formDataToSubmit);
      
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", projectDetails: "", budget: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const budgetOptions = [
    "Select Budget Range",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Let's Discuss",
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
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Ready to streamline your business operations? Let's discuss how I can help you achieve 
            your goals. Fill out the form below or reach out directly via email or WhatsApp.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-serif font-bold text-black dark:text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={5}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all resize-none bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                  placeholder="Tell me about your project and how I can help..."
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white dark:bg-gray-700 text-black dark:text-white"
                >
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
                >
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
                >
                  Something went wrong. Please try again or contact me directly via email.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif font-bold text-black dark:text-white mb-6">Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Prefer to reach out directly? Use any of the contact methods below. I typically 
                respond within 24 hours during business days.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:salamatuishaya973@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:border-gold transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Mail className="text-gold group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">salamatuishaya973@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/2348132339194"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:border-gold transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <MessageCircle className="text-gold group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Chat with me on WhatsApp</p>
                </div>
              </motion.a>
            </div>

            {/* WhatsApp CTA Button */}
            <motion.a
              href="https://wa.me/2348132339194"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
            </motion.a>

            <div className="bg-gradient-to-br from-gold/10 to-gold/5 dark:from-gold/20 dark:to-gold/10 rounded-xl p-8 border border-gold/20 dark:border-gold/30">
              <h3 className="font-semibold text-black dark:text-white mb-3 font-serif">Response Time</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                I aim to respond to all inquiries within 24 hours during business days. 
                For urgent matters, please use WhatsApp for faster communication.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

