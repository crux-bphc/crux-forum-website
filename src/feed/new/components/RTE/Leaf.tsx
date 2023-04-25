import React from 'react';

export interface MarkedText {
	bold: boolean;
	italic: boolean;
	underline: boolean;
	code: boolean;
}

export interface LeafProps {
	children: React.ReactNode;
	attributes: {
		'data-slate-leaf': true;
	};
	leaf: MarkedText & {
		text: string;
	};
}

const Leaf: React.FC<LeafProps> = ({ attributes, children, leaf }) => {
	if (leaf.bold) {
		children = <strong>{children}</strong>;
	}

	if (leaf.italic) {
		children = <em>{children}</em>;
	}

	if (leaf.underline) {
		children = <u>{children}</u>;
	}

	if (leaf.code) {
		children = <code>{children}</code>;
	}

	return <span {...attributes}>{children}</span>;
};

export default Leaf;
