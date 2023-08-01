// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';

// fix image
import prefix from '../prefix';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 py-4 ">
          {/* logo */}
          <Link href={'/'}>
            <Image 
<<<<<<< HEAD
              src={'/yt1.JPG'}
=======
              src={'nextjs_web_motion/yt1.JPG'}
>>>>>>> b4ee64063ade608d1de44d24f53d23bf58f66652
              width={40}
              height={30}
              alt=""
              priority={true}
              className="rounded-full">
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
