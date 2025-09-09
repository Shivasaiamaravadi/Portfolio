import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye } from 'lucide-react';
import * as Scroll from 'react-scroll';

const { scroller } = Scroll;

const Hero: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = ['AWS', 'Databricks', 'Snowflake', 'Big Data'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    scroller.scrollTo('projects', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80
    });
  };

  const scrollToAbout = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-primary-50 to-muted-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200/30 dark:bg-accent-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-muted-200/30 dark:bg-muted-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-lg md:text-xl font-medium text-muted-600 dark:text-muted-400 mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-neutral-900 dark:text-white leading-tight">
                Shiva Sai
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-muted-500">
                  Amaravadi
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 h-16 md:h-20 flex items-center justify-center lg:justify-start"
            >
              <h3 className="text-xl md:text-3xl font-display font-bold text-neutral-700 dark:text-neutral-300">
                Building Scalable Data Platforms with{' '}
                <motion.span
                  key={currentTech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400"
                >
                  {technologies[currentTech]}
                </motion.span>
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-2xl"
            >
              Results-driven Data Engineer with 3+ years of experience designing cloud-native platforms, 
              real-time pipelines, and analytics solutions. Specialized in AWS, Databricks, and Snowflake 
              with strong focus on performance, compliance, and developer experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(212, 165, 116, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Eye className="mr-2" size={20} />
                View Projects
              </motion.button>
              
              <motion.a
                href=".\RESUME_SHIVA SAI AMARAVADI.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(90, 90, 90, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border-2 border-neutral-200 dark:border-neutral-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-muted-500/20 rounded-3xl blur-2xl transform rotate-6 scale-110"></div>
              
              {/* Profile photo placeholder */}
              <div className="relative w-80 h-96 md:w-96 md:h-auto bg-gradient-to-br from-primary-200 via-accent-200 to-muted-200 dark:from-primary-800 dark:via-accent-800 dark:to-muted-800 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-display font-bold text-xl">Data Engineer</div>
                  <div className="text-white/80 text-sm">Cloud • Analytics • ML</div>
                </div>
                
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/shiva_image.png"
                    alt="Professional headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: 5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-400 hover:text-primary-400 transition-colors duration-300"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
