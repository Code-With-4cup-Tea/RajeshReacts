import React, { useState } from 'react'
import styled from 'styled-components'

const Rolldice = ({currentDice,rollDice}) => {
    // const [currentDice,setCurrentDice] = useState(1);

    // const genraterandomnumber = (min,max)=>{
    //     return Math.floor(Math.random()*(max-min)+min);
    // }

    // const rollDice = ()=>{
    //    const randomnumber= genraterandomnumber(1,7);
    //     setCurrentDice((prev)=>randomnumber);
        
    // }
  return (
    <>
        <Dicecontainer>
            <div className='dice'>
                <img src={`/images/dice_${currentDice}.png`} alt="diceimage" onClick={rollDice} />
            </div>
            <p>Click On Dice To Roll</p>
        </Dicecontainer>
    </>
  )
}

export default Rolldice

const Dicecontainer = styled.div`
        margin-top:4px;
        display:flex;
        flex-direction:column;
        align-items:center;
         
        img{
            width:150px;
            height:150px;
        }

        .dice{
            cursor: pointer;
        }
       
        p{
            font-size:24px;
        }

`