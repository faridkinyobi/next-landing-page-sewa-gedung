// components/CustomModal.js
import React from 'react';
import Modal from 'react-modal';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};
const CustomModal = ({ isOpen,children }:ModalProps ) => {
  return (
    <Modal
      isOpen={isOpen}
      >
      {children}
    </Modal>
  );
};

export default CustomModal;
