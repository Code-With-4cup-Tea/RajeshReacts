import styled from "styled-components";


const Firstpage = ({toggle})=>{

    return(
        <> 
        <Main>
            <Contain >
                <img src="./images/dices.png" alt="" />
                <Title>
                    <h1>DICE GAME</h1>
                    <button onClick={toggle}>Play</button>
                </Title>
            </Contain>

        </Main>

        </>
    )
}

export default Firstpage;

const Main = styled.div `
        height:100vh;
        width:100vw;
        /* background-color:red; */
      display:flex;
      justify-content:center;
      align-items:center;

`

const Contain  = styled.div `
        width:60%;
        height:60%;
        /* background-color:blue; */
        display:flex;
        justify-content:space-between;
        align-items:center;
        img{
            width:25vw;
            height:25vw;
            /* background-color:red; */
}

@media (max-width:425px){
    flex-direction:column;
    /* background-color:red; */
    img{
        width:90%;
        height:60%;
    }
}

` 
const Title  = styled.div `
    h1{
        color: #000;
       font-size: 5vw;
        font-weight: 700;
        margin-bottom:1.5vw;
    }

    button{
        font-size:25px;
        min-width:4vw;
        padding: 8px 40px;
        color:white;
        font-weight:600;
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

    @media (max-width:768px) {

        h1{
        color: #000;
       font-size: 5.5vw;
        font-weight: 700;
    }

    }

    @media (max-width:425px) {

        h1{
        font-size: 4.4vh;
        font-weight: 700;
        }

}

`

