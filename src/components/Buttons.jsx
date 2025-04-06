import { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";

const Buttons = ({ setScore }) => {
  const [showRules, setShowRules] = useState(false); // ✅ manage rules visibility

  const resetScore = () => {
    setScore(0);
  };

  const toggleRules = () => {
    setShowRules((prev) => !prev); // ✅ toggle on button click
  };

  return (
    <Box>
      <Button onClick={resetScore}>Reset</Button>
      <Button onClick={toggleRules}>Show Rules</Button>

      {showRules && <Rules />} {/* ✅ conditionally render Rules component */}
    </Box>
  );
};

export default Buttons;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  font-size: 24px;
  padding: 5px 30px;
  cursor: pointer;
  transition: 0.5s background ease-out;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.5s background ease-in;
  }
`;
