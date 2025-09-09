import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences: ExperienceItem[] = [
    {
      company: 'Micron Technology',
      role: 'Data Engineer',
      period: 'Sep 2024 – Present',
      location: 'St. Louis, MO, USA',
      responsibilities: [
        'Designed AWS Glue, Lambda, Step Functions pipelines processing 25M+ weekly healthcare/financial records, cutting latency by 50%',
        'Built Redshift + S3 data lakehouses enabling faster cross-domain insights',
        'Developed PySpark validation frameworks (Great Expectations), reducing bad records by 25%',
        'Secured data with IAM + KMS achieving HIPAA/GDPR compliance'
      ],
      technologies: ['AWS', 'Glue', 'Lambda', 'Redshift', 'S3', 'PySpark', 'Great Expectations']
    },
    {
      company: 'We Agency',
      role: 'Data Engineer',
      period: 'Jul 2021 – Aug 2023',
      location: 'Hyderabad, India',
      responsibilities: [
        'Built scalable AWS Glue + Lambda ETL workflows for 5–10 GB daily data',
        'Optimized Redshift schemas, reducing dashboard load times by 40%',
        'Developed Kafka + Kinesis streaming pipelines for 100K+ daily events',
        'Migrated 500+ GB legacy data into S3 + DynamoDB, improving analytics accuracy',
        'Designed Power BI/Tableau dashboards improving reporting by 35%'
      ],
      technologies: ['AWS', 'Kafka', 'Kinesis', 'DynamoDB', 'Power BI', 'Tableau']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50/30 dark:from-neutral-800 dark:to-neutral-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-primary-200/30 to-accent-200/30 dark:from-primary-800/20 dark:to-accent-800/20 rounded-full blur-3xl translate-x-1/2"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-muted-200/30 to-secondary-200/30 dark:from-muted-800/20 dark:to-secondary-800/20 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-muted-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full transform md:-translate-x-1/2 z-10 ${
                index % 2 === 0 ? 'md:translate-x-[-8px]' : 'md:translate-x-[8px]'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Content card */}
              <div className={`w-full md:w-1/2 ${
                index % 2 === 0 
                  ? 'ml-16 md:ml-0 md:pr-12' 
                  : 'ml-16 md:ml-0 md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
                  }}
                  className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-neutral-200/50 dark:border-neutral-700/50 group hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <Briefcase className="w-6 h-6 text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-neutral-700 dark:text-neutral-300">
                        <ChevronRight className="w-4 h-4 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200/50 dark:border-primary-700/50 hover:shadow-md transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;