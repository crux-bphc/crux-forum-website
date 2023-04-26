import React from 'react';

import { Editable, withReact, Slate } from 'slate-react';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';

import BlockElement from './Element';
import LeafElement from './Leaf';

import MarkButton from './MarkButton';
import BlockButton from './BlockButton';

import {
	BsAlignCenter,
	BsAlignEnd,
	BsAlignStart,
	BsBlockquoteLeft,
	BsCodeSquare,
	BsJustify,
	BsListUl,
	BsTypeBold,
	BsTypeItalic,
	BsTypeUnderline,
} from 'react-icons/bs';

import clsx from 'clsx';
import classes from './RTE.module.css';
import { MdTitle } from 'react-icons/md';
import { BiHeading, BiListOl } from 'react-icons/bi';

interface RTEProps {
	readonly?: boolean;
	initial?: Descendant[];
	onChange?: (value: Descendant[]) => void;
}

const RTE: React.FC<RTEProps> = ({
	readonly = false,
	initial = [
		{
			type: 'paragraph',
			children: [{ text: '' }],
		},
	],
	onChange = () => {},
}) => {
	const elementRenderer = React.useCallback(
		(props) => <BlockElement {...props}></BlockElement>,
		[]
	);
	const leafRenderer = React.useCallback(
		(props) => <LeafElement {...props}></LeafElement>,
		[]
	);

	const editor = React.useMemo(
		() => withHistory(withReact(createEditor())),
		[]
	);

	return (
		<Slate
			editor={editor}
			value={initial}
			onChange={onChange}
			key={JSON.stringify(initial)}
		>
			{!readonly && (
				<div className={classes.toolbar}>
					<MarkButton
						format="bold"
						icon={<BsTypeBold></BsTypeBold>}
					></MarkButton>
					<MarkButton
						format="italic"
						icon={<BsTypeItalic></BsTypeItalic>}
					></MarkButton>
					<MarkButton
						format="underline"
						icon={<BsTypeUnderline></BsTypeUnderline>}
					></MarkButton>
					<MarkButton
						format="code"
						icon={<BsCodeSquare></BsCodeSquare>}
					></MarkButton>

					<BlockButton
						format="heading-one"
						icon={<MdTitle></MdTitle>}
					></BlockButton>
					<BlockButton
						format="heading-two"
						icon={<BiHeading></BiHeading>}
					></BlockButton>
					<BlockButton
						format="block-quote"
						icon={<BsBlockquoteLeft></BsBlockquoteLeft>}
					></BlockButton>
					<BlockButton
						format="numbered-list"
						icon={<BiListOl></BiListOl>}
					></BlockButton>
					<BlockButton
						format="bulleted-list"
						icon={<BsListUl></BsListUl>}
					></BlockButton>
					<BlockButton
						format="left"
						icon={<BsAlignStart></BsAlignStart>}
					></BlockButton>
					<BlockButton
						format="center"
						icon={<BsAlignCenter></BsAlignCenter>}
					></BlockButton>
					<BlockButton
						format="right"
						icon={<BsAlignEnd></BsAlignEnd>}
					></BlockButton>
					<BlockButton
						format="justify"
						icon={<BsJustify></BsJustify>}
					></BlockButton>
				</div>
			)}
			<Editable
				className={clsx(
					'p-3 text-sm',
					readonly || 'mt-4 !min-h-[400px] border-2'
				)}
				renderElement={elementRenderer}
				renderLeaf={leafRenderer}
				placeholder={readonly ? '' : 'Enter text'}
				spellCheck
				autoFocus
				readOnly={readonly}
			></Editable>
		</Slate>
	);
};

export default RTE;
