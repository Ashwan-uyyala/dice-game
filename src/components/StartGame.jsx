import styled from 'styled-components';
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className="content">
      <img src="images/dices 1.png" alt="dices image" />
      </div>
      <div className="texts">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container=styled.div`
    max-width: 1180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    height: 100vh;

    .texts{
        h1{
            font-size:96px;
            white-space: nowrap;
        }
    }
`;

const Button=styled.button`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
color: white;
background: black;
padding: 10px 20px;
gap: 10px;
font-size: 20px;
width: 220px;
border-radius: 5px;
transition:0.4s background ease-in;
&:hover{
    color: black;
    background: white;
    border: 1px sloid black;
    border-radius: 5px;
    transition:0.4s background ease-in;
    cursor: pointer;

}
`;




