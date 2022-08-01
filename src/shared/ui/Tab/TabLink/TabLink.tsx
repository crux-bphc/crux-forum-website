import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';

interface TabLinkProps {
	children: React.ReactNode;
}

const TabLink: React.FC<TabLinkProps> = ({ children }) => {
	return (
		<>
			<Tab
				className={({ selected }) =>
					clsx(
						'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-500',
						'focus:outline-none',
						selected
							? 'bg-gray-900 shadow'
							: 'text-teal-500 transition-all duration-300 hover:text-white'
					)
				}
			>
				{children}
			</Tab>
		</>
	);
};

export default TabLink;
