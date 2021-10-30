import React from 'react';
import Avatar from '../../ui/Avatar';
import DiscordIcon from '../../ui/icons/DiscordIcon';
import WhatsAppIcon from '../../ui/icons/WhatsAppIcon';
import { MailIcon } from '@heroicons/react/solid';
import ContactInfo from './ContactInfo';
import { UserType } from '../../../graphql';

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
			icon: <MailIcon className="dark:text-white h-6 w-6" />,
			label: 'Gmail',
		},
		{
			url: '#',
			icon: <WhatsAppIcon className="dark:text-white" />,
			label: 'WhatsApp',
		},
		{
			url: discord,
			icon: <DiscordIcon className="dark:text-white" />,
			label: 'Discord',
		},
	];

	return (
		<>
			<div data-testid="user-info">
				<Avatar
					src={profilePicture ? profilePicture : undefined}
					size="lg"
					className="xl:mb-8 md:mb-6"
				/>
				<h2>{name}</h2>
				<h3 className="text-cyan mb-5">{batch}</h3>
				<p className="md:mb-10 mb-4 text-sm md:text-md">{bio}</p>
				<div className="flex flex-col mb-5 items-start">
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
