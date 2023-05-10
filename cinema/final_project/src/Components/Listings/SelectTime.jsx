import Button from "react-bootstrap/Button";

const SelectTime = ({ setFilmTime }) => {
  return (
    <>
      <h2 style={{ marginLeft: "10px" }}>Select times</h2>
      <div>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          12:00pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          13:00pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          14:00pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          15:00pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          16:00pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          16:30pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          17:00pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          17:30pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          18:00pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          18:30pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          19:00pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          19:30pm
        </Button>
        <Button
          id='times'
          variant='light'
          onClick={(e) => setFilmTime(e.target.innerHTMl)}
        >
          20:00pm
        </Button>
      </div>
    </>
  );
};

export default SelectTime;
