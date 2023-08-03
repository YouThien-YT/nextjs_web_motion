// next image
import Image from "next/image";
// images
import roundedText from '../public/rounded-text.png';

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";


const ProjectsBtn = () => {
  return (
    <div className=" flex mx-auto xl:mx-0 xl:pt-100 ">
      <Link 
        href={'/work'} 
        className="relative w-[150px] h-[150px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group  ">
        <Image 
          src={roundedText} 
          width={140} height={150} 
          alt="" 
          className="animate-spin-slow w-full h-full max-w-[130px] max-h-[130px] " ></Image>
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 "></HiArrowRight>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
