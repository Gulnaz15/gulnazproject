import styles from './style.module.css'
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const ChatBlock = (props) =>{
    // const count = Object.keys(el).length
    const [registr, setRegistr] = useState(false)

    return(
        <div>
            <div className='container'>
                <button className={styles.buttons} onClick={() => setRegistr(!registr)}>
                {registr ? "Close comments" : "Leave a comment"}
                </button>
            </div>

            {registr &&(
            <div>
                         {props.chatData.map((el,i) =>{
                             return(
                                 <div key={i}>
                                     {el}
                                 </div>
                             )
                         })}
               
                        <div className={styles.wrapper}>
                            <label>Enter message</label>
                            <input value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)}/>
                            
                            

                            <button disabled={!props.inputValue} className={styles.send} onClick={props.changeChat}>Send</button>

                            <button className={styles.send} onClick={() => props.setChatData([])} >delete</button>

                            {props.showDialogReg && (
                                <div>
                                    Chat not alloowed, go to <Link to='/home'>link</Link>
                                </div>
                            )}
                        </div>
            </div>
            )}
        
        </div>
    )
}

export default ChatBlock