import React from 'react';
import { Tab as HTab } from '@headlessui/react';

interface TabListProps {
	children: React.ReactNode;
}

const TabList: React.FC<TabListProps> = ({ children }) => {
	return (
		<HTab.List className="flex space-x-1 bg-gray-800 p-1">{children}</HTab.List>
	);
};

export default TabList;
