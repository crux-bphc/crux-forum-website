import { useRouter } from 'next/router';
import Link from '@/shared/ui/Link';
import React from 'react';
import FeedClubTag from '@/shared/ui/Tag';

interface PostItemProps {
	bottomMargin?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({ bottomMargin = true }) => {
	const router = useRouter();

	return (
		<>
			<div className={`rounded bg-gray-800 p-4 ${bottomMargin ? 'mb-4' : ''}`}>
				<div className="item-center mb-3 flex justify-end xl:hidden">
					<p className="text-xs opacity-60">12th July, 6:43 PM</p>
				</div>
				<div className="mb-5 flex items-center justify-between">
					<div className="flex gap-2">
						{Array(3)
							.fill(0)
							.map((_, i) => (
								<FeedClubTag
									key={i}
									color={i === 0 ? 'purple' : i === 1 ? 'blue' : 'green'}
									onClick={() => {
										router.push('/profile/crux');
									}}
								>
									Crux
								</FeedClubTag>
							))}
					</div>
					<p className="hidden text-xs opacity-60 xl:block">
						12th July, 6:43 PM
					</p>
				</div>
				<div className="mb-3">
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
						doloribus vitae? Dolores adipisci nostrum at impedit! Accusantium,
						laudantium expedita corrupti sapiente totam, asperiores dolor
						incidunt similique unde consequatur porro nulla.
					</p>
				</div>
				<div className="flex justify-end">
					<Link href="#">View Post</Link>
				</div>
			</div>
		</>
	);
};

export default PostItem;
