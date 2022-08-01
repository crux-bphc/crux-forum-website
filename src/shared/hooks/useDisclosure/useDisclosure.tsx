import React from 'react';

const useDisclosure = (initialOpen = false) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(initialOpen);

	const toggleOpen = () => setIsOpen(!isOpen);
	const onOpen = () => setIsOpen(true);
	const onClose = () => setIsOpen(false);

	return {
		toggleOpen,
		onClose,
		onOpen,
		isOpen,
	};
};

export default useDisclosure;
