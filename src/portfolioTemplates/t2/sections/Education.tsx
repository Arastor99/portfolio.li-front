import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Profile } from "../../../common/types/profile";
import { Calendar, GraduationCap } from "lucide-react";

interface EducationProps {
  profile: Profile;
}

const Education = ({ profile }: EducationProps) => {
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
        staggerChildren: 0.15,
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

  return (
    <section id="education" className="py-24 px-4 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      
      <div className="container mx-auto relative z-10">
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
            Education
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-violet-600 rounded-full"></span>
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {profile.education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="bg-gradient-to-t from-white to-violet-50 rounded-2xl border border-violet-100/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -8 }}
              >
                <div className="h-6 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    {edu.schoolLogoUrl ? (
                      <div className="w-16 h-16 rounded-lg bg-white p-2 border border-gray-100 shadow-sm overflow-hidden">
                        <img 
                          src={edu.schoolLogoUrl} 
                          alt={`${edu.schoolName} logo`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg bg-violet-100 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-violet-600" />
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {edu.startYear} - {edu.endYear || "Present"}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {edu.schoolName}
                  </h3>
                  
                  {edu.degreeName && (
                    <h4 className="text-lg font-medium text-violet-700 mb-2">
                      {edu.degreeName}
                      {edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}
                    </h4>
                  )}
                  
                  {edu.grade && (
                    <p className="text-gray-600 mb-3">
                      <span className="font-semibold">Grade:</span> {edu.grade}
                    </p>
                  )}
                  
                  {edu.description && (
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                  
                  {edu.activities && (
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-1">Activities:</h5>
                      <p className="text-gray-600 text-sm">{edu.activities}</p>
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

export default Education;