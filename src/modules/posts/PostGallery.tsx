import React from 'react';
import classes from './styles/PostGallery.module.css';
import Image from 'next/image';
import clsx from 'clsx';

interface PostGalleryProps {
	images: string[];
}

const PostGallery: React.FC<PostGalleryProps> = ({ images }) => {
	if (images.length == 1) {
		return (
			<div data-testid="post-gallery" className={classes.oneImage}>
				<img src={images[0]} className="w-full" />
			</div>
		);
	} else if (images.length == 2) {
		return (
			<div
				data-testid="post-gallery"
				className={clsx([classes.twoImages, 'h-[600px]'])}
			>
				<div className="relative">
					<Image src={images[0]} layout="fill" />
				</div>
				<div className="relative">
					<Image src={images[1]} layout="fill" />
				</div>
			</div>
		);
	} else {
		return (
			<div
				data-testid="post-gallery"
				className={clsx([classes.threeImages, 'h-[200px] sm:h-[400px]'])}
			>
				<div className="relative row-span-2">
					<Image src={images[0]} layout="fill" />
				</div>
				<div className="relative">
					<Image src={images[1]} layout="fill" />
				</div>
				<div className="relative">
					<Image src={images[2]} layout="fill" />
				</div>
			</div>
		);
	}
};

export default PostGallery;
