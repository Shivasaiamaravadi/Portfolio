import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Code, Database, Cloud, Award } from 'lucide-react';

const About: React.FC = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      
      // Animated counters
      const projectTimer = setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current++;
          setProjectCount(current);
          if (current >= 10) clearInterval(timer);
        }, 100);
      }, 500);

      const experienceTimer = setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current++;
          setExperienceCount(current);
          if (current >= 3) clearInterval(timer);
        }, 150);
      }, 700);

      const satisfactionTimer = setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 10;
          setSatisfactionCount(current);
          if (current >= 100) clearInterval(timer);
        }, 50);
      }, 900);

      return () => {
        clearTimeout(projectTimer);
        clearTimeout(experienceTimer);
        clearTimeout(satisfactionTimer);
      };
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const skills = [
    { icon: Database, name: 'Data Engineering', level: 95 },
    { icon: Cloud, name: 'Cloud Platforms', level: 90 },
    { icon: Code, name: 'ETL/ELT Pipelines', level: 88 },
    { icon: Award, name: 'Data Analytics', level: 92 }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 lg:py-32 bg-white dark:bg-neutral-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent-100/50 dark:bg-accent-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Me</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
            >
              I am a Data Engineer passionate about designing and deploying modern, cloud-native data platforms 
              that scale. With 3+ years of hands-on experience, I specialize in AWS-based data lakehouses, 
              ETL/ELT pipelines, and real-time streaming architectures.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
            >
              My expertise extends across big data analytics, governance, and compliance—helping organizations 
              transform raw data into secure, actionable insights. By leveraging AWS, Databricks, and Snowflake, 
              I build solutions that improve performance, reliability, and decision-making.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-display font-bold text-primary-500 mb-2"
                  animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {projectCount}+
                </motion.div>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">Projects</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-display font-bold text-accent-500 mb-2"
                  animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {experienceCount}+
                </motion.div>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">Years</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-display font-bold text-muted-500 mb-2"
                  animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  {satisfactionCount}%
                </motion.div>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">{skill.name}</h3>
                  <span className="ml-auto text-sm font-medium text-neutral-500 dark:text-neutral-400">{skill.level}%</span>
                </div>
                
                <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-400 to-accent-400 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: 'easeOut' }}
                  >
                    <div className="absolute inset-0 bg-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;