
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Profile } from "../../../common/types/profile";
import { Calendar, ExternalLink } from "lucide-react";

interface ProjectsProps {
  profile: Profile;
}

const Projects = ({ profile }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  
  const formatDate = (date?: Date) => {
    if (!date) return "";
    const d = new Date(date);
    return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(d);
  };
  
  const getDateRange = (start?: Date, end?: Date) => {
    if (!start) return "";
    const startFormatted = formatDate(start);
    const endFormatted = end ? formatDate(end) : "Present";
    return `${startFormatted} - ${endFormatted}`;
  };
  
  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
          >
            Projects
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-violet-600 rounded-full"></span>
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {profile.projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="h-60 bg-gradient-to-br from-indigo-200 to-purple-300 overflow-hidden">
                  {project.importedImage ? (
                    <img 
                      src={project.importedImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white text-xl font-medium">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/20 to-violet-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    
                    {project.startDate && (
                      <div className="flex items-center gap-1 mb-2 text-white/90 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{getDateRange(project.startDate, project.endDate)}</span>
                      </div>
                    )}
                    
                    {project.description && (
                      <p className="text-white/90 line-clamp-3">{project.description}</p>
                    )}
                    
                    <motion.button
                      className="mt-4 flex items-center gap-1 px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium backdrop-blur-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Regular Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white transform translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  
                  {project.startDate && (
                    <div className="text-gray-500 text-sm mt-1">
                      {getDateRange(project.startDate, project.endDate)}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;