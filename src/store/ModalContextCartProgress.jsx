import { createContext, useState } from "react";

const ModalContextProgress = createContext({
  progress: "",
  modalCart: () => {},
  modalCheckOut: () => {},
  ModalConfirm: () => {},
  ModalLainnya: () => {},
});
export default ModalContextProgress;

export function ModalContextCartProgress({ children }) {
  const [progress, setProgress] = useState("");

  const modalProgress = {
    progress,
    modalCart: () => {
      setProgress("cart");
    },
    modalCheckOut: () => {
      setProgress("checkout");
    },
    ModalConfirm: () => {
      setProgress("confirm");
    },
    ModalLainnya: () => {
      setProgress("lainnya");
    },
  };
  return (
    <ModalContextProgress.Provider value={modalProgress}>
      {children}
    </ModalContextProgress.Provider>
  );
}
