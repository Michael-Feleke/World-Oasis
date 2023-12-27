import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpenModal((curIsOpenModal) => !curIsOpenModal)}
      >
        Add a new Cabin
      </Button>
      {isOpenModal && <Modal />}
    </>
  );
}

export default AddCabin;
