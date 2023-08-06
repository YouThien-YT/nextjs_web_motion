// import '../styles/globals.css';
// import '../pages/_app.js';

// next image
import Image from "next/image";

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
        <div className={`bg-none xl:bg-[url(https://lh3.googleusercontent.com/pw/AIL4fc_flXbgEjkd1tqfHvPNvurbyJBH_ZKqF46NrdHjhsRJCHng5bmKIXui7Dkq90O4Xgb4_DSMxF1NvHhbg7c2JOfGErwMvLduR2HVXLNP5CN0CgPlBZFW9pz0xZo3jTi5wem5RvTRGQLWD5nRpI1tN7aT5oenEHpVSX6Ps9M7D1wyJXGmR5QGgqslNm_iwhwS_fJ-_n4y8Ubu-T02Vm7rIKf--EfxPHH1nfJGSz6QNYEX8D_HMkS4vGe1sUp_kSkETgKUijIWux9zURaC5D1D3YRmH0trte1z6altqOdWBtt7XBETDoUQ8bjxA1U04_YEQxOpZtxYyQOaR--7A0awUZd05vHrVQENDMywir-akWKoodYq4IZUrCaVfwXYfzjzw9fkN8uSDGVZD_bTxIA9hUyjU67QlBj9UTj-jLs3P79j13kiFSbTS2QgYuM7oWdz30v0KwNqpm0GayCUqc4Kr_IYy9uuRaV9B2QAofo8mjBQ9TZ30odxhwXtIYw64lrPXof9CTYvPxzzfZa3IRHSTlzdYGD3Ro3HhaTf_7vWj_cYjRwvAIAeHhZzQ7_Si_Svxk64_ti4zqWGuwmh0Zt8XlKSMW-90O6yVD0ocl5hA8KDgbpFhhv6L3jQN9YHEJscgKOnrp289m2D19M3F6cW-1wHM9GCFebEfj3f1jzRYi2yawYCuRSvhNNt6PmyLdsoB8sQEYBlS7j32n17NHbzbwja8MtTF2icLQheC6ZH_kB6rJwR0szIdSToyOdVcc0t5FI1QBENZjWNqmjjl11XTUKlE4XvOhA3z_cy2b55lohz7eI02bnIXgL3K_Lsz8Vsh6ShHcs0wU1Rzyccmto8SKQTaXkhQX7DFgQi3S0nsFZIEnL5ZD1Z5FyiiySiLpciyf3ZHJWWPJ1aAHq7wxK-fKweAwo=w1052-h619-s-no?authuser=0)] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 `}>
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
