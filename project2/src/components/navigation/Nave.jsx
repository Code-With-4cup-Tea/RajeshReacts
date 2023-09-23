import styles from "./Nav.module.css"
function Nave(){

return(
<>
                <div className={styles.navigation}>
                <div className={styles.logo}>
                    <img src="./images/vivo.png" alt="logo" width="80px"/>
                </div>
                <div className="list">
                    <ul className={styles.link}>
                        <li href="#" style={{color:"skyblue"}}>HOME</li>
                        <li href="#">ABOUT</li>
                        <li href="#">CONTACT</li>
                    </ul>
                </div>
                
            </div>
            
</>

)
    
}

export default Nave;