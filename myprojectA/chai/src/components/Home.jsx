import React from 'react'

const Home = () => {
  return (
    <>
      <div className="homecontainer">
              
            <div className="lefthomecontainer">
                    <h3>UNLOCK YOUR INNER</h3>
                    <h3 className='h3mid'>CREATIVITY WITH TEAS'S</h3>
                    <h3>PREMIMUM AND INSPIRING TEA BLENDS.</h3>

            </div>
            <div className="righthomecontainer">
                    <img src="tea.png" alt="tea" />
            </div>
      </div>
      <div className="teacontainer" id='teacontainer'>
            <div className="teaheadcontainer">
                    <h1>Tea's</h1>
                    <p>Look good, Feel good</p>
                   
                    
            </div>
            <div className="teaimgcontainer">
                      <div className="img1 " >
                          <img src="ASSAM-EXOTIC.jpg" alt="assam" className='img'/>
                          <p>ASSAM-EXOTIC-CHAI</p>
                      </div>
                      <div className="img2">
                          <img src="CINNAMON.jpg" alt="cinnamon" />
                          <p>CINNAMON-CHAI</p>
                      </div>
                      <div className="img3">
                          <img src="KADAK-GINGER.jpg" alt="kadak" />
                          <p>KADAK-GINGER-CHAI</p>
                      </div>
                      <div className="img4">
                          <img src="TULSI-GINGER.jpg" alt="tulsi" />
                          <p>TULSI-GINGER-CHAI</p>
                      </div>
                      <div className="img5">
                          <img src="TURMERIC-CITRUS.jpg" alt="turmeric" />
                          <p>TURMERIC-CITRUS-CHAI</p>
                      </div>
                      <div className="img6">
                          <img src="EXOTIC-BOMBAY.jpg" alt="exotic" />
                          <p>EXOTIC-BOMBAY-CHAI</p>
                      </div>
            </div>
      </div>
    </>
  )
}

export default Home