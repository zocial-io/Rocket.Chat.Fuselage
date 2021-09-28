import { Modal } from '@rocket.chat/fuselage';
import { ReactNode, ReactElement, useState, useMemo, memo, PropsWithChildren, useEffect } from 'react';

import ModalPortal from './ModalPortal';
import { ModalContext } from './ModalContext';

const ModalProvider = ({ children }: PropsWithChildren<{}>) => {
	const [currentModal, setCurrentModal] = useState<ReactNode>(null);

	const contextValue = useMemo(() => ({ setModal: setCurrentModal }), []);

  const closeModal = () => setCurrentModal(null);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }, []);

	return (
		<ModalContext.Provider value={contextValue}>
			{children}
			{currentModal && (
				<ModalPortal>
					<Modal.Backdrop zIndex={999}>{currentModal}</Modal.Backdrop>
				</ModalPortal>
			)}
		</ModalContext.Provider>
	);
};

export default memo(ModalProvider);
