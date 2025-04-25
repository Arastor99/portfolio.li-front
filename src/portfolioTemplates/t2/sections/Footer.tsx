import { motion } from "framer-motion";
import { Profile } from "../../../common/types/profile";
import { Heart } from "lucide-react";

interface FooterProps {
  profile: Profile;
}

const Footer = ({ profile }: FooterProps) => {
  const fullName = `${profile.firstName} ${profile.lastName}`;
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  const iconVariants = {
    hidden: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <footer className="bg-violet-50 py-8 px-4">
      <motion.div
        className="container mx-auto flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold text-gray-800">{fullName}</h3>
          {profile.headline && (
            <p className="text-violet-600 text-sm">{profile.headline}</p>
          )}
        </div>
        
        <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent mb-6"></div>
        
        <div className="flex items-center justify-center text-sm text-gray-600 gap-1 mb-4">
          <span>Made with</span>
          <motion.div variants={iconVariants} initial="hidden" animate="animate">
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </motion.div>
          <span>by {fullName}</span>
        </div>
        
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;