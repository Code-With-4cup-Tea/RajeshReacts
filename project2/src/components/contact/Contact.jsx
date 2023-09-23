import styles from "./Contact.module.css"
import {MdMessage}  from "react-icons/md";
import {IoIosCall} from "react-icons/io";
import { useState } from "react";
function Contact(){
    const [name , setName] = useState("name");
    const [email , setEmail] = useState("raj223958@gmail.com");
    const [text , setText] = useState("this is my react project");
   
    

    const chat = ()=>{
        alert("WELCOME TO VIVO CHAT SUPPORT")
    }

    const call = ()=>{
        alert("WELCOME TO VIVO CALL SUPPORT")
    }

    const submit=(e)=>{
        e.preventDefault(); //form ko reload honay se rokata hian
        setName(e.target[0].value)
        setEmail(e.target[1].value)
        setText(e.target[2].value)
        
        // console.log("name",e.target[0].value);
        // console.log("email",e.target[1].value);
        // console.log("text",e.target[2].value);
    }
    return(
        <> 
            <div className={styles.contact}>
                <h1>Contact Us</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
            <div className="form" >
                <div className={styles.twobutton}>
                    <button className={styles.chat} onClick={chat}><MdMessage/>VIA SUPPORT CHAT</button>
                    <button className={styles.call}  onClick={call}><IoIosCall/>VIA CALL</button>
                   
                </div>
                <button className={styles.emailform}><MdMessage/>VIA EMAIL FORM</button>
            </div>
            <div className="form" >
            <form action="" onSubmit={submit}>
                <div className={styles.input}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.email}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className={styles.textarea}>
                    <label htmlFor="textarea">Text</label>
                    <textarea name="textarea" id=""  rows="4"></textarea>
                </div>
                <div className={styles.btn}>
                   <button >SUBMIT</button>
                </div>
                
                </form>
            </div>
            {/* <div className="information">
                    <button className="first">Name:{name}</button>
                    <button className="second">Email:{email}</button>
                    <button className="third">Text:{text}</button>
                </div> */}
                <div>
                <h4>Name:{name}</h4>
                <h4>Email:{email}</h4>
                <h4>Text:{text}</h4>
                   
                </div>
            </div>
            
        </>
    )
}

export default Contact;