import React from 'react';
import Link from '@/shared/ui/Link';

interface ContactInfoProps {
	icon: React.ReactNode;
	url: string;
	label: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, url, label }) => {
	return (
		<>
			<div className="mb-4 flex items-center gap-3">
				<div>{icon}</div>
				<div>
					<Link href={url}>{label}</Link>
				</div>
			</div>
		</>
	);
};

export default ContactInfo;
