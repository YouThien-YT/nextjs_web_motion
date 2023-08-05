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
        <div className={`bg-none xl:bg-[url(https://lh3.googleusercontent.com/fife/AKsag4PmMldUt9s2QhOxHXzr1izTxvE1R91xshva1xukCaNcwd7Jf-OymnsAwGjE9mAP5FT4FdeKukpijnU2JZrrM6Tvb_JPA5rcRYFdu3LDm-A77bFCl5r2-oqDGLAgRxajRZYkU9SVZlb42z1vNx3uS_YSswAVdYgZwqzoG4mWVSqvxKRSKcYEKTE0uMDvavP-QY6vwHQ471870dyOhZ5qRG4M8785oRwV1VHvXf7OWe6WqV-nIJIawqu43biSLSm_odVGqNBOioXp1yIdrHEYjJuLXed3WAVNs9Eg2AUABuUSAbYOKgvtRZnfRevYlwBt8oAEyZNHmd0c1xjYyogi5dlitJig6nmQeMwBYyXDP5mdc4_N_VUW3d_Xqo6MtZJb4YITTLKPkpd_VjLDUYg6GTiYaIr2Hi-DfplOlIaPNriPTpYrN948ynTpUNlT-QkZOUxL62QZc8O1gqrvHvnCD-cUtrGZKsntsXv5u_QPYkBCTpt03xJuIQByerX5l9Rpcev8ZCPPqQjYTTBSgl9EjQDWfFjv-5iyD6a1QOkW-FguYRQjtTW1losuXThkntum-D8cLL_CQN7EKoT05Y1GR2Njw4fWc68UeAatGtFENl2srAJTLjX1bNGDxgxxgmitRSR4LVpMGx8Dswl83RJMBOIsY5jeCggIhsy04AuEo1H1Uge377GlYmMXY8Y6j2nr_Zj4MSrvhEhZlnUL9sXxL39MBQMuWYQheUafe-U30bZSAOAt5jNLNu_Hu46gTsND_lF8zazNiGz3MPUlAzvMBBHfTkIezLRSC4YQkJSVyW4B8Fwytxdx3h5PdqSlKE9lxxLqTLya1bDGI0YX6_xsTvR-VDc8gC2CXyxpED0vWIMP5C87YINvCqBakNuuZeKd9TXCz5pl-8WUmH7ZjNbQPgkMdYJ7_aheCZ3oNv270jf7ZVractU087joC-macxJ37HcbADF2ZTC-5cPVTZdSTAK_b7c_fYtEga_ZU50ZxCz_azR4vnA9mcYTyiuDL5ZBWHVPI5dSwY8jfyJKvCtKVXnwFJhkropbJX2WEHQs9iq5lgZC30EcFdGUUMUZSw_pkYmi0c3X4a_na6WlhZ3ClSIqvQ7KB5p1m4Bd5-sgjw6ZzAQxzjKpcrF5KiQHmmf_-72z-oTzLegfyvUtxbjBZoO7l4HSdYri9-hlNckJN0DXEa9MSMTqWCA42hMuKBZEa3HErOD12eU3_dIcq9abeUTUoga5pfnWF1J-k8Z-FmQJ-jy0wyd9TcE6jvb5eaPZjQ5LO6TSsKj7rPTWEEjg2mpe7ufYJUhuvPLCpVrfSifKv2WkRfBMzGMbvTy6KQinstL3I5Dkf9p11DtWklNBIGpI2PxMgK09SIV9jKW3CQMcfLvxqFPMO5U-bkGldJkzjpcN8BLcW_w94e6506oQi96sRLMlvE22Er7F02BSQ7W6yH3u6Kue6bP2k8Xmf8gEAm3POosUGiKXjtlTsbUfy8T8sCoQOVVU_fjgGTpYXHxSfE8YpBpojdp-j2eGHTppbcFE5nw9p635u1r-zAJD24H4yuYLzI8_EPtZSSu4v3MH06qDeDXPFGeu_da4NhsY8HcOJtm-Djrl=s1052-w1052-h619-s-no?authuser=0)] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 `}>
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
