import { useEffect } from "react";

const StripePayments = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id='payments'>
      <stripe-pricing-table
        pricing-table-id='prctbl_1N6ZNsEV9ihFovHF5xenAACJ'
        publishable-key='pk_test_51N6VVgEV9ihFovHF2I1wh9IwCmdQ6SPSTEowgNgKSmy78forEyKRtsDjXSvHc2pz3V5RJih5YpVcZiBkKLD1YC2700xJ6PLqIF'
      ></stripe-pricing-table>
    </div>
  );
};

export default StripePayments;
