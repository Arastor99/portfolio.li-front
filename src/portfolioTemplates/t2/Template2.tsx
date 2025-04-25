import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Profile } from "../../common/types/profile";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


interface PortfolioProps {
  profile: Profile;
}

const Portfolio2 = ({ profile }: PortfolioProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Hero profile={profile} />
      {profile.summary && <About profile={profile} />}
      {profile.experiences?.length > 0 && <Experience profile={profile} />}
      {profile.education?.length > 0 && <Education profile={profile} />}
      {profile.projects?.length > 0 && <Projects profile={profile} />}
      <Contact profile={profile} />
      <Footer profile={profile} />
    </motion.div>
  );
};

export default Portfolio2;