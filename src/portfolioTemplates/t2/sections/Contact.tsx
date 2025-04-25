import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Profile } from "../../../common/types/profile";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, Send } from "lucide-react";

interface ContactProps {
  profile: Profile;
}

const Contact = ({ profile }: ContactProps) => {
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  // Mock social links (would be replaced with real data from profile in a real implementation)
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />, 
      color: "bg-[#0077B5]/10 text-[#0077B5]",
      hoverColor: "hover:bg-[#0077B5] hover:text-white"
    },
    { 
      name: "Twitter", 
      icon: <Twitter className="w-5 h-5" />, 
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
      hoverColor: "hover:bg-[#1DA1F2] hover:text-white"
    },
    { 
      name: "GitHub", 
      icon: <Github className="w-5 h-5" />, 
      color: "bg-[#333]/10 text-[#333]",
      hoverColor: "hover:bg-[#333] hover:text-white"
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="w-5 h-5" />, 
      color: "bg-[#E1306C]/10 text-[#E1306C]",
      hoverColor: "hover:bg-[#E1306C] hover:text-white"
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-violet-50 relative">
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-violet-100/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
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
            Get In Touch
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-violet-600 rounded-full"></span>
          </motion.h2>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out if you have any questions or just want to connect. I'm always open to discussing new projects, opportunities, and ideas.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-5"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="p-3 bg-violet-100 rounded-full text-violet-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-medium">Location</h4>
                    <p className="text-gray-600">
                      {profile.locationName || "Remote"}, {profile.geoCountryName || ""}
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-5"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-medium">Email</h4>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-5"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="p-3 bg-pink-100 rounded-full text-pink-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <div className="mt-8">
                  <h4 className="text-gray-800 font-medium mb-3">Social Profiles</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        className={`p-3 rounded-full ${link.color} ${link.hoverColor} transition-colors duration-300`}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-500/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-500/20 transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-violet-500 focus:ring focus:ring-violet-500/20 transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <motion.button
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg shadow-violet-500/20 inline-flex items-center gap-2 transition-all duration-300"
                  type="button"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;