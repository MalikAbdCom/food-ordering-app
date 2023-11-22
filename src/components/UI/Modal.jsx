import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "" }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={`w-11/12 max-w-screen-md border-8 border-orange-500 p-4 rounded-2xl ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
