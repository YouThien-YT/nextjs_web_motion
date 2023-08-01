// next image
import Image from "next/image";

// images
import avatar from '../public/avatar.png'

const Avatar = () => {
  return (  
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
       src={avatar}
       width={737}
       height={678}
       alt=""
       className="translate-z-0 w-full h-full"></Image>
    </div>
  ); 
};

export default Avatar;
