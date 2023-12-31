import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.ModalButton opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.ModalButton>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button
//         onClick={() => setIsOpenModal((curIsOpenModal) => !curIsOpenModal)}
//       >
//         Add a new Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddCabin;
