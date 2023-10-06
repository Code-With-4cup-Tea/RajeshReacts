import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
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
        <div className="home3" id='about'>
            <div>
                <h1>who we are</h1>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae perspiciatis minus odio modi aut sed sequi, magnam unde ut, similique deleniti? Odit dignissimos atque quo eos, aut officiis voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate inventore vitae debitis velit odio doloribus iusto tenetur ut iste repellat, quo excepturi corrupti itaque eius, eligendi rerum consequatur dolorum magnam!</p>
                   
            </div>
        </div>
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s"
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay:"0.5s"
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay:"0.7s"
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay:"1s"
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Home