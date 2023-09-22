import registrationSuccessfulImg from '../../assets/images/register/register-successful.svg';

const Modal = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
}) => {
  return (
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
      ></div>

      {/* Modal content */}
      <div className="w-[80vw] text-center gap-5 h-fit outline outline-2 outline-[var(--color-3)] rounded-sm z-40 flex flex-col place-items-center pb-10 px-8 lg:pb-16 lg:px-11 lg:w-[50vw]">
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
    </div>
  );
};

export default Modal;
