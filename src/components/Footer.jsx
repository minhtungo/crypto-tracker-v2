import ThemeToggle from './ThemeToggle';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaFacebookF,
  FaGit,
  FaGithub,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full md:w-[300px] py-4 mx-auto'>
      <div className='flex justify-between text-accent pb-4'>
        <AiOutlineInstagram />
        <FaTiktok />
        <FaTwitter />
        <FaFacebookF />
        <FaGithub />
      </div>
      <p className='text-center pt-4'>🐱Minh Tu Ngo🐶</p>
    </div>
  );
};
export default Footer;
