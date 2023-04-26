import React from 'react';
import Tag from '@/shared/ui/Tag';
import { useUserProfileLazyQuery } from '@/graphql/generated';
import useDisclosure from '@/shared/hooks/useDisclosure';
import TopicsModal from '@/shared/components/TopicsModal';
import { Topic } from '@/shared/types/topic';
import Button from '@/shared/ui/Button';
import { HiOutlineSearch } from 'react-icons/hi';
import IconButton from '@/shared/ui/IconButton';
import Link from 'next/link';

const RightSideBar: React.FC = () => {
	const [getUserProfile, { data }] = useUserProfileLazyQuery();

	React.useEffect(() => {
		getUserProfile();
	}, []);

	const { isOpen, onClose, onOpen } = useDisclosure();

	const [selectedTopics, setSelectedTopics] = React.useState<Topic[]>([]);

	const onListItemClick = (topic: Topic) => {
		if (selectedTopics.find((el) => el._id === topic._id)) {
			const updatedTags = selectedTopics.filter((el) => el._id !== topic._id);
			console.log(updatedTags);
			setSelectedTopics(updatedTags);
		} else {
			setSelectedTopics([...selectedTopics, topic]);
		}
	};

	return (
		<>
			<TopicsModal
				isOpen={isOpen}
				onClose={onClose}
				onListItemClick={onListItemClick}
				selectedTags={[]}
			/>
			<div className="px-8 py-8">
				{/* post button */}
				<Link href="/feed/new" passHref>
					<Button
						className="w-full"
						size="small"
						isLoading={false}
						disabled={false}
					>
						Post Now
					</Button>
				</Link>

				{/* following tags */}
				<div className="mt-8">
					<h3 className="mb-3 text-xl font-semibold">Following</h3>
					<div className="mb-6">
						<div className="mb-2">
							{data?.user?.subscriptions?.map((tag) => (
								<div key={tag._id} className="mr-2 mb-2 inline-block">
									<Tag id={tag._id} color={tag.color}>{tag.name}</Tag>
								</div>
							))}
						</div>
					</div>
				</div>

				<hr className="mb-5 border border-gray-disabled" />

				{/* explore section */}

				<div>
					<div className="mb-5 flex items-center justify-between">
						<h3 className="text-xl font-semibold">Explore</h3>
						<IconButton
							variant="text"
							icon={<HiOutlineSearch className="text-cyan h-5 w-5" />}
							onClick={onOpen}
						/>
					</div>

					<div className="mb-6">
						<div className="mb-2">
							{Array(10)
								.fill(0)
								.map((_, i) => {
									return (
										<div key={i} className="mr-2 mb-2 inline-block">
											<Tag>New Tag</Tag>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RightSideBar;
