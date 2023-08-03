// import '../styles/globals.css';
// import '../pages/_app.js';

// next image
import Image from "next/image";
// images
import bgExplosion from '../public/explosion.png';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          {/*title */}
          <div>
            <motion.h1  
              variants={fadeIn('down', 0.2)} 
              initial='hidden' 
              animate='show' 
              exit='hidden' 
              className="h1"
            >
              Transforming Ideas <br/> Into{' '}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>
          </div>
          {/* subtitle */}
          <div>
            <motion.p              
              variants={fadeIn('down', 0.3)} 
              initial='hidden' 
              animate='show' 
              exit='hidden' 
              className=" font-mono max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-10 "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nostrum quan reprehenderit vero, tenetur voluptatem nulla aut aspernatur dolores ut.
            </motion.p>
          </div> 
          {/* btn */}
          <div className=" z-10 flex justify-center xl:hidden relative ">
            <ProjectsBtn></ProjectsBtn>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className=" hidden xl:flex pb-28 " 
          >
            <ProjectsBtn></ProjectsBtn>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* xl:bg_img */}
        <div className={`bg-none xl:bg-[url(https://photos.app.goo.gl/LPMDy8m8J2iLmi5L8)] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 `}>
        </div>
        {/* particles */}
        <ParticlesContainer></ParticlesContainer>
        {/* xl:avatar_img */}
        <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          transition={{duration: 1, ease: 'easeInOut'}}
          className=" w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar></Avatar>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
