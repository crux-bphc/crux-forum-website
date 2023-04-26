import React from 'react';

import { Editor } from 'slate';
import { useSlate } from 'slate-react';

import IconButton from '@/shared/ui/IconButton';

import { MarkedText } from './Leaf';

interface MarkButtonProps {
	format: keyof MarkedText;
	icon: React.ReactNode;
}

function isActive(editor: Editor, format: keyof MarkedText): boolean {
	const marks = Editor.marks(editor) as MarkedText & { text: string };
	return marks ? marks[format] === true : false;
}

function toggle(editor: Editor, format: keyof MarkedText): void {
    const isActiveMark = isActive(editor, format);

    if (isActiveMark) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
}

const MarkButton: React.FC<MarkButtonProps> = ({ format, icon }) => {
	const editor = useSlate();

	//TODO: style active

	return (
		<IconButton
			variant={isActive(editor, format) ? 'solid' : 'text'}
			icon={icon}
			onClick={(event) => {
				event.preventDefault();
				toggle(editor, format);
			}}
		/>
	);
};

export default MarkButton;
