import { createContext, useContext, ReactElement } from 'react';

type ModalContextValue = {
  push: (modal: ReactElement) => void;
  pop: () => void;
  clear: () => void;
  isOpen: boolean;
};

export const ModalContext = createContext<ModalContextValue>({
  push: () => undefined,
  pop: () => undefined,
  clear: () => undefined,
  isOpen: false,
});

export const useModal = (): ModalContextValue => useContext(ModalContext);
