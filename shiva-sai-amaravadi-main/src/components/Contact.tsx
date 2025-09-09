import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const contactInfo = {
    email: 'amaravadishivasai@gmail.com',
    phone: '+1 (940)-843-8137',
    location: 'Lewisville, TX',
    linkedin: 'linkedin.com/in/shiva-sai-a-8ab6291a6'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setShowConfetti(true);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setShowConfetti(false);
    }, 5000);
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50/30 dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden"
    >
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 1,
                x: Math.random() * window.innerWidth,
                y: -10,
                rotate: 0,
                scale: Math.random() * 0.8 + 0.4
              }}
              animate={{
                opacity: 0,
                y: window.innerHeight + 100,
                rotate: 360,
                transition: {
                  duration: Math.random() * 2 + 2,
                  ease: 'easeOut'
                }
              }}
              className={`absolute w-3 h-3 ${
                ['bg-primary-400', 'bg-accent-400', 'bg-muted-400', 'bg-secondary-400'][Math.floor(Math.random() * 4)]
              } rounded-full`}
            />
          ))}
        </div>
      )}

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
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Ready to collaborate on your next data engineering project? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>

        {/* Success Toast */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={showSuccess ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Message sent successfully!
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                Whether you're looking for a data engineer or want to explore cutting-edge solutions, I'd love to hear from you.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center p-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-primary-400 to-primary-500 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg font-semibold text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center p-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 hover:border-accent-300/50 dark:hover:border-accent-600/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-accent-400 to-accent-500 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                    className="text-lg font-semibold text-neutral-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group flex items-center p-4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 hover:border-muted-300/50 dark:hover:border-muted-600/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-muted-400 to-muted-500 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Location</p>
                  <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {contactInfo.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
              <motion.a
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="mailto:amaravadishivasai@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl p-8 border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xl"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-display font-bold text-neutral-900 dark:text-white mb-6"
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-200 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-400 via-accent-400 to-muted-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;