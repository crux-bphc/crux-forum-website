import Link from 'next/link';
import * as React from 'react';
import { Menu, Transition } from '@headlessui/react';
import Avatar from '../../ui/Avatar';
import IconButton from '../../ui/IconButton';
import { BellIcon, CogIcon } from '@heroicons/react/outline';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <header className='px-4 md:px-8 bg-gray-900 z-20 flex items-center justify-between sticky top-0'>
        <Link href='/'>
          <a className='text-lg font-semibold'>
            cruX <span className='text-cyan'>Forum</span>
          </a>
        </Link>

        <nav className='flex items-center gap-2'>
          <Link href='/settings' passHref>
            <IconButton className='text-cyan' aria-label='Settings'>
              <CogIcon className='h-7 w-7' />
            </IconButton>
          </Link>

          <Link href='/notifications'>
            <IconButton className='text-cyan' aria-label='Notifications'>
              <BellIcon className='h-7 w-7' />
            </IconButton>
          </Link>

          <Menu
            as='div'
            className='relative inline-block text-left ring-transparent ring-0'
          >
            <div>
              <Menu.Button>
                <Avatar size='xs' />
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-gray-800 divide-y divide-white rounded-md shadow-lg focus:outline-none'>
                <div className='px-1 py-1 '>
                  <Menu.Item>
                    <Link href='/profile/users/me'>
                      <a
                        className={`flex rounded-md items-center w-full px-2 py-2 text-sm text-white`}
                      >
                        My Profile
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href='/'>
                      <a
                        className={`flex rounded-md items-center w-full px-2 py-2 text-sm text-red`}
                      >
                        Logout
                      </a>
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
