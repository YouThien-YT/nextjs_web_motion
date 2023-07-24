//  links
import Link from "next/link";

//  icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300" >
        <RiYoutubeLine></RiYoutubeLine>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" >
        <RiInstagramLine></RiInstagramLine>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" >
        <RiFacebookLine></RiFacebookLine>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" >
        <RiDribbbleLine></RiDribbbleLine>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" >
        <RiBehanceLine></RiBehanceLine>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" >
        <RiPinterestLine></RiPinterestLine>
      </Link>
    </div>
  );
};

export default Socials;
