import { useState } from "react";
import {useLocalStorage} from '../../hook/useLocalStorage.js'
import styles from './style.module.css'

const Home = () =>{
    const [user, setUser] = useLocalStorage('USER', '')
    const [inputValue, setInputValue] = useState('')
    
    return(
        <div>
            {user &&(
                <div className={styles.welcome}>
                    <div>Welcome {user}</div>
                    <button className={styles.button} onClick={() => setUser('')}>Logout</button>
                </div>
                
            )}
            {!user &&(
                <div className={styles.welcome}>
                    <label for="name"><b>Enter your name</b></label>
                    <input type="text" placeholder="Enter your name" name="name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className={styles.button} onClick={() => setUser(inputValue)}>Login</button>
                </div> 
            )}
        </div>
    )
} 

export default Home