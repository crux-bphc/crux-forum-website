import React from 'react';
import ClubTag from '../../ui/ClubTag';
import Button from '../../ui/Button';
import TopicsModal from '../topics/TopicsModal';
import useDisclosure from '../hooks/useDisclosure';
import { SearchIcon } from '@heroicons/react/outline';
import { TopicType } from '../../../graphql';

const NotificationsForm: React.FC = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	const [isValid, setIsValid] = React.useState<boolean>(false);
	const [selectedTags, setSelectedTags] = React.useState<TopicType[]>([]);
	const [isTermsofServiceChecked, setIsTermsOfServiceChecked] =
		React.useState<boolean>(false);
	const [selectedNotifications, setSelectedNotifications] = React.useState({
		mySubscriptions: true,
		subscribedEvents: true,
		allEvents: false,
		allPosts: false,
	});

	React.useEffect(() => {
		if (selectedTags.length > 0 && !!isTermsofServiceChecked) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [selectedTags, isTermsofServiceChecked]);

	const toggleNotifications = (notification: string): void => {
		const keyTyped = notification as keyof typeof selectedNotifications;
		setSelectedNotifications((prev) => {
			return {
				...prev,
				[notification]: !selectedNotifications[keyTyped],
			};
		});
	};

	const onListItemClick = (topic: TopicType) => {
		if (!!selectedTags.find((el) => el._id === topic._id)) {
			const updatedTags = selectedTags.filter((el) => el._id !== topic._id);
			setSelectedTags(updatedTags);
		} else {
			setSelectedTags([...selectedTags, topic]);
		}
	};

	return (
		<div>
			<TopicsModal {...{ isOpen, onClose, onListItemClick, selectedTags }} />

			<h1 className="text-2xl sm:text-4xl md:text-5xl">
				Tell us more about you
			</h1>

			<h3 className="text-sm sm:text-base font-normal sm:font-semibold text-gray-accent mt-3 mb-10">
				Looks like this is your first time here, asd qwe sdf trert dfg You can
				always change this shit in the settings
			</h3>

			<div className="flex items-center justify-between mb-8">
				<h2 className="text-2xl sm:text-4xl md:text-5xl">
					What are you interested in?
				</h2>
				<Button
					icon={<SearchIcon className="h-5" />}
					size="sm"
					variant="cyan"
					onClick={onOpen}
				>
					Search...
				</Button>
			</div>

			{!!selectedTags.length && (
				<div className="my-2 items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
					{selectedTags.map((tag) => {
						return (
							<ClubTag
								key={tag._id}
								variant="display"
								name={tag.name}
								color={'purple'}
								onClick={() => {}}
							/>
						);
					})}
				</div>
			)}

			<h2 className="text-2xl sm:text-4xl md:text-5xl">Notifications</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
				<Button
					variant={
						selectedNotifications.mySubscriptions ? 'red' : 'red-outline'
					}
					onClick={() => toggleNotifications('mySubscriptions')}
				>
					My Subscriptions
				</Button>
				<Button
					variant={
						selectedNotifications.subscribedEvents ? 'red' : 'red-outline'
					}
					onClick={() => toggleNotifications('subscribedEvents')}
				>
					Subscribed events
				</Button>
				<Button
					variant={selectedNotifications.allEvents ? 'red' : 'red-outline'}
					onClick={() => toggleNotifications('allEvents')}
				>
					All events
				</Button>
				<Button
					variant={selectedNotifications.allPosts ? 'red' : 'red-outline'}
					onClick={() => toggleNotifications('allPosts')}
				>
					All posts
				</Button>
			</div>

			<div className="flex items-center w-full my-10">
				<input
					onChange={() => setIsTermsOfServiceChecked(!isTermsofServiceChecked)}
					checked={isTermsofServiceChecked}
					className="mr-2"
					type="checkbox"
				/>
				<span className="text-xs">
					I have read and agree to the{' '}
					<a href="/" className="text-blue underline">
						Terms of Service
					</a>
					, the{' '}
					<a href="/" className="text-blue underline">
						Privacy Policy
					</a>{' '}
					and the{' '}
					<a href="/" className="text-blue underline">
						Cookie Policy
					</a>
				</span>
			</div>
			{isValid && (
				<Button className="px-12 py-3 w-full lg:w-3/5 xl:w-2/5">
					Finish Registration!
				</Button>
			)}
		</div>
	);
};

export default NotificationsForm;
