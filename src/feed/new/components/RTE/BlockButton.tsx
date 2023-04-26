import * as CSS from 'csstype';

import React from 'react';

import { Editor, Element, Transforms } from 'slate';
import { useSlate } from 'slate-react';

import IconButton from '@/shared/ui/IconButton';

import { BlockElement, ElementType } from './Element';

const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];
const LIST_TYPES = ['numbered-list', 'bulleted-list'];

type FormatType = ElementType | CSS.Property.TextAlign;

interface BlockButtonProps {
	format: FormatType;
	icon: React.ReactNode;
}

function isActive(
	editor: Editor,
	format: FormatType,
	type: 'align' | 'type' = 'type'
): boolean {
	const { selection } = editor;

	if (!selection) return false;

	const [match] = Array.from(
		Editor.nodes(editor, {
			at: Editor.unhangRange(editor, selection),
			match: (n) =>
				!Editor.isEditor(n) &&
				Element.isElement(n) &&
				(n as BlockElement)[type] === format,
		})
	);

	return !!match;
}

function toggle(editor: Editor, format: FormatType): void {
	const active = isActive(
		editor,
		format,
		TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
	);
	const list = LIST_TYPES.includes(format);

	Transforms.unwrapNodes(editor, {
		match: (node) =>
			!Editor.isEditor(node) &&
			Element.isElement(node) &&
			LIST_TYPES.includes((node as BlockElement).type) &&
			!TEXT_ALIGN_TYPES.includes(format),
		split: true,
	});

	let props: Partial<BlockElement>;

	if (TEXT_ALIGN_TYPES.includes(format)) {
		props = {
			align: active ? undefined : (format as CSS.Property.TextAlign),
		};
	} else {
		props = {
			type: active ? 'paragraph' : list ? 'list-item' : (format as ElementType),
		};
	}

	Transforms.setNodes<Element>(editor, props);

	if (!active && list) {
		const block = { type: format, children: [] };
		Transforms.wrapNodes(editor, block);
	}
}

const BlockButton: React.FC<BlockButtonProps> = ({ format, icon }) => {
	const editor = useSlate();

	//TODO: Style active

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

export default BlockButton;
