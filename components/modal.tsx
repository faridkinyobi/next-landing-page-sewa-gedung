// components/CustomModal.js
import React, { useEffect } from "react";
import Modal from "react-modal";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className: string;
};

const CustomModal = ({ isOpen, children, className }: ModalProps) => {
  useEffect(() => {
    // Set app element when the component mounts (client-side)
    Modal.setAppElement("#__next");
  }, []);

  return (
    <Modal className={className} isOpen={isOpen}>
      {children}
    </Modal>
  );
};

export default CustomModal;
