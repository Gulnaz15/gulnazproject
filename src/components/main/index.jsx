import { Route, Routes } from "react-router-dom";
import Home from '../home'
import Chat from '../chat'
import TestApi from '../test-api'
import styles from './style.module.css'
import MainPage from "../major";




const Main = () =>{
    return(
        <div className={styles.container}>
            <Routes>
                <Route path = '/' element = {<MainPage/>} ></Route>    
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/test' element={<TestApi/>}/>
                <Route path = "/home" element = {<Home/>} ></Route>
            </Routes>
        </div>
    )
}

export default Main