// next image
import Image from "next/image";

// images
import avatar from '../public/avatar.png'

const Avatar = () => {
  return (  
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
<<<<<<< HEAD
       src={avatar}
=======
       src={'nextjs_web_motion/avatar.png'}
>>>>>>> b4ee64063ade608d1de44d24f53d23bf58f66652
       width={737}
       height={678}
       alt=""
       className="translate-z-0 w-full h-full"></Image>
    </div>
  ); 
};

export default Avatar;
