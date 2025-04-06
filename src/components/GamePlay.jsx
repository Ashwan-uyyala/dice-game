import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Buttons from "./Buttons";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const[error,setError]=useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const rollDice = () => {
    if(!selectedNumber){
        setError("You Have not selected any Number")
        return
    };
    setError("");



    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);


    if(selectedNumber==randomNumber){
        setScore((prev)=>prev+randomNumber)
    }
    else{
        setScore((prev)=>prev-2)
    }

    setSelectedNumber(undefined)
  };

  return (
    <div>
      <Main>
        <Container>
          <TotalScore score={score} />
          <NumberSelector 
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </Container>
      </Main>
      <RollDice rollDice={rollDice} currentDice={currentDice} />
      <div className="btns">
        <Buttons setScore={setScore}/>
      </div>
    </div>
  );
};

export default GamePlay;

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
  padding-top: 60px;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


