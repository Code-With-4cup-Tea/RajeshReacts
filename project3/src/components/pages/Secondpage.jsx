import React from 'react'
import Totalscore from './Totalscore';
import Selectnumber from './Selectnumber';
import styled from 'styled-components';
import Rolldice from './Rolldice';
import { useState } from 'react';

const Secondpage = () => {
  const [score,setScore]= useState(0);
  const [selectedNumber,setSelectedNumber] = useState(0);
  const [currentDice,setCurrentDice] = useState(1);
  const [norule,setRull] = useState(" ");
  // console.log(selectedNumber,currentDice);

  const genraterandomnumber = (min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }

    const rollDice = ()=>{
      if(!selectedNumber){
        alert("please Select a number")  //if number not select than this blocl run 
        return;
        
      } else{
        const randomnumber= genraterandomnumber(1,7);
        setCurrentDice((prev)=>randomnumber);
        
  if(selectedNumber===randomnumber){
    setScore((prev)=> prev+randomnumber)
  }else{
    setScore((prev)=>prev-2);
        
    }
    setSelectedNumber(undefined); //when dice click without number click thand dice stop
      }
       
  }

  const reset = ()=>{
      setScore((prev)=>prev-prev);
  }

  const showrule = ()=>{
    setRull((prev)=>"FIRST CHOOSE A NUMBER , THAN ROLL DICE IF NUMBER EQUAL TO ROLL THAN SCORE INCREASE WITH DICE NUMBER OTHER WISE -2")

  }
  return (
    <>   <Topsection>
       <Totalscore score={score}/>
        <Selectnumber selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        
    </Topsection>
    <Rolldice currentDice={currentDice} setCurrentDice={setCurrentDice} rollDice={rollDice}/>
        
        <Button ><button onClick={reset}>Reset Game</button>
          <button onClick={showrule}>Click For Rule</button>
          </Button>
        <p>{norule}</p>
       
    </>
  )
}

export default Secondpage;

const Topsection = styled.div`
        display:flex;
        justify-content:space-around;
        align-items:end;
        padding-top:70px;
        

`
const Button = styled.div `
        display:flex;
        flex-direction:column;
        width:100vw;
        justify-content:center;
        align-items:center;
        gap:1vw;
        button{
        font-size:25px;
        min-width:4vw;
        padding: 8px 30px;
        color:white;
        font-weight:500;
        background-color:black;
        border:none;
        align-items:end;
        border-radius:5px;
        border:1px solid transparent; 
        transition:0.4s background ease-in;
        cursor: pointer;
    }

    button:hover{
        color:black;
        background-color:white;
        border:1px solid black;
        transition:0.3s background ease-in;
    }
    



`



