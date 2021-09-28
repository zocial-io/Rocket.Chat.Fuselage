import { createContext, useContext, ReactNode } from 'react';

export const ModalContext = createContext({
	setModal: (modal?: ReactNode): void => undefined,
});

export const useModal = () => useContext(ModalContext);

export const useSetModal = () => useContext(ModalContext).setModal;
