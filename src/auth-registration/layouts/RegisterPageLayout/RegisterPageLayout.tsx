import AppLayout from '@/global/layouts/AppLayout';
import React from 'react';

interface RegisterPageLayoutProps {
	children: React.ReactNode;
}

const RegisterPageLayout: React.FC<RegisterPageLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<AppLayout>
				<div className="mx-auto max-w-6xl">{children}</div>
			</AppLayout>
		</>
	);
};

export default RegisterPageLayout;
