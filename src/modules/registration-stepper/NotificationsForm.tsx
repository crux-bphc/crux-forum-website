import React from 'react';
import ClubTag from '../../ui/ClubTag';
import Button from '../../ui/Button';

const NotificationsForm: React.FC = () => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const [selectedNotifications, setSelectedNotifications] = React.useState({
    mySubscriptions: true,
    subscribedEvents: true,
    allEvents: false,
    allPosts: false,
  });

  const onSelect = (club: string): void => {
    if (selectedTags.includes(club)) {
      setSelectedTags((tags) => tags.filter((tag) => tag !== club));
    } else {
      setSelectedTags((tags) => [...tags, club]);
    }
  };

  const toggleNotifications = (notification: string): void => {
    const keyTyped = notification as keyof typeof selectedNotifications;
    setSelectedNotifications((prev) => {
      return {
        ...prev,
        [notification]: !selectedNotifications[keyTyped],
      };
    });
  };

  return (
    <div>
      <h1 className='text-2xl sm:text-4xl md:text-5xl'>
        Tell us more about you
      </h1>
      <h3 className='text-sm sm:text-base font-normal sm:font-semibold text-gray-accent mt-3 mb-10'>
        Looks like this is your first time here, asd qwe sdf trert dfg You can
        always change this shit in the settings
      </h3>
      <h2 className='text-2xl sm:text-4xl md:text-5xl'>
        What are you intrested in?
      </h2>
      <div className='my-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
        <ClubTag
          variant='select'
          name='crux'
          color='red'
          isSelected={selectedTags.includes('crux')}
          onClick={() => onSelect('crux')}
        />
        <ClubTag
          variant='select'
          name='cultural'
          color='purple'
          isSelected={selectedTags.includes('cultural')}
          onClick={() => onSelect('cultural')}
        />
        <ClubTag
          variant='select'
          name='sangam'
          color='green'
          isSelected={selectedTags.includes('sangam')}
          onClick={() => onSelect('sangam')}
        />
        <ClubTag
          variant='select'
          name='New Club'
          color='green'
          isSelected={selectedTags.includes('New Club')}
          onClick={() => onSelect('New Club')}
        />
      </div>

      <h2 className='text-2xl sm:text-4xl md:text-5xl'>Notifications</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
        <Button
          variant={
            selectedNotifications.mySubscriptions ? 'red' : 'red-outline'
          }
          onClick={() => toggleNotifications('mySubscriptions')}
        >
          My Subscriptions
        </Button>
        <Button
          variant={
            selectedNotifications.subscribedEvents ? 'red' : 'red-outline'
          }
          onClick={() => toggleNotifications('subscribedEvents')}
        >
          Subscribed events
        </Button>
        <Button
          variant={selectedNotifications.allEvents ? 'red' : 'red-outline'}
          onClick={() => toggleNotifications('allEvents')}
        >
          All events
        </Button>
        <Button
          variant={selectedNotifications.allPosts ? 'red' : 'red-outline'}
          onClick={() => toggleNotifications('allPosts')}
        >
          All posts
        </Button>
      </div>

      <div className='flex items-center w-full my-10'>
        <input className='mr-2' type='checkbox' />
        <span className='text-xs'>
          I have read and agree to the{' '}
          <a href='/' className='text-blue underline'>
            Terms of Service
          </a>
          , the{' '}
          <a href='/' className='text-blue underline'>
            Privacy Policy
          </a>{' '}
          and the{' '}
          <a href='/' className='text-blue underline'>
            Cookie Policy
          </a>
        </span>
      </div>
      <Button className='px-12 py-3 w-full lg:w-3/5 xl:w-2/5'>
        Finish Registration!
      </Button>
    </div>
  );
};

export default NotificationsForm;
