
import styled from "styled-components"
const NumberSelector = ({
    setError,error,selectedNumber,setSelectedNumber
}) => {
    const arrNumber=[1,2,3,4,5,6];

    const NumberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }
    
  return (
    
   <NumberSelectorContainer>
    <p className="err">{error}</p>
    <div className="flex">
    {
        arrNumber.map((value,i)=>
            (<Box
                isSelected={value==selectedNumber}
                key={i} onClick={()=>NumberSelectorHandler(value)}>{value}</Box>))
    }
    </div>
     <p>Select Number</p>
   </NumberSelectorContainer>
    
  )
}

export default NumberSelector


const NumberSelectorContainer=styled.div`
    .err{
        color: red;
    }
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size:24px;

    }
`;

const Box = styled.div`
    border: 1px solid black;
    display: grid;
    place-items: center;
    height: 72px;
    width: 72px;
    font-size: 24px;
    font-weight: 500;
    background-color: ${(props)=>(props.isSelected?"black":"white")};
    color: ${(props)=>(props.isSelected?"white":"balck")};

`;