import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
	return (
		<div className="grid min-h-screen grid-cols-10 items-center">
			<div className="col-start-2 col-end-9 md:col-start-2 md:col-end-6">
				<Image
					src="/not-found.png"
					height={650}
					objectFit="cover"
					width={650}
				/>
			</div>
			<div className="text-center md:text-left col-start-2 col-end-9 md:col-start-6 md:col-end-10">
				<div className="mb-14">
					<h1>Oops!</h1>
					<h3 className="font-medium">We could not find this page</h3>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;