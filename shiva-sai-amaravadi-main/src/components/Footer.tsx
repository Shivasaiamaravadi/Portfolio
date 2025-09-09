import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Mail, Linkedin, Github, Heart } from 'lucide-react';
import * as Scroll from 'react-scroll';

const { animateScroll } = Scroll;

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shiva-sai-a-8ab6291a6',
      icon: Linkedin,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      url: 'mailto:amaravadishivasai@gmail.com',
      icon: Mail,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-primary-400 to-accent-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-neutral-950 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-600/10 to-accent-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-muted-600/10 to-secondary-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-3xl font-display font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-muted-400">
                  Shiva Sai Amaravadi
                </span>
              </h3>
              <p className="text-lg text-neutral-400">
                Data Engineer • Cloud Architect • Analytics Specialist
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center space-x-6 mb-8"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-neutral-800 rounded-full text-neutral-400 ${social.color} transition-all duration-300 hover:shadow-lg hover:bg-neutral-700`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent mb-8"
            />

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center text-neutral-400 text-sm space-y-2 sm:space-y-0 sm:space-x-4"
            >
              <div className="flex items-center">
                <span>Shiva Sai Amaravadi</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-2"
                >
                  {/* <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> */}
                </motion.div>
              </div>
              {/* <span className="hidden sm:inline">•</span> */}
              {/* <span>Built with React, TypeScript & Tailwind CSS</span> */}
            </motion.div>

            {/* Additional info */}
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-neutral-500 mt-4 max-w-2xl mx-auto"
            >
              Passionate about building scalable data platforms and turning data into actionable insights. 
              Always excited to collaborate on innovative projects that push the boundaries of what's possible with data.
            </motion.p> */}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-muted-500"></div>
      </footer>
    </>
  );
};

export default Footer;