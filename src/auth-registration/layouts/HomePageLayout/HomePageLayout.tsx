import AppLayout from '@/global/layouts/AppLayout';
import Link from '@/shared/ui/Link';
import Image from 'next/image';
import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';

interface HomePageLayoutProps {
	children: React.ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
	return (
		<>
			<AppLayout>
				<figure className="absolute top-20 right-0 hidden md:block">
					<Image
						height={300}
						width={300}
						src="/curves.png"
						alt="decoration-1"
					/>
				</figure>

				<figure className="absolute bottom-20 left-0 hidden md:block">
					<Image
						height={300}
						width={200}
						src="/squares.png"
						alt="decoration-2"
					/>
				</figure>

				<figure className="absolute top-20 right-0 md:hidden">
					<Image
						height={150}
						width={150}
						src="/curves.png"
						alt="decoration-1"
					/>
				</figure>

				<figure className="absolute bottom-20 left-0 md:hidden">
					<Image
						height={180}
						width={150}
						src="/squares.png"
						alt="decoration-2"
					/>
				</figure>

				<div className="flex h-[85vh] items-center justify-center p-2 md:p-0">
					{children}
				</div>

				<footer className="grid w-full grid-cols-3 items-center p-4">
					<Link href="#">Privacy Policy</Link>

					<div className="flex items-center justify-center gap-x-6">
						<FaGooglePlay className="h-5 w-5 text-teal-500" />
						<AiFillApple className="h-7 w-7 text-teal-500" />
					</div>

					<p className="text-right text-sm text-gray-accent">
						Copyright {new Date().getFullYear()} by cruX Forum.
					</p>
				</footer>
			</AppLayout>
		</>
	);
};

export default HomePageLayout;
