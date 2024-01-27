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
    className="md:py-[6rem] py-10 my-[15rem] md:my-[10rem] md:mx-[15rem] bg-slate-500"
      isOpen={isOpen}
      >
      {children}
    </Modal>
  );
};

export default CustomModal;
