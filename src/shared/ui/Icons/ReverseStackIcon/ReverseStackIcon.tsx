import React from 'react';

type ReverseStackIconProps = React.SVGProps<SVGSVGElement>;

const ReverseStackIcon: React.FC<ReverseStackIconProps> = ({
	className,
	...props
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			fill="currentColor"
			viewBox="0 0 30 30"
			className={className}
			{...props}
		>
			<path d="M12.5 22.5h5V20h-5v2.5zm-8.75-15V10h22.5V7.5H3.75zm3.75 8.75h15v-2.5h-15v2.5z"></path>
		</svg>
	);
};

export default ReverseStackIcon;
