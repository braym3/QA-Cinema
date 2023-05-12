import Button from "react-bootstrap/Button";
import { useState } from "react";

const SelectTime = () => {
  const [color, setColor] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setColor(e.target.id);
  };

  return (
    <>
      <h2 style={{ marginLeft: "10px" }}>Select times</h2>
      <div>
        <Button
          id='12'
          className='times'
          variant={color === "12" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          12:00pm
        </Button>
        <Button
          id='13'
          className='times'
          variant={color === "13" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          13:00pm
        </Button>
        <Button
          id='14'
          className='times'
          variant={color === "14" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          14:00pm
        </Button>
        <Button
          id='15'
          className='times'
          variant={color === "15" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          15:00pm
        </Button>
        <Button
          id='16'
          className='times'
          variant={color === "16" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          16:00pm
        </Button>
        <Button
          id='1630'
          className='times'
          variant={color === "1630" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          16:30pm
        </Button>
        <Button
          id='1700'
          className='times'
          variant={color === "1700" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          17:00pm
        </Button>
        <Button
          id='1730'
          className='times'
          variant={color === "1730" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          17:30pm
        </Button>
        <Button
          id='1800'
          className='times'
          variant={color === "1800" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          18:00pm
        </Button>
        <Button
          id='1830'
          className='times'
          variant={color === "1830" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          18:30pm
        </Button>
        <Button
          id='19'
          className='times'
          variant={color === "19" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          19:00pm
        </Button>
        <Button
          id='1930'
          className='times'
          variant={color === "1930" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          19:30pm
        </Button>
        <Button
          id='20'
          className='times'
          variant={color === "20" ? "success" : "light"}
          onClick={(e) => handleClick(e)}
        >
          20:00pm
        </Button>
      </div>
    </>
  );
};

export default SelectTime;
