import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = {
    degree: 'Master of Science in Data Engineering',
    school: 'University of North Texas',
    location: 'Denton, TX',
    period: 'Aug 2023 – May 2025',
    description: 'Advanced coursework in cloud-native data architectures, real-time analytics, machine learning pipelines, and distributed computing systems.',
    highlights: [
      'Cloud-Native Data Architectures',
      'Real-Time Analytics & Streaming',
      'Machine Learning Pipeline Development',
      'Distributed Computing Systems',
      'Data Governance & Ethics',
      'Advanced Database Systems'
    ]
  };

  return (
    <section 
      id="education" 
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50/30 dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-r from-primary-200/20 to-accent-200/20 dark:from-primary-800/10 dark:to-accent-800/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-l from-muted-200/20 to-secondary-200/20 dark:from-muted-800/10 dark:to-secondary-800/10 rounded-full blur-3xl translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Advanced education in data engineering with focus on modern cloud technologies and scalable systems
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ 
              scale: 1.02, 
              boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
              y: -5
            }}
            className="group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-500"
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-200/30 via-accent-200/20 to-transparent dark:from-primary-800/20 dark:via-accent-800/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-muted-200/30 via-secondary-200/20 to-transparent dark:from-muted-800/20 dark:via-secondary-800/10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700"></div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  {/* University crest placeholder */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="w-20 h-20 bg-gradient-to-br from-primary-400 via-accent-400 to-muted-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                  >
                    <GraduationCap className="w-10 h-10 text-white" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                  >
                    {education.degree}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4"
                  >
                    {education.school}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-4 mb-6 text-neutral-600 dark:text-neutral-400"
                  >
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{education.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="font-medium">{education.location}</span>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6"
                  >
                    {education.description}
                  </motion.p>
                </div>

                {/* Right Content - Highlights */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6"
                >
                  <h4 className="text-lg font-display font-bold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center">
                    <Star className="w-5 h-5 text-primary-500 mr-2" />
                    Key Coursework & Focus Areas
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {education.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-3 rounded-lg border border-primary-100 dark:border-primary-800 hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-200 cursor-default"
                      >
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Academic excellence indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 p-4 rounded-xl border border-primary-200/50 dark:border-primary-700/50"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Expected Graduation</p>
                        <p className="text-lg font-bold text-primary-600 dark:text-primary-400">May 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Focus</p>
                        <p className="text-lg font-bold text-accent-600 dark:text-accent-400">Data Engineering</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shimmer"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;