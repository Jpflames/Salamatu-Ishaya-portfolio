"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Calendar, 
  Mail, 
  Search, 
  Headphones, 
  Share2, 
  FileText,
  Briefcase,
  Award,
  Target
} from "lucide-react";

const About = () => {
  const skills = [
    { icon: MessageSquare, name: "Communication", description: "Excellent written and verbal communication skills" },
    { icon: Calendar, name: "Scheduling", description: "Expert calendar and appointment management" },
    { icon: Mail, name: "Email Handling", description: "Professional email management and correspondence" },
    { icon: Search, name: "Research", description: "Thorough research and data analysis capabilities" },
    { icon: Headphones, name: "Customer Support", description: "Dedicated customer service excellence" },
    { icon: Share2, name: "Social Media", description: "Social media management and content creation" },
    { icon: FileText, name: "Admin Support", description: "Comprehensive administrative assistance" },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Virtual Assistant",
      company: "Freelance",
      description: "Providing comprehensive virtual assistance to multiple clients across various industries, managing complex administrative tasks, and ensuring seamless business operations.",
    },
    {
      year: "2021 - 2023",
      title: "Virtual Assistant Specialist",
      company: "Various Clients",
      description: "Specialized in email management, calendar coordination, and customer support. Successfully managed multiple client portfolios with high satisfaction rates.",
    },
    {
      year: "2019 - 2021",
      title: "Administrative Assistant",
      company: "Corporate Sector",
      description: "Handled administrative duties, document preparation, data entry, and client communication. Developed strong organizational and time management skills.",
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
            About Me
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I am <span className="font-semibold text-black dark:text-white">Salamatu Ishaya</span>, a dedicated and 
            professional Virtual Assistant with a passion for helping businesses thrive through efficient 
            administrative support and exceptional service delivery.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            With years of experience in virtual assistance, I specialize in streamlining operations, 
            managing communications, and providing reliable support that allows my clients to focus on 
            what they do best. My commitment to excellence and attention to detail has made me a trusted 
            partner for businesses and entrepreneurs worldwide.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-black dark:text-white mb-4">Core Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">Expertise that drives results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700 hover:border-gold transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-2">{skill.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-black dark:text-white mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">A journey of growth and excellence</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-8 last:pb-0 border-l-2 border-gold"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gold rounded-full"></div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <span className="text-gold font-semibold text-sm">{exp.year}</span>
                <h3 className="text-xl font-semibold text-black mt-2 mb-1 font-serif">{exp.title}</h3>
                <p className="text-gray-600 mb-3">{exp.company}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-black dark:text-white mb-4">My Values</h2>
            <p className="text-gray-600 dark:text-gray-400">Principles that guide my work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Reliability", description: "Consistent, dependable service you can count on" },
              { icon: Award, title: "Excellence", description: "Commitment to delivering the highest quality work" },
              { icon: Briefcase, title: "Professionalism", description: "Maintaining the highest standards in all interactions" },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-gold" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2 font-serif">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

