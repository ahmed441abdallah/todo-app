import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(
    ref,
    () => {
      return {
        // ... your methods ...
        Open() {
          dialog.current.showModal();
        },
      };
    },
    []
  );
  return createPortal(
    <dialog
      ref={dialog}
      className=" backdrop:bg-stone-900/90 rounded-md shadow-md px-8 py-6 "
    >
      {children}
      <form method="dialog" className="mt-5 text-right">
        <Button> Okay 👍</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
