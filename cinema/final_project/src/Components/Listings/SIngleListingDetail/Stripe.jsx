import { Button } from "react-bootstrap";
import getStripe from "../../../lib/getStripe";
const Stripe = ({ ticketCount }) => {
  const test = [
    {
      price: "price_1N8L7NEV9ihFovHFY5VCVPs6",
      quantity: ticketCount.concession,
    },
    {
      price: "price_1N8M1tEV9ihFovHF4B5ufPJa",
      quantity: ticketCount.adult,
    },
    {
      price: "price_1N8O6YEV9ihFovHFwTiwJq1C",
      quantity: ticketCount.child,
    },
  ];

  const lineItemsFinal = test.filter((item) => item.quantity !== 0);

  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: lineItemsFinal,
      mode: "payment",
      successUrl: `http://localhost:3000/purchasetickets/success`,
      cancelUrl: `http://localhost:3000/purchasetickets/failure`,
      customerEmail: "customer@email.com",
    });
    console.log(error.message);
  }

  return <Button onClick={handleCheckout}>Checkout</Button>;
};
export default Stripe;
