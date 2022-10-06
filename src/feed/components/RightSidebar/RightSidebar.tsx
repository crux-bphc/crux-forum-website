import React from 'react';
import Tag from '@/shared/ui/Tag';
import useDisclosure from '@/shared/hooks/useDisclosure';
import TopicsModal from '@/shared/components/TopicsModal';
import { Topic } from '@/shared/types/topic';
import Button from '@/shared/ui/Button';
import { HiOutlineSearch } from 'react-icons/hi';
import IconButton from '@/shared/ui/IconButton';
import Link from 'next/link';

const DUMMY_DATA: Topic[] = [
	{
		_id: '614c8f08fe60d017770f5ebd',
		name: 'Quire',
	},
	{
		_id: '614c8f08fe60d017770f5ebe',
		name: 'Brainbox',
	},
	{
		_id: '614c8f08fe60d017770f5ebf',
		name: 'Yata',
	},
	{
		_id: '614c8f08fe60d017770f5ec0',
		name: 'Izio',
	},
	{
		_id: '614c8f08fe60d017770f5ec1',
		name: 'Browsedrive',
	},
	{
		_id: '614c8f08fe60d017770f5ec2',
		name: 'Skyba',
	},
	{
		_id: '614c8f08fe60d017770f5ec3',
		name: 'Roodel',
	},
	{
		_id: '614c8f08fe60d017770f5ec4',
		name: 'Feedmix',
	},
	{
		_id: '614c8f08fe60d017770f5ec5',
		name: 'Midel',
	},
	{
		_id: '614c8f08fe60d017770f5ec6',
		name: 'Teklist',
	},
	{
		_id: '614c8f08fe60d017770f5ec7',
		name: 'Linkbuzz',
	},
	{
		_id: '614c8f08fe60d017770f5ec8',
		name: 'Eabox',
	},
	{
		_id: '614c8f08fe60d017770f5ec9',
		name: 'Skyba',
	},
	{
		_id: '614c8f08fe60d017770f5eca',
		name: 'Livepath',
	},
	{
		_id: '614c8f08fe60d017770f5ecb',
		name: 'Kwimbee',
	},
	{
		_id: '614c8f08fe60d017770f5ecc',
		name: 'Voonder',
	},
	{
		_id: '614c8f08fe60d017770f5ecd',
		name: 'Flipbug',
	},
	{
		_id: '614c8f08fe60d017770f5ece',
		name: 'Vimbo',
	},
	{
		_id: '614c8f08fe60d017770f5ecf',
		name: 'Ainyx',
	},
	{
		_id: '614c8f08fe60d017770f5ed0',
		name: 'Omba',
	},
	{
		_id: '614c8f08fe60d017770f5ed1',
		name: 'Aimbo',
	},
	{
		_id: '614c8f08fe60d017770f5ed2',
		name: 'Oozz',
	},
	{
		_id: '614c8f08fe60d017770f5ed3',
		name: 'Pixoboo',
	},
	{
		_id: '614c8f08fe60d017770f5ed4',
		name: 'Livefish',
	},
	{
		_id: '614c8f08fe60d017770f5ed5',
		name: 'Twimm',
	},
	{
		_id: '614c8f08fe60d017770f5ed6',
		name: 'Tazz',
	},
	{
		_id: '614c8f08fe60d017770f5ed7',
		name: 'Zoozzy',
	},
	{
		_id: '614c8f08fe60d017770f5ed8',
		name: 'Skinix',
	},
	{
		_id: '614c8f08fe60d017770f5ed9',
		name: 'Avamm',
	},
	{
		_id: '614c8f08fe60d017770f5eda',
		name: 'Blogtags',
	},
];

const RightSideBar: React.FC = () => {
	const clubs = [
		'new club xyz',
		'Similar suggestions?',
		'new association xyz',
		'club xyz',
	];

	const colors = ['red', 'purple', 'teal', 'blue', 'green'];
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<TopicsModal
				tags={DUMMY_DATA}
				isOpen={isOpen}
				onClose={onClose}
				onListItemClick={() => {
					// do something
				}}
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
							{Array(4)
								.fill(0)
								.map((_, i) => {
									return (
										<div key={i} className="mr-2 mb-2 inline-block">
											<Tag
												color={
													colors[Math.floor(Math.random() * 4)] as
														| 'red'
														| 'purple'
														| 'teal'
														| 'blue'
														| 'green'
														| undefined
												}
											>
												{clubs[Math.floor(Math.random() * 4)]}
											</Tag>
										</div>
									);
								})}
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
											<Tag>{clubs[Math.floor(Math.random() * 4)]}</Tag>
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
