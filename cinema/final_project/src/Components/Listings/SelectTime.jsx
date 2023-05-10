import Button from "react-bootstrap/Button";

const SelectTime = () => {
  return (
    <>
      <h2 style={{ marginLeft: "10px" }}>Select times</h2>
      <div>
        <Button id='times' variant='light'>
          12:00pm
        </Button>
        <Button id='times' variant='light'>
          13:00pm
        </Button>
        <Button id='times' variant='light'>
          14:00pm
        </Button>
        <Button id='times' variant='light'>
          15:00pm
        </Button>
        <Button id='times' variant='light'>
          16:00pm
        </Button>
        <Button id='times' variant='light'>
          16:30pm
        </Button>
        <Button id='times' variant='light'>
          17:00pm
        </Button>
        <Button id='times' variant='light'>
          17:30pm
        </Button>
        <Button id='times' variant='light'>
          18:00pm
        </Button>
        <Button id='times' variant='light'>
          18:30pm
        </Button>
        <Button id='times' variant='light'>
          19:00pm
        </Button>
        <Button id='times' variant='light'>
          19:30pm
        </Button>
        <Button id='times' variant='light'>
          20:00pm
        </Button>
      </div>
    </>
  );
};

export default SelectTime;
