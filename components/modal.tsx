// components/CustomModal.js
import React from 'react';
import Modal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className:string
};
const CustomModal = ({ isOpen,children,className }:ModalProps ) => {
  return (
    <Modal
    className={className}
      isOpen={isOpen}
      >
      {children}
    </Modal>
  );
};

export default CustomModal;
