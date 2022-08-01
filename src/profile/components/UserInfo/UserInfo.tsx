import React from 'react';
import { HiMail } from 'react-icons/hi';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaDiscord } from 'react-icons/fa';
import ContactInfo from '@/profile/components/ContactInfo';
import { UserType } from '@/graphql/generated';
import Avatar from '@/shared/ui/Avatar';

interface UserInfoProps {
	user: Pick<
		UserType,
		'name' | 'batch' | 'bio' | 'discord' | 'email' | 'profilePicture'
	>;
}

const UserInfo: React.FC<UserInfoProps> = ({
	user: { name, batch, bio, email, discord, profilePicture },
}) => {
	const CONTACT_INFO = [
		{
			url: email,
			icon: <HiMail className="h-6 w-6 dark:text-white" />,
			label: 'Gmail',
		},
		{
			url: '#',
			icon: <RiWhatsappLine className="h-6 w-6 dark:text-white" />,
			label: 'WhatsApp',
		},
		{
			url: discord,
			icon: <FaDiscord className="h-6 w-6 dark:text-white" />,
			label: 'Discord',
		},
	];

	return (
		<>
			<div data-testid="user-info">
				<Avatar
					src={profilePicture ? profilePicture : undefined}
					size="large"
				/>
				<h2 className="mt-5 mb-3 text-2xl font-bold">{name}</h2>
				<h3 className="mb-5 text-teal-500">{batch}</h3>
				<p className="md:text-md mb-4 text-sm md:mb-10">{bio}</p>
				<div className="mb-5 flex flex-col items-start">
					<div className="md:mb-6">
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
