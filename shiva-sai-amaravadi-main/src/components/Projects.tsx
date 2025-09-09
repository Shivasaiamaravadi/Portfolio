import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules';
import { Eye, Github, ExternalLink, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  previewUrl?: string;
  githubUrl?: string;
  features: string[];
}

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Real-Time Flight Operations Data Platform',
      description: 'Built ingestion pipelines with Azure Data Factory, Kafka, Spark Streaming achieving 99.9% uptime.',
      longDescription: 'Comprehensive real-time data platform for flight operations with predictive analytics and monitoring dashboards.',
      image: '/project1.jpeg',
      technologies: ['Azure Data Factory', 'Kafka', 'Spark Streaming', 'Databricks', 'Power BI', 'TensorFlow'],
      features: [
        'Real-time data ingestion with 99.9% uptime',
        'Delta Tables with 40% query performance improvement',
        'ML models for delay prediction with +20% accuracy',
        'Interactive Power BI dashboards'
      ]
    },
    {
      id: 2,
      title: 'Healthcare Risk Adjustment Analytics',
      description: 'Centralized clinical & claims data into Snowflake, improving compliance reporting accuracy by 25%.',
      longDescription: 'Advanced healthcare analytics platform for risk stratification and regulatory compliance reporting.',
      image: '/project2.webp',
      technologies: ['Snowflake', 'Azure Data Factory', 'Talend', 'PySpark', 'Tableau', 'Python'],
      features: [
        'Automated STAR ratings calculation',
        '25% improvement in reporting cycles',
        'Advanced risk stratification algorithms',
        'Compliance-ready Tableau dashboards'
      ]
    },
    {
      id: 3,
      title: 'AWS Data Lakehouse Architecture',
      description: 'Scalable AWS Glue + Lambda ETL workflows processing 5-10 GB daily with optimized performance.',
      longDescription: 'Modern data lakehouse built on AWS with automated ETL pipelines and real-time analytics capabilities.',
      image: '/project3.webp',
      technologies: ['AWS Glue', 'Lambda', 'Redshift', 'S3', 'Kinesis', 'QuickSight'],
      features: [
        'Scalable ETL workflows for 5-10 GB daily processing',
        '40% reduction in dashboard load times',
        'Real-time streaming with Kinesis',
        'Cost-optimized S3 data storage'
      ]
    },
    {
      id: 4,
      title: 'Multi-Cloud Data Migration Platform',
      description: 'Migrated 500+ GB legacy data into modern cloud architecture improving analytics accuracy.',
      longDescription: 'Enterprise-grade data migration platform with automated validation and monitoring capabilities.',
      image: '/project4.webp',
      technologies: ['AWS', 'DynamoDB', 'Python', 'Apache Airflow', 'Great Expectations'],
      features: [
        '500+ GB legacy data migration',
        'Automated data validation frameworks',
        'Zero-downtime migration strategy',
        'Comprehensive monitoring and alerting'
      ]
    },
    {
      id: 5,
      title: 'Real-Time Streaming Analytics Engine',
      description: 'Kafka + Kinesis streaming pipelines processing 100K+ daily events with sub-second latency.',
      longDescription: 'High-performance streaming analytics engine for real-time business intelligence and monitoring.',
      image: '/Data-analytics.jpg',
      technologies: ['Kafka', 'Kinesis', 'Spark Streaming', 'Redis', 'Grafana'],
      features: [
        '100K+ daily events processing',
        'Sub-second latency performance',
        'Real-time alerting system',
        'Interactive monitoring dashboards'
      ]
    },
    {
      id: 6,
      title: 'Advanced BI Dashboard Suite',
      description: 'Power BI/Tableau dashboards with 35% improvement in reporting efficiency and user adoption.',
      longDescription: 'Comprehensive business intelligence platform with interactive dashboards and self-service analytics.',
      image: '/project6.jpeg',
      technologies: ['Power BI', 'Tableau', 'SQL Server', 'DAX', 'Python', 'R'],
      features: [
        '35% improvement in reporting efficiency',
        'Self-service analytics capabilities',
        'Mobile-responsive dashboard design',
        'Automated report generation'
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 lg:py-32 bg-white dark:bg-neutral-900 relative overflow-hidden"
    >
      {/* Parallax background stripes */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-accent-400 to-muted-500 transform -skew-y-1"></div>
        <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-muted-500 via-primary-400 to-accent-400 transform skew-y-1"></div>
        <div className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-accent-400 via-muted-500 to-primary-400 transform -skew-y-1"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-accent-400 to-muted-500 transform skew-y-1"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover my latest work in data engineering, cloud architecture, and analytics platforms
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Parallax, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            parallax={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="group bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-neutral-700/50 hover:shadow-2xl hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
                    
                   
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4 space-y-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                          <ArrowRight className="w-3 h-3 mr-2 text-primary-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                   
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              className="swiper-button-prev-custom p-3 bg-white dark:bg-neutral-800 rounded-full shadow-lg text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-xl transition-all duration-200"
              aria-label="Previous project"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              className="swiper-button-next-custom p-3 bg-white dark:bg-neutral-800 rounded-full shadow-lg text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-xl transition-all duration-200"
              aria-label="Next project"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;