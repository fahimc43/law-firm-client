import React from "react";

function ConfirmationModal({
  title,
  message,
  closeModal,
  modalData,
  deletingService,
}) {
  return (
    <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure want to delete?</h3>
          <p className="py-4">
            If you delete{" "}
            <span className=" text-lg text-red-600 font-semibold">
              {deletingService.name}
            </span>{" "}
            , It's can't be recover...
          </p>
          <div className="modal-action">
            <button
              onClick={() => modalData(deletingService)}
              className="btn btn-outline"
            >
              Agree
            </button>
            <button onClick={closeModal} className="btn btn-outline">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
