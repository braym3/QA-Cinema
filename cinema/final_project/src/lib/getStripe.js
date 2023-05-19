import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    console.log(process.env);
    stripePromise = loadStripe(
      process.env.REACT_APP_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );
  }
  console.log(stripePromise);
  return stripePromise;
};

export default getStripe;
