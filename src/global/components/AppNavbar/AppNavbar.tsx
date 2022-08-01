import Link from 'next/link';
import React from 'react';
import { HiOutlineBell, HiOutlineCog } from 'react-icons/hi';
import {
	useLoggedInUserQuery,
	useLogoutUserMutation,
} from '@/graphql/generated';
import Avatar from '@/shared/ui/Avatar/Avatar';
import IconButton from '@/shared/ui/IconButton/IconButton';
import { Menu, Transition } from '@headlessui/react';
import { MdAccountCircle, MdLogout } from 'react-icons/md';
import { apolloClient } from '@/lib/withApollo';

const AppNavbar: React.FC = () => {
	const { data } = useLoggedInUserQuery({
		ssr: false,
		fetchPolicy: 'cache-first',
	});
	const [logout] = useLogoutUserMutation();

	return (
		<>
			<nav className="sticky top-0 z-40 flex min-h-[64px] items-center justify-between bg-gray-900 px-5 py-2">
				<Link href="/" passHref>
					<a className="text-xl">
						cruX <span className="text-teal-500">Forum</span>
					</a>
				</Link>

				{data && data.user?.bio && data.user?.profilePicture && (
					<ul className="flex items-center gap-1">
						<li>
							<Link href="/settings" passHref>
								<IconButton
									isLink
									icon={<HiOutlineCog size={24} />}
									variant="text"
									color="teal"
								/>
							</Link>
						</li>

						<li>
							<Link href="/settings" passHref>
								<IconButton
									isLink
									icon={<HiOutlineBell size={24} />}
									variant="text"
									color="teal"
								/>
							</Link>
						</li>

						<li className="ml-2">
							<Menu
								as="div"
								className="relative inline-block text-left ring-0 ring-transparent"
							>
								<div>
									<Menu.Button data-testid="appnavbar-menu-button">
										<Avatar
											size="x-small"
											src={data.user.profilePicture || ''}
											alt={data.user.name}
										/>
									</Menu.Button>
								</div>
								<Transition
									as={React.Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-white rounded-md bg-gray-800 shadow-lg focus:outline-none">
										<div className="px-1 py-1 ">
											<Menu.Item>
												<Link href="/profile/users/me">
													<a
														className={`flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-gray-200`}
													>
														<MdAccountCircle size={18} className="mx-2" />
														My Profile
													</a>
												</Link>
											</Menu.Item>
											<Menu.Item>
												<span
													data-testid="appnavbar-menu-logout"
													onClick={async () => {
														await logout({
															update: async () => {
																await apolloClient.resetStore();
															},
														});
													}}
													role="button"
													className={`text-red flex w-full cursor-pointer items-center rounded-md px-2 py-2 text-sm text-red-400`}
												>
													<MdLogout size={18} className="mx-2" />
													Logout
												</span>
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</li>
					</ul>
				)}
			</nav>
		</>
	);
};

export default AppNavbar;
