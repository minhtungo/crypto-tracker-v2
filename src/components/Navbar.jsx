import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async (e) => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(e.message);
    }
  };

  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
      <Link to='/'>
        <h1 className='text-2xl'>Crypto Tracker</h1>
      </Link>

      {user?.email ? (
        <div className='hidden md:block'>
          <Link to='/account' className='p-4'>
            Account
          </Link>
          <button
            onClick={handleSignOut}
            className='border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl'
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className='flex items-center'>
          <div className='hidden md:block'>
            <ThemeToggle />
          </div>
          <div className='hidden md:block'>
            <Link to='/signin' className='p-4 hover:text-accent'>
              Sign In
            </Link>
            <Link
              to='/signup'
              className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      <div className='md:hidden flex flex-row items-center'>
        <div className='cursor-pointer z-10'>
          <ThemeToggle />
        </div>
        <div className='ml-1 cursor-pointer z-10' onClick={handleNav}>
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'
        }
      >
        <ul className='w-full p-4'>
          <li onClick={handleNav} className='border-b py-6'>
            <Link to='/'>Home</Link>
          </li>
          <li onClick={handleNav} className='py-6'>
            <Link to='/'>Account</Link>
          </li>
        </ul>
        {user?.email ? (
          <div className='flex flex-col w-full p-4'>
            <button
              onClick={() => {
                handleSignOut();
                handleNav();
              }}
              className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className='flex flex-col w-full p-4'>
            <Link to='/signin'>
              <button
                onClick={handleNav}
                className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'
              >
                Sign In
              </button>
            </Link>
            <Link to='/signup'>
              <button
                onClick={handleNav}
                className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
