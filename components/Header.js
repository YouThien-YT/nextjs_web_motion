// next image
import Image from "next/image";
// images
import yt from '../public/yt1.JPG';

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 py-4 ">
          {/* logo */}
          <Link href={'/'}>
            <Image 
              src={yt}
              width={40}
              height={30}
              alt=""
              priority={true}
              className=" xl:ml-14 rounded-full ">
            </Image>
          </Link>
          {/* socials */}
          <Socials>
          </Socials>
        </div>
      </div>
    </header>
  );
};

export default Header;
