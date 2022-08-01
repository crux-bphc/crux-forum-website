import clsx from 'clsx';
import React from 'react';
import IconButton from '@/shared/ui/IconButton/IconButton';

interface StepButtonProps {
	children: React.ReactNode;
	isActive?: boolean;
	onClick?: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({
	children,
	isActive,
	onClick,
}) => {
	const classNames = clsx([
		'border',
		!isActive && '!bg-transparent !text-white',
		isActive && '!border-transparent',
	]);

	return (
		<>
			<IconButton onClick={onClick} icon={children} className={classNames} />
		</>
	);
};

export default StepButton;
