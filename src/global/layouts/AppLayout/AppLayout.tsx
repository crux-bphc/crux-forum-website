import React from 'react';
import AppNavbar from '@/global/components/AppNavbar';
import useRedirect from '@/global/hooks/useRedirect';
import Spinner from '@/shared/ui/Spinner';

interface AppLayoutProps {
	children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
	const { loading } = useRedirect();

	if (loading) {
		return <Spinner variant="full-screen" />;
	}

	return (
		<>
			<AppNavbar />
			<main>{children}</main>
		</>
	);
};

export default AppLayout;
