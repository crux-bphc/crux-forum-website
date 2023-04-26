import { useRouter } from 'next/router';
import Link from '@/shared/ui/Link';
import React from 'react';
import Tag from '@/shared/ui/Tag';
import { Topic } from '@/shared/types/topic';
import RTE from '@/feed/new/components/RTE';

interface PostItemProps {
	date?: string;
	bottomMargin?: boolean;
	topics?: Topic[];
	body?: string;
}

const PostItem: React.FC<PostItemProps> = ({
	bottomMargin = true,
	date = '12th July, 6:43 PM',
	topics = [],
	body,
}) => {
	return (
		<>
			<div className={`rounded bg-gray-800 p-4 ${bottomMargin ? 'mb-4' : ''}`}>
				<div className="item-center mb-3 flex justify-end xl:hidden">
					<p className="text-xs opacity-60">{date}</p>
				</div>
				<div className="mb-5 flex items-center justify-between">
					<div className="flex gap-2">
						{topics.map((topic) => (
							<Tag key={topic._id} id={topic._id} color={topic.color}>
								{topic.name}
							</Tag>
						))}
					</div>
					<p className="hidden text-xs opacity-60 xl:block">{date}</p>
				</div>
				<div className="mb-3">
					<p>{body && <RTE initial={JSON.parse(body)} readonly></RTE>}</p>
				</div>
				<div className="flex justify-end">
					<Link href="#">View Post</Link>
				</div>
			</div>
		</>
	);
};

export default PostItem;
