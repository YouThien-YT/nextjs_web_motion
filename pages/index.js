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
        <div className={`bg-none xl:bg-[url(https://lh3.googleusercontent.com/pw/AIL4fc9O158sieHWQfYizrYLaNh87EABIwyJ2Q8_M_ij4XyWpjT7B8emAgxjCIAw5ONuLcw3I1x9VBjMqyURvXSZyb8IOD-gwlND0pfCtjAYZLpnUCE2DjzFI92qhkaI0mTbD_org8tqEbhAcEpNQLO6YbHbOxVEJN1wBSBMOZLMgXnsyEpq_qGxHG14WL5yZb2kFncizmQzhTibnn9lnl8t9G6y-dJuJVTImfY4oqSwiIs-i4acqHjuTRspzTdLBnAzFilQtVcVB70kPB5hBJsmrY0BzSJzHw_x22nqdZtDpqLmpjZg0sA0molLjaRfRZiMm1g3XFz-Mn1vEN0LxASylqruqEf3wGaBE7PV7ml15S_wKrcRpZQHVUVEg9OngO52-ATu1KH2od1uJcaTEhKBBm0r3mIov09z-wthBH6kImhndX6rwsjr20lX387hbhpEBsLYeMmyzW4rdK9sqaqISiVtzsjYZqxV8pxBlaOD7v6YzksAe9HIp5Th1hSw9kitRNG-k7Gy9NuERM4_Kun_qJJZDgd75plBcYwVyeiK7PV6KjBtvX93PpN-vRNGRalIuA3GlS8dXJlChumSpBCiMNfUrqdseqtYvZoc9izYR0o-xnNwR7XfYt-hRXCEc5EvHvUR-eniyX0QJF3J68PIATO5GXwHpTE6pFpwADqQ3jlFI6z0yOrX_InL92CisocKv_9inoIOH_NivAiEWLT8Qth9U8QbsDEskQPhfyb3l9Cf_J7uFbU-UV3RrUG9jVDoU-9yymblmx1TUoTHOAO3b1sQ_e-fqkOraZ7vfr6J48_xD6D4U0D1HDj2Y0mnsu9KrVaIfWeguzR0zmpchWo4Pgk7kB1-lKMclymdgZixkfOFfb5mJdv5WSAL1DQqrT0IjFX-et5aI4H78oggYH1fUd39EHo=w1052-h619-s-no?authuser=0)] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 `}>
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
