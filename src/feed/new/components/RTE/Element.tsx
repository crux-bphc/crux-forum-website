import * as CSS from 'csstype';

import React from 'react';

import { BaseElement } from 'slate/dist/interfaces/element';

export type ElementType =
	| 'block-quote'
	| 'bulleted-list'
	| 'heading-one'
	| 'heading-two'
	| 'list-item'
	| 'numbered-list'
	| 'paragraph';

export interface BlockElement extends BaseElement {
	type: ElementType;
	align: CSS.Property.TextAlign;
}

export interface ElementProps {
	children: React.ReactNode;
	element: BlockElement;
	attributes: {
		'data-slate-node': 'element';
		'data-slate-inline'?: true;
		'data-slate-void'?: true;
		dir?: 'rtl';
	};
}

const Element: React.FC<ElementProps> = ({ children, attributes, element }) => {
	const style = {
		textAlign: element.align,
	};

	switch (element.type) {
		case 'block-quote':
			return (
				<blockquote style={style} {...attributes}>
					{children}
				</blockquote>
			);
		case 'bulleted-list':
			return (
				<ul style={style} {...attributes}>
					{children}
				</ul>
			);
		case 'heading-one':
			return (
				<h1 style={style} {...attributes}>
					{children}
				</h1>
			);
		case 'heading-two':
			return (
				<h2 style={style} {...attributes}>
					{children}
				</h2>
			);
		case 'list-item':
			return (
				<li style={style} {...attributes}>
					{children}
				</li>
			);
		case 'numbered-list':
			return (
				<ol style={style} {...attributes}>
					{children}
				</ol>
			);
		default:
			return (
				<p style={style} {...attributes}>
					{children}
				</p>
			);
	}
};

export default Element;
