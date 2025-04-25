import { motion } from "framer-motion";
import { Profile } from "../../../common/types/profile";
import { MapPin } from "lucide-react";
import ImgProxy from "@components/ui/ImgProxy";

interface HeroProps {
  profile: Profile;
}

const Hero = ({ profile }: HeroProps) => {
  const fullName = `${profile.firstName} ${profile.lastName}`;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
  
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };
  
  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      {/* Decorative blurred gradients */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-indigo-300/20 blur-3xl"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-violet-400/20 blur-3xl"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      />
      
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.span variants={itemVariants} className="inline-block text-violet-600 font-medium mb-4">
              {profile.headline || "Welcome to my portfolio"}
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-violet-900 mb-6"
            >
              {fullName}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0"
            >
             
            </motion.p>
            
            {profile.locationName && (
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 mb-8"
              >
                <MapPin className="w-5 h-5 text-violet-500" />
                <span>{profile.locationName}</span>
                {profile.geoCountryName && `, ${profile.geoCountryName}`}
              </motion.div>
            )}
            
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-full shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 transform hover:translate-y-[-2px] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-white text-gray-800 border border-gray-200 font-medium rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-indigo-600/20 rounded-full blur-2xl transform scale-110" />
              <motion.div 
                className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white overflow-hidden shadow-2xl relative z-10"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {profile.profilePictureUrl ? (
                  <ImgProxy
                  src={profile.profilePictureUrl}
                  alt="Profile picture"
                  css="absolute inset-0 w-full h-full object-cover z-10"
              />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-violet-400 to-indigo-600 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {profile.firstName.charAt(0)}
                      {profile.lastName.charAt(0)}
                    </span>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;