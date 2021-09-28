import { Modal } from './Modal';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalClose } from './ModalClose';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalIcon } from './ModalIcon';
import { ModalThumb } from './ModalThumb';
import { ModalTitle } from './ModalTitle';

export default Object.assign(Modal, {
  Backdrop: ModalBackdrop,
  Close: ModalClose,
  Content: ModalContent,
  Footer: ModalFooter,
  Header: ModalHeader,
  Thumb: ModalThumb,
  Title: ModalTitle,
  Icon: ModalIcon,
});
