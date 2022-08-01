import clsx from 'clsx';
import React from 'react';

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

const Card = React.forwardRef(
	(props: CardProps, ref: React.Ref<HTMLDivElement>) => {
		const { children, className } = props;

		return (
			<>
				<div
					ref={ref}
					className={clsx(['rounded-md bg-gray-800 p-4', className])}
				>
					{children}
				</div>
			</>
		);
	}
);

Card.displayName = 'Card';

export default Card;
