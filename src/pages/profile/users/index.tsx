import { useRouter } from 'next/dist/client/router';
import React from 'react';

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = ({}) => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace('/profile/users/me');
  }, [router]);

  return <></>;
};

export default UserProfile;
