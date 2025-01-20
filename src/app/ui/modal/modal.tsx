import React, { ReactNode } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {
  return (
    <>
      {open && (
        <div className={styles.modalOverlay} onClick={onClose}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end">
              <button className={styles.close} onClick={onClose}></button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
