import styled from 'styled-components'
import React, { useEffect } from 'react';
import { useState } from 'react';
import Searchresult from './component/searchresult/Searchresult';



//2: this store an url of data sever
// export use with url for using with other components
export const BASE_URL = "http://localhost:9000";

function App(){

    //1: fetching data from server 
    const [data,setData] = useState(null);
//3: this function create for fetch data from server

    const [loading,setLoading]  = useState(false);//7:this use for show loading status

    const [error,setError] = useState(null);//9: its using for showing error message

    const[filteredData,setFilteredData] = useState(null);
    //16: for search filter
    
    //23: for button filter
    const [selectedButton,setselectedButton] = useState('all')

    useEffect(()=>{  //10: using use effect for prevent form loop loading
        const fetchFoodData = async()=>{
        setLoading(true); //7: till data is not load than setloading run

        try{const response = await fetch(BASE_URL); //4: this take response from server
        const data   = await response.json();   //5: convert data in json formate and store in data
        // console.log(data);
        
        setData(data); //6:if data recived than store in setdata state means data state update with new vlaue
        setFilteredData(data); //17: all data sefilterdata main daldiya taki filter kar sakey
        setLoading(false) //8: after laoding its show loaidng staus
 
 
    }catch(error){
                setError("unable to fetch data");
    }

        

    }
    fetchFoodData();  //11:function call inside useffect
    },[]); 
    // console.log(data);

//     {
//     "name": "Boilded Egg",
//     "price": 10,
//     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     "image": "/images/egg.png",
//     "type": "breakfast"
// }  //12: this formate data fetch this store inside an array

// const temp= [
//     {
//     "name": "Boilded Egg",
//     "price": 10,
//     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     "image": "/images/egg.png",
//     "type": "breakfast"
// } 
// ] //13: store inside an array

//18: function for filter data

const searchFood = (e)=>{
            const searchvalue = e.target.value;
            console.log(searchvalue);

            if(searchvalue=="")
            {
                setFilteredData(null);
                //20:if input value nothing than serfilterdata update with null
            }

            const filter = data?.filter((food)=>
                       food.name.toLowerCase().includes(searchvalue.toLowerCase())
                       // 21: data convert in lower case and filter with include vlaue
                       //22. now filter features work properly
            
            );
            setFilteredData(filter);
};

//24: function for button filter
const filterFood = (type)=>{

    if(type=="all"){
        setFilteredData(data);
        setselectedButton("all")
        return;
    }
    const filter = data?.filter((food)=>
                       food.type.toLowerCase().includes(type.toLowerCase())
                       // 21: data convert in lower case and filter with include vlaue
                       //22. now filter features work properly
            
            );
            setFilteredData(filter);
            setselectedButton(type);

}

//23: for button maping

const filterbtn = [

        {
            name:"All",
            type:"all",
        },
        {
            name:"Breakfast",
            type:"breakfast",
        },
        {
            name:"Lunch",
            type:"lunch",
        },
        {
            name:"Dinner",
            type:"dinner",
        },

]

   

    if(error) return <div>{error}</div>;//9: prit error massage 
    if(loading) return <div>Loading....</div> //10: print loading massage till loading data
    

    return(
        <>
           <Container>
                <TopContainer>
                   <div className="logo">
                    <img src="./images/logo.png" alt="logo" />
                   </div>
                   <div className="search">
                        <input type="text"
                            placeholder='Search Food'
                            onChange={searchFood 
                            //19:on change pe searchFood function call hoga or jo input hoga wo return kar dega
                            
                            }
                         />
                   </div>
                </TopContainer>

        <FilterContainer>
        {
            // 24:for map apply in filterbtn array
            filterbtn.map((value)=>
            <Button  
            
            isSelected={selectedButton==value.type} //25: means jo button selected hai uska value or type same hai to css dekho
            
            key={value.name} onClick={()=>filterFood(value.type)}>{value.name}</Button>

            )

            // with the help of map we can create lots of button and many more

        }
            {/* <Button onClick={()=>filterFood("all")}>All</Button>
            <Button onClick={()=>filterFood("breakfast")}>BreakFast</Button>
            <Button onClick={()=>filterFood("lunch")}>Lunch</Button>
            <Button onClick={()=>filterFood("dinner")}>Dinner</Button> 
            
            
            this is long metho we can use map method*/}
        </FilterContainer> 
                     <Searchresult data={filteredData}/>

                    
           </Container>
            
        </>
    )
}

export default App;

const Container = styled.div `
        background-color:rgb(50,51,52);
        margin:0 auto;
    
`;

const TopContainer = styled.section`
           height:140px;
           display:flex;
           justify-content:space-between;
           padding:16px;
           align-items:center; 

           .search{
           input{
            background-color:transparent;
            border:1px solid red;
            color:white;
            border-radius:5px;
            font-size:16px;
            padding:10px 10px;
            &::placeholder{
                color:white;
            }
           }
           }

           @media(0 < width < 600px){
                flex-direction:column;
                height:120px;
           }
           

`
       
const FilterContainer = styled.section`
            display:flex;
            justify-content:center;
            gap:10px;
            padding:20px;
       
`
export const Button = styled.button`
            border-radius: 5px;
            background:${({isSelected})=> (isSelected ?"#b11919" : "#FF4343") 
            //26: isSelected propes pass jo dstructre kiya if isselected ture hai to first color other wise second color
            
            } ;
           outline:1px solid ${({isSelected})=> (isSelected ?"white" : "#FF4343") 
            //27: isSelected propes pass jo dstructre kiya if isselected ture hai to first color other wise second color
            
            } ;
            padding:6px 12px;
            border:none;
            color:white;
            cursor: pointer;
            &:hover{
                background-color:#b11919;
            }
           
           
`


