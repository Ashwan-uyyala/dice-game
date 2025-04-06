import React from 'react'
import styled from 'styled-components';
const RollDice = ({rollDice,currentDice}) => {

    

     

  return (
    <RollDicees>
      <div className="dice" onClick={rollDice}>
      <img src={`/images/dice_${currentDice}.png`} alt="dice_1" />
      </div>
      <p>Click on the dice to Roll</p>
    </RollDicees>
  )
}

export default RollDice

const RollDicees = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
.dice{
    cursor: pointer;
}
p{
    font-size: 24px;
    font-weight:500;
}
`;