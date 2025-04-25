import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Profile } from "../../../common/types/profile";
import { BookOpen, Calendar, Globe, Briefcase } from "lucide-react";

interface AboutProps {
  profile: Profile;
}

const About = ({ profile }: AboutProps) => {
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
        staggerChildren: 0.1,
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

  const getMonthName = (month?: number) => {
    if (!month) return "";
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[month - 1];
  };

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-white">
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-100 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
      
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
          >
            About Me
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-violet-600 rounded-full"></span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              {profile.summary}
            </p>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {profile.locationName && (
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-violet-100 rounded-lg">
                  <Globe className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                  <p className="text-gray-600">
                    {profile.locationName}
                    {profile.geoCountryName ? `, ${profile.geoCountryName}` : ""}
                  </p>
                </div>
              </motion.div>
            )}
            
            {profile.industryName && (
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Industry</h3>
                  <p className="text-gray-600">{profile.industryName}</p>
                </div>
              </motion.div>
            )}
            
            {(profile.birthMonth && profile.birthDay) && (
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Birthday</h3>
                  <p className="text-gray-600">
                    {getMonthName(profile.birthMonth)} {profile.birthDay}
                  </p>
                </div>
              </motion.div>
            )}
            
            {profile.student && (
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Education Status</h3>
                  <p className="text-gray-600">Student</p>
                </div>
              </motion.div>
            )}
          </motion.div>
          
          {profile.skills.length > 0 && (
            <motion.div variants={containerVariants}>
              <motion.h3 
                variants={itemVariants} 
                className="text-2xl font-semibold text-gray-800 mb-8 text-center"
              >
                Skills
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-3"
              >
                {profile.skills.map((skill) => (
                  <motion.span
                    key={skill.id}
                    variants={itemVariants}
                    className="px-4 py-2 bg-gradient-to-r from-violet-100 to-indigo-100 text-gray-800 rounded-full border border-violet-200 shadow-sm hover:shadow transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;