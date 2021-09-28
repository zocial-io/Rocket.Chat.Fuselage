import { memo, useState, PropsWithChildren, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

const getModalRoot = () => {
	const modalRoot = document.getElementById('modal-root');
	if (modalRoot) {
		return modalRoot;
	}
	const newElement = document.createElement('div');

	newElement.id = 'modal-root';

	document.body.appendChild(newElement);
	return newElement;
};

const ModalPortal = ({ children }: PropsWithChildren<{}>): ReactPortal  => {
	const [modalRoot] = useState(getModalRoot);
	return createPortal(children, modalRoot);
};

export default memo(ModalPortal);
