import Button from "react-bootstrap/Button";

const AddTickets = () => {
  return (
    <div id='addticks'>
      <h2 style={{ gridRow: 1 }}>Add Tickets</h2>
      <div id='add' style={{ gridRow: 2 }}>
        <h3>Adult - (£7)</h3>
        <p>
          <Button variant='danger'>-</Button> 0{" "}
          <Button variant='success'>+</Button>
        </p>
      </div>
      <div id='add' style={{ gridRow: 3 }}>
        <h3>Child - (£5)</h3>
        <p>
          <Button variant='danger'>-</Button> 0{" "}
          <Button variant='success'>+</Button>
        </p>
      </div>
      <div id='add' style={{ gridRow: 4 }}>
        <h3>Concession - (£5)</h3>
        <p>
          <Button variant='danger'>-</Button> 0{" "}
          <Button variant='success'>+</Button>
        </p>
      </div>
      <div id='total' style={{ gridRow: 2 }}>
        <h2>Total:</h2>
        <h3>£12</h3>
      </div>
    </div>
  );
};

export default AddTickets;
