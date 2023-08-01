// next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge  w-[250px] md:w-[450px] opacity-70 ">
    {/* <Image className="flex-col absolute left-0 top-0" src={'/naruto.png'} width={400} height={400} alt=""/> */}
    <Image src={'/top-left-img.png'} width={400} height={400} alt=""/>
    </div>
  );
};

export default TopLeftImg;
