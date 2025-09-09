import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Monitor, 
  Database, 
  Cloud, 
  Settings, 
  BarChart3, 
  Code,
  Server,
  Layers,
  GitBranch,
  Shield
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend & Visualization',
      color: 'primary',
      skills: [
        { name: 'Tableau', level: 95, icon: BarChart3 },
        { name: 'Power BI', level: 92, icon: Monitor },
        { name: 'Looker', level: 85, icon: BarChart3 },
        { name: 'Amazon QuickSight', level: 88, icon: Cloud }
      ]
    },
    {
      title: 'Backend & Data Engineering',
      color: 'accent',
      skills: [
        { name: 'AWS Glue', level: 95, icon: Database },
        { name: 'Lambda', level: 90, icon: Server },
        { name: 'PySpark', level: 88, icon: Code },
        { name: 'Databricks', level: 92, icon: Layers },
        { name: 'Apache Airflow', level: 85, icon: GitBranch },
        { name: 'dbt', level: 87, icon: Database }
      ]
    },
    {
      title: 'Cloud & Big Data',
      color: 'muted',
      skills: [
        { name: 'AWS (S3, EMR, Kinesis)', level: 95, icon: Cloud },
        { name: 'Snowflake', level: 90, icon: Database },
        { name: 'Azure Synapse', level: 85, icon: Cloud },
        { name: 'Google BigQuery', level: 88, icon: Database }
      ]
    },
    {
      title: 'Databases',
      color: 'secondary',
      skills: [
        { name: 'PostgreSQL', level: 92, icon: Database },
        { name: 'MySQL', level: 90, icon: Database },
        { name: 'MongoDB', level: 85, icon: Database },
        { name: 'Cassandra', level: 82, icon: Database }
      ]
    },
    {
      title: 'Programming',
      color: 'primary',
      skills: [
        { name: 'Python', level: 95, icon: Code },
        { name: 'SQL', level: 98, icon: Database },
        { name: 'R', level: 80, icon: Code },
        { name: 'Terraform', level: 85, icon: Settings }
      ]
    },
    {
      title: 'DevOps & Collaboration',
      color: 'accent',
      skills: [
        { name: 'Git', level: 90, icon: GitBranch },
        { name: 'Docker', level: 88, icon: Server },
        { name: 'Kubernetes', level: 82, icon: Settings },
        { name: 'CI/CD (GitHub Actions, Jenkins)', level: 85, icon: Shield }
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: 'from-primary-400 to-primary-500',
        text: 'text-primary-600 dark:text-primary-400',
        border: 'border-primary-200 dark:border-primary-700',
        hover: 'hover:border-primary-300 dark:hover:border-primary-600'
      },
      accent: {
        bg: 'from-accent-400 to-accent-500',
        text: 'text-accent-600 dark:text-accent-400',
        border: 'border-accent-200 dark:border-accent-700',
        hover: 'hover:border-accent-300 dark:hover:border-accent-600'
      },
      muted: {
        bg: 'from-muted-400 to-muted-500',
        text: 'text-muted-600 dark:text-muted-400',
        border: 'border-muted-200 dark:border-muted-700',
        hover: 'hover:border-muted-300 dark:hover:border-muted-600'
      },
      secondary: {
        bg: 'from-secondary-400 to-secondary-500',
        text: 'text-secondary-600 dark:text-secondary-400',
        border: 'border-secondary-200 dark:border-secondary-700',
        hover: 'hover:border-secondary-300 dark:hover:border-secondary-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section 
      id="skills" 
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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies for building scalable data solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${getColorClasses(category.color).bg} text-white shadow-lg`
                  : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white shadow-md hover:shadow-lg'
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => {
            const colorClasses = getColorClasses(skillCategories[activeCategory].color);
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
                }}
                className={`bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-6 rounded-2xl border ${colorClasses.border} ${colorClasses.hover} shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${colorClasses.bg} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <h3 className={`font-semibold ${colorClasses.text} group-hover:scale-105 transition-transform duration-300`}>
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Skill Progress Ring */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    {/* Background circle */}
                    <path
                      className="text-neutral-200 dark:text-neutral-700"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Progress circle */}
                    <motion.path
                      className={`${colorClasses.text}`}
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="100, 100"
                      initial={{ strokeDashoffset: 100 }}
                      animate={isInView ? { strokeDashoffset: 100 - skill.level } : { strokeDashoffset: 100 }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: 'easeOut' }}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-sm font-bold ${colorClasses.text}`}>
                      {isInView ? skill.level : 0}%
                    </span>
                  </div>
                </div>

                {/* Skill bar (alternative visualization) */}
                <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${colorClasses.bg} rounded-full relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: 'easeOut' }}
                  >
                    <div className="absolute inset-0 bg-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;