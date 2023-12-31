import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import { useCheckout } from "../check-in-out/useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disable={isCheckingOut}
    >
      {isCheckingOut ? <SpinnerMini /> : `check out`}
    </Button>
  );
}

export default CheckoutButton;
