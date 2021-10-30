import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import FeedClubTag from '../../ui/FeedClubTag';
import { Maybe, NoticeType, TopicType } from '../../../graphql';

interface PostItemProps {
	bottomMargin?: boolean;
	post: {
		__typename?: 'NoticeType' | undefined;
	} & Pick<NoticeType, 'body' | 'time' | 'title'> & {
			topics?:
				| Maybe<
						({
							__typename?: 'TopicType' | undefined;
						} & Pick<TopicType, 'name' | 'color'>)[]
				  >
				| undefined;
		};
}

const PostItem: React.FC<PostItemProps> = ({
	bottomMargin = true,
	post: { body, topics, time, title },
}) => {
	const router = useRouter();

	return (
		<>
			<div className={`bg-gray-800 rounded p-4 ${bottomMargin ? 'mb-4' : ''}`}>
				<div className="xl:hidden item-center flex justify-end mb-3">
					<p className="text-xs opacity-60">{time}</p>
				</div>
				<div className="flex items-center justify-between mb-5">
					<div className="flex gap-2">
						{Array(3)
							.fill(0)
							.map((_, i) => (
								<FeedClubTag
									key={i}
									name="Crux"
									color={i === 0 ? 'purple' : i === 1 ? 'blue' : 'green'}
									onClick={() => {
										router.push('/profile/crux');
									}}
								/>
							))}
					</div>
					<p className="text-xs opacity-60 hidden xl:block">
						12th July, 6:43 PM
					</p>
				</div>
				<div className="mb-3">
					<p className="text-sm">{body}</p>
				</div>
				<div className="flex justify-end">
					<Link href="/">
						<a className="text-sm hover:underline text-cyan">View Post</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default PostItem;
