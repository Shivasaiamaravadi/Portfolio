import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

interface Certification {
  title: string;
  organization: string;
  date: string;
  verifyUrl?: string;
  logo: string;
  color: string;
}

const Certification: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications: Certification[] = [
    {
      title: 'AWS Data Analytics Specialty',
      organization: 'Coursera',
      date: '2024',
      logo: '/Certification1.jpeg',
      color: 'primary'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      organization: 'Coursera',
      date: '2023',
      logo: '/Certification2.webp',
      color: 'accent'
    },
    {
      title: 'Microsoft Power BI Data Analyst Associate',
      organization: 'LinkedIn Learning',
      date: '2023',
      logo: '/Certification3.webp',
      color: 'muted'
    },
    {
      title: 'Data Engineering with Google Cloud Professional',
      organization: 'Coursera',
      date: '2023',
      logo: '/Certification4.png',
      color: 'secondary'
    },
    {
      title: 'Tableau Data Analyst Professional Certificate',
      organization: 'Coursera',
      date: '2022',
      logo: '/Certification5.webp',
      color: 'primary'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: 'from-primary-400 to-primary-500',
        text: 'text-primary-600 dark:text-primary-400',
        border: 'border-primary-200 dark:border-primary-700',
        hover: 'hover:border-primary-300 dark:hover:border-primary-600',
        glow: 'group-hover:shadow-primary-400/20'
      },
      accent: {
        bg: 'from-accent-400 to-accent-500',
        text: 'text-accent-600 dark:text-accent-400',
        border: 'border-accent-200 dark:border-accent-700',
        hover: 'hover:border-accent-300 dark:hover:border-accent-600',
        glow: 'group-hover:shadow-accent-400/20'
      },
      muted: {
        bg: 'from-muted-400 to-muted-500',
        text: 'text-muted-600 dark:text-muted-400',
        border: 'border-muted-200 dark:border-muted-700',
        hover: 'hover:border-muted-300 dark:hover:border-muted-600',
        glow: 'group-hover:shadow-muted-400/20'
      },
      secondary: {
        bg: 'from-secondary-400 to-secondary-500',
        text: 'text-secondary-600 dark:text-secondary-400',
        border: 'border-secondary-200 dark:border-secondary-700',
        hover: 'hover:border-secondary-300 dark:hover:border-secondary-600',
        glow: 'group-hover:shadow-secondary-400/20'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      id="certification" 
      ref={ref}
      className="py-20 lg:py-32 bg-white dark:bg-neutral-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-primary-200/20 to-accent-200/20 dark:from-primary-800/10 dark:to-accent-800/10 rounded-full blur-3xl translate-x-1/2"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-muted-200/20 to-secondary-200/20 dark:from-muted-800/10 dark:to-secondary-800/10 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Continuous learning and professional development in data engineering and cloud technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => {
            const colorClasses = getColorClasses(cert.color);
            return (
              <motion.div
                key={index}
                // variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                className={`group relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border ${colorClasses.border} ${colorClasses.hover} shadow-lg hover:shadow-2xl ${colorClasses.glow} transition-all duration-500 transform-gpu perspective-1000`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Certification Badge/Logo */}
                <div className="relative h-32 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${cert.logo})` }}
                  />
                  {/* <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses.bg} opacity-80`} /> */}
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <Award className={`w-5 h-5 ${colorClasses.text}`} />
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className={`text-lg font-display font-bold ${colorClasses.text} mb-2 group-hover:scale-105 transform transition-transform duration-300`}>
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center text-neutral-600 dark:text-neutral-400 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{cert.organization}</span>
                    </div>
                    
                    {/* <div className="flex items-center text-neutral-500 dark:text-neutral-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{cert.date}</span>
                    </div> */}
                  </div>

                  {/* Verify button */}
                  {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${colorClasses.bg} text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Credential
                  </motion.button> */}
                </div>

                {/* Decorative elements */}
                <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${colorClasses.bg} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr ${colorClasses.bg} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;