import React from 'react';
import { Tab as HTab } from '@headlessui/react';
import clsx from 'clsx';

export const TabList: React.FC = ({ children }) => {
	return (
		<HTab.List className="flex p-1 space-x-1 bg-gray-800">{children}</HTab.List>
	);
};

export const Tab: React.FC = ({ children }) => {
	return (
		<HTab
			className={({ selected }) =>
				clsx(
					'w-full py-2.5 text-sm leading-5 font-medium text-blue rounded-lg',
					'focus:outline-none',
					selected
						? 'bg-gray-900 shadow'
						: 'text-cyan transition-all duration-300 hover:text-white'
				)
			}
		>
			{children}
		</HTab>
	);
};
