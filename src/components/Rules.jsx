import styled from "styled-components"
const Rules = () => {
  return (
    <Box>
        <h1>How to play dice game</h1>
        <p>Select any Number</p>
        <p>Click on Dice Image</p>
        <p>if same image is dispalyed after dice is clicked you get points</p>
        <p>Different dice you loose points</p>
    </Box>
  )
}

export default Rules

const Box=styled.div`
    background: #eedcbb;
    color: black;
    max-width: 600px;
    align-items: center;
    padding: 20px;
    
`;