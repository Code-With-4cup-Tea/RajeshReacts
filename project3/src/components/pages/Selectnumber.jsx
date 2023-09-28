import React, { useState } from 'react';
import styled from "styled-components";

const Selectnumber = ({selectedNumber,setSelectedNumber})=>{
    const arrNumber = [1,2,3,4,5,6];
    // const [selectedNumber,setSelectedNumber] = useState(0);
    // console.log(selectedNumber);

    return(
        <>
        <NumberSelectorContainer>
         <div className="flex">
         {
            arrNumber.map((value,i)=>(

                <Box isSelected={value===selectedNumber}
                key={i} onClick={()=>setSelectedNumber(value)}>{value}
                </Box>
                
                ))
        }
         </div>
         <p>Select Number</p>
        
        </NumberSelectorContainer>
        
        

        </>
    )


}

export default Selectnumber;

const NumberSelectorContainer = styled.div`
        display:flex;
        flex-direction:column;
        align-items:end;
    .flex{
        display:flex;
        gap:24px;
    }
    p{
        font-size:24px;
        font-weight:700;

    }
`


const Box = styled.div`
        height:72px;
        width:72px;
        border:1px solid black;
        display:grid;
        place-items:center;
        font-size:24px;
        font-weight:700;
        background-color:${(propes)=>propes.isSelected ? "black" : "white"};
        color:${(propes)=>propes.isSelected ? "white" : "black"};
`



