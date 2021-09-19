import React from 'react';
import Avatar from '../../ui/Avatar';
import DiscordIcon from '../../ui/icons/DiscordIcon';
import WhatsAppIcon from '../../ui/icons/WhatsAppIcon';
import { MailIcon } from '@heroicons/react/solid';
import ContactInfo from './ContactInfo';

interface UserInfoProps {}

const CONTACT_INFO = [
  {
    url: '#',
    icon: <MailIcon className='dark:text-white h-6 w-6' />,
    label: 'Gmail',
  },
  {
    url: '#',
    icon: <WhatsAppIcon className='dark:text-white' />,
    label: 'WhatsApp',
  },
  {
    url: '#',
    icon: <DiscordIcon className='dark:text-white' />,
    label: 'Discord',
  },
];

const UserInfo: React.FC<UserInfoProps> = ({}) => {
  return (
    <>
      <div>
        <Avatar size='lg' className='xl:mb-8 md:mb-6' />
        <h2>John Smith</h2>
        <h3 className='text-cyan mb-5'>2019</h3>
        <p className='md:mb-10 mb-4 text-sm md:text-md'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sint
          laborum, nam ab quas illum soluta explicabo numquam excepturi atque
          magni, provident rem porro a consectetur. Natus voluptate praesentium,
          eum commodi rem odit. Vel voluptas facere odit voluptatem debitis
          alias.
        </p>
        <div className='flex flex-col mb-5 items-start'>
          <div className='md:mb-6'>
            {CONTACT_INFO.map(({ url, icon, label }) => (
              <ContactInfo key={label} {...{ icon, label, url }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
