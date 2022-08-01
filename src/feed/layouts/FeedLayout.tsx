import React from 'react';
import AppLayout from '@/global/layouts/AppLayout';
import LeftSidebar from '../components/LeftSidebar';

import { Tab } from '@headlessui/react';
import RightSidebar from '../components/RightSidebar';
import TabList from '@/shared/ui/Tab/TabList';
import TabLink from '@/shared/ui/Tab/TabLink';

const FeedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	React.useEffect(() => {
		document.documentElement.style.setProperty('--scroll-width', 'none');

		return function () {
			document.documentElement.style.setProperty('--scroll-width', 'auto');
		};
	}, []);

	return (
		<>
			<AppLayout>
				<div className="grid grid-cols-12">
					{/* left sidebar */}
					<div className="col-start-1 hidden h-full w-full md:col-end-5 lg:block xl:col-end-4">
						<div className="stick-to-header">
							<LeftSidebar />
						</div>
					</div>

					{/* content */}
					<div className="col-start-1 col-end-13 lg:col-start-5 lg:col-end-13 xl:col-start-4 xl:col-end-11">
						<div className="hidden lg:block">{children}</div>

						<div className="lg:hidden">
							<Tab.Group defaultIndex={1}>
								<TabList>
									<TabLink>Events</TabLink>
									<TabLink>Feed</TabLink>
									<TabLink>Explore</TabLink>
								</TabList>
								<Tab.Panels>
									<div className="w-full md:mx-auto md:w-5/6">
										<Tab.Panel>
											<LeftSidebar />
										</Tab.Panel>

										<Tab.Panel>{children}</Tab.Panel>

										<Tab.Panel>
											<RightSidebar />
										</Tab.Panel>
									</div>
								</Tab.Panels>
							</Tab.Group>
						</div>
					</div>

					{/* right sidebar */}
					<div className="col-end-13 hidden h-full w-full xl:col-start-11 xl:block">
						<div className="stick-to-header">
							<RightSidebar />
						</div>
					</div>
				</div>
			</AppLayout>
		</>
	);
};

export default FeedLayout;
