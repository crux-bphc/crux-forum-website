import React from 'react';
import AppLayout from './AppLayout';
import LeftSideBar from '../sidebars/LeftSideBar';
import RightSideBar from '../sidebars/RightSideBar';
import { Tab as HTab } from '@headlessui/react';
import { Tab, TabList } from '../../ui/Tab';

const FeedLayout: React.FC<any> = ({ children }) => {
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
					<div className="col-start-1 md:col-end-5 xl:col-end-4 w-full h-full hidden lg:block">
						<div className="stick-to-header">
							<LeftSideBar />
						</div>
					</div>

					{/* content */}
					<div className="col-start-1 col-end-13 xl:col-start-4 lg:col-start-5 lg:col-end-13 xl:col-end-11">
						<div className="hidden lg:block">{children}</div>

						<div className="lg:hidden">
							<HTab.Group defaultIndex={1}>
								<TabList>
									<Tab>Events</Tab>
									<Tab>Feed</Tab>
									<Tab>Explore</Tab>
								</TabList>
								<HTab.Panels>
									<div className="md:w-5/6 md:mx-auto w-full">
										<HTab.Panel>
											<LeftSideBar />
										</HTab.Panel>

										<HTab.Panel>{children}</HTab.Panel>

										<HTab.Panel>
											<RightSideBar />
										</HTab.Panel>
									</div>
								</HTab.Panels>
							</HTab.Group>
						</div>
					</div>

					{/* right sidebar */}
					<div className="xl:col-start-11 col-end-13 w-full h-full hidden xl:block">
						<div className="stick-to-header">
							<RightSideBar />
						</div>
					</div>
				</div>
			</AppLayout>
		</>
	);
};

export default FeedLayout;
