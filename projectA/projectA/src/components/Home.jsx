import React from 'react'
import vg from "../assets/2.webp"

const Home = () => {
  return (
    <>
        <div className='home'>
            <main>
                <h1>techmoon</h1>
                <p>we resolved all your problem</p>
            </main>
    </div>

    <div className='home2'>
            <img src={vg} alt="vector graphics" />
            <div>
                <p>
                    We are only one solution to the tech problem you face everyday. we leading tech company 
                    whose aim is to increase the problem solving ability in children.

                </p>
            </div>
    </div>
                    <div className="home3">
                        <div>
                                     <h1>who we are</h1>
                                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae perspiciatis minus odio modi aut sed sequi, magnam unde ut, similique deleniti? Odit dignissimos atque quo eos, aut officiis voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate inventore vitae debitis velit odio doloribus iusto tenetur ut iste repellat, quo excepturi corrupti itaque eius, eligendi rerum consequatur dolorum magnam!</p>
                   
                         </div>
                    </div>
    </>
  )
}

export default Home