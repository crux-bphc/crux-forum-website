import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import Button from '../../ui/Button';
import FeedClubTag from '../../ui/FeedClubTag';
import IconButton from '../../ui/IconButton';
import useDisclosure from '../hooks/useDisclosure';
import TopicsModal from '../topics/TopicsModal';

const DUMMY_DATA: any = [
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

	const colors = ['red', 'purple', 'cyan', 'blue'];
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<TopicsModal
				tags={DUMMY_DATA}
				isOpen={isOpen}
				onClose={onClose}
				onListItemClick={() => {}}
				selectedTags={[]}
			/>
			<div className="px-8 py-8">
				{/* post button */}
				<div className="mt-2 hidden lg:block">
					<Button color="cyan" className="w-full">
						Post Now
					</Button>
				</div>

				{/* following tags */}
				<div className="mt-8">
					<h3 className="text-xl mb-3 font-semibold">Following</h3>
					<div className="mb-6">
						<div className="mb-2">
							{Array(4)
								.fill(0)
								.map((_, i) => {
									return (
										<div key={i} className="mr-2 inline-block mb-2">
											<FeedClubTag
												name={clubs[Math.floor(Math.random() * 4)]}
												className="text-xs"
												color={colors[Math.floor(Math.random() * 4)]}
											/>
										</div>
									);
								})}
						</div>
					</div>
				</div>

				<hr className="border border-gray-disabled mb-5" />

				{/* explore section */}

				<div>
					<div className="flex justify-between items-center mb-5">
						<h3 className="text-xl font-semibold">Explore</h3>
						<IconButton onClick={onOpen}>
							<SearchIcon className="text-cyan w-4 h-4" />
						</IconButton>
					</div>

					<div className="mb-6">
						<div className="mb-2">
							{Array(10)
								.fill(0)
								.map((_, i) => {
									return (
										<div key={i} className="mr-2 inline-block mb-2">
											<FeedClubTag
												name={clubs[Math.floor(Math.random() * 4)]}
												className="text-xs"
											/>
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
