import Firstpage from "./components/pages/Firstpage";
import Secondpage from "./components/pages/Secondpage";
import { useState } from "react";


function App(){

    const [isGameStarted, setIsGameStarted] = useState(false);

    const toggleGamePlay = () => {
      setIsGameStarted((prev) => !prev);
    };

    return(
        <>
            {
                isGameStarted ? <Secondpage /> : <Firstpage toggle={toggleGamePlay} />
            }
            
            {/*when function called (means Game ture than Secondpage display otherwise first
            we are using propes for passing passing to firstpage for click even
            ) */}
       
           {/* <Firspage/> */}
            
        </>
    )
}

export default App;