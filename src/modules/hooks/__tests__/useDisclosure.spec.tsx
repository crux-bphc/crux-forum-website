import React from 'react';
import { mount } from '@cypress/react';
import useDisclosure from '../useDisclosure';

describe('test useDisclosure Hook', () => {
	let disclosure: any;

	const MockComponent = () => {
		disclosure = useDisclosure();
		return null;
	};

	it('onOpen method works', () => {
		mount(<MockComponent />)
			.then(() => {
				expect(disclosure.isOpen).to.be.false;
				disclosure.onOpen();
			})
			.then(() => {
				expect(disclosure.isOpen).to.be.true;
			});
	});

	it('onToggle method works', () => {
		mount(<MockComponent />)
			.then(() => {
				expect(disclosure.isOpen).to.be.false;
				disclosure.toggleOpen();
			})
			.then(() => {
				expect(disclosure.isOpen).to.be.true;
				disclosure.toggleOpen();
			})
			.then(() => {
				expect(disclosure.isOpen).to.be.false;
			});
	});

	it('onClose method works', () => {
		mount(<MockComponent />)
			.then(() => {
				disclosure.onOpen();
			})
			.then(() => {
				expect(disclosure.isOpen).to.be.true;
				disclosure.onClose();
			})
			.then(() => {
				expect(disclosure.isOpen).to.be.false;
			});
	});
});
