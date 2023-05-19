import Button from "react-bootstrap/Button";
import { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown } from "react-bootstrap";

const SelectTime = ({ selectTime, setDate, date }) => {
  const [color, setColor] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    setColor(e.target.id);
    selectTime(e.target.innerText);
  };

  return (
    <>
      <div>
        <DropdownButton
          key={"down-centered"}
          id={"dropdown-button-drop-down-centered"}
          drop={"down-centered"}
          style={{ margin: "10px" }}
          title={!date > 0 ? "Please Select a Date" : <p>{date}</p>}
          variant={date ? "success" : "primary"}
        >
          <Dropdown.Item onClick={(e) => setDate()}>Reset</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDate("19/05/23")}>19/05/23</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDate("20/05/23")}>20/05/23</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDate("21/05/23")}>21/05/23</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDate("22/05/23")}>22/05/23</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDate("23/05/23")}>23/05/23</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDate("24/05/23")}>24/05/23</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDate("25/05/23")}>25/05/23</Dropdown.Item>
        </DropdownButton>

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
