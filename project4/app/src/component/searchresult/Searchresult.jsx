
import styled from 'styled-components';
import { BASE_URL,Button } from '../../App';

const Searchresult = ({ data }) => {
  return (
                <FoodsCartContainer>
                        <FoodsCards>
                            {
                                //11: in data all data in array form which is access using map function
                                //12. food.name is a uniqu value which use every first item of map
                                //13.data? : means if data not fetch than return null other wise print data
                                //14: ? this important with map otherwise show error
                                //15: in image use base url for right path 
                                /* data?.map((food)=>(
                                            <FoodsCard key={food.name}>
                                               <div className="foodimage">
                                                <img src={BASE_URL+food.image} alt="" />
                                                
                                               </div>
                                               <div className="foodinfo">
                                                  <div className="info">
                                                    <h3>{food.name}</h3>
                                                    <p>{food.text}</p>
                                                  </div>
                                               </div>

                                                   
                                                   

                                            </FoodsCard>
                                )) */
                                //doing dstructure
                                //toFixed(2) : for place 0 after decimal ,2 means 2 zero 

                                data?.map(({name,image,text,price})=>(
                                            <FoodsCard key={name}>
                                               <div className="foodimage">
                                                <img src={BASE_URL+image} alt="" />
                                                
                                               </div>
                                               <div className="foodinfo">
                                                  <div className="info">
                                                    <h3>{name}</h3>
                                                    <p>{text}</p>
                                                  </div>
                                                  <Button>
                                                    ${price.toFixed(2)}
                                                  </Button>
                                               </div>

                                                   
                                                   

                                            </FoodsCard>
                                ))
                                
 }
                        </FoodsCards>
                </FoodsCartContainer> 
  )
}

export default Searchresult

const FoodsCartContainer = styled.section`
                background-image:url("./images/back.png");
                /* height:100vh; */
                /* height:(100vh - 140px); */
                
                min-height:calc(100vh - 120px);
                background-size:cover;
              
                
`

const  FoodsCards = styled.div`
            display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
    
`

const  FoodsCard = styled.div`
        width: 340px;
  height: 167px;
  border: 0.66px solid;
  color:white;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;
  padding: 8px;
  display: flex;
            .foodinfo {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: end;
            }
            h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  

  
  
            
`