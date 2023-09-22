import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import registrationSuccessfulImg from '../../assets/images/register/register-successful.svg';
import { usePortal } from '../../hooks/usePortal';
import { getFocusableElements, nextFocusable } from '../../utils/utils';

const Modal = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
}) => {
  const portal = usePortal();

  const container = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (isModalOpen && e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', onKeyPress);
    return () => window.removeEventListener('keydown', onKeyPress); // don't forget to clean up
  }, [isModalOpen, closeModal]);

  // Hide everything except the modal for screen readers
  useEffect(() => {
    document
      .getElementById('root')
      ?.setAttribute('aria-hidden', isModalOpen.toString());
    portal.current?.setAttribute('aria-hidden', (!isModalOpen).toString());
  }, [isModalOpen, portal]);

  // resolve focus on opening and closing of the modal
  useEffect(() => {
    if (isModalOpen) {
      previousFocus.current = (document.activeElement as HTMLElement) ?? null;
      nextFocusable(getFocusableElements(container.current));
    } else {
      previousFocus.current?.focus?.();
      previousFocus.current = null;
    }
  }, [isModalOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case 'Escape': {
          closeModal();
          break;
        }
        case 'Tab': {
          e.preventDefault();
          nextFocusable(getFocusableElements(container.current), !e.shiftKey);
          break;
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeModal]);

  return createPortal(
    <div
      role="dialog"
      className={`fixed z-[50] grid place-items-center inset-0 ${
        isModalOpen ? 'block' : 'hidden'
      }`}
    >
      {/* Modal overlay */}
      <div
        className={`fixed inset-0 bg-navy-blue/90 ${
          isModalOpen ? 'block' : 'hidden'
        }`}
        onClick={closeModal}
        aria-hidden={true}
      ></div>

      {/* Modal content */}
      <div
        className="w-[80vw] text-center gap-5 h-fit outline outline-2 outline-[var(--color-3)] rounded-sm z-40 flex flex-col place-items-center pb-10 px-8 lg:pb-16 lg:px-11 lg:w-[50vw]"
        ref={container}
      >
        <img src={registrationSuccessfulImg} alt="" />
        <div className="text-xl font-semibold">
          <p>Congratulations</p>
          <p>You have successfully registered</p>
        </div>
        <div className="text-sm font-medium">
          <p>Yes, it was easy and you did it!</p>
          <p>check your mail box for next step</p>
        </div>
        <button className="btn capitalize w-full" onClick={closeModal}>
          back
        </button>
      </div>
    </div>,
    portal.current
  );
};

export default Modal;
