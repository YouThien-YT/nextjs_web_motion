// next image
import Image from "next/image";
// images
import circles from '../public/circles.png';

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-0 -bottom-4  mix-blend-color-dodge animate-pulse duration-75 z-10 ">
      <Image
        src={circles}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      ></Image> 
    </div>
  ) ;
};

export default Circles;
