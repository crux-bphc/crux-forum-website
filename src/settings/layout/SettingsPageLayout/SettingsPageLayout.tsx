import AppLayout from '@/global/layouts/AppLayout';
import React from 'react';

interface SettingsPageLayoutProps {
	children: React.ReactNode;
}

const SettingsPageLayout: React.FC<SettingsPageLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<AppLayout>
				<div className="mx-auto max-w-5xl py-5 px-5 lg:px-0">{children}</div>
			</AppLayout>
		</>
	);
};

export default SettingsPageLayout;
