import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import { useDeleteCabin } from "./useDeleteCabin";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { id, name, maxCapacity, description, regularPrice, discount, image } =
    cabin;
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const { isCreating, createCabin } = useCreateCabin();

  function handleDuplicate() {
    const newCabin = {
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    };

    createCabin(newCabin);
  }

  return (
    <>
      <Table.Row>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>-</span>
        )}
        <div>
          <button disabled={isCreating} onClick={handleDuplicate}>
            Duplicate
          </button>
          <Modal>
            <Modal.ModalButton opens="edit-form">
              <button>Edit</button>
            </Modal.ModalButton>
            <Modal.Window name="edit-form">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.ModalButton opens="delete">
              <button>{isDeleting ? `Deleting ...` : `Delete`}</button>
            </Modal.ModalButton>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(id)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;
