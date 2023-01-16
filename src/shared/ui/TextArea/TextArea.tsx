import clsx from 'clsx';
import React from 'react';
import classes from './TextArea.module.css';

interface TextAreaProps
	extends React.DetailedHTMLProps<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	height?: number; //Height in px
	charLimit?: number;
	value: string;
	setText: (val: string) => void;
	labelClass?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
	className,
	height = 400,
	charLimit = 300,
	setText,
	value = '',
	labelClass = '',
	...props
}) => {
	const textAreaHeightClass = `h-[${height}px]`;

	return (
		<>
			<textarea
				className={clsx(classes.root, textAreaHeightClass, className)}
				value={value}
				onChange={(e) => {
					let val = e.target.value;
					if (val.length > charLimit) {
						val = val.substring(0, charLimit);
					}
					setText(val);
				}}
			></textarea>
			<p
				className={clsx([
					'w-100 relative top-[-40px] pr-3 text-right text-teal-600',
					labelClass,
				])}
			>
				{charLimit - value.length} chars
			</p>
		</>
	);
};

export default TextArea;
