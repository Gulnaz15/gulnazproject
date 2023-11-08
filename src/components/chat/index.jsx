import { useState } from "react";
// import { Link } from "react-router-dom";
import{ useLocalStorage } from '../../hook/useLocalStorage.js'
import ChatBlock from './chat-block'


const Chat = ()=>{
    const [chatData, setChatData] = useLocalStorage('CHAT', [])
    const [inputValue, setInputValue] = useState('')
    const [showDialogReg, setShowDialogReg] = useState(false)
    const [user] = useLocalStorage('USER')

    const changeChat = () =>{
        if(user){
            setChatData([...chatData, `${user ? user: 'Anonim'}:${inputValue}`])
            setInputValue('')
        }else{
            setShowDialogReg(true)
            setInputValue('')
        }
    }

    return(
        <div>
            <ChatBlock
                chatData={chatData}
                inputValue={inputValue}
                setInputValue={setInputValue}
                changeChat={changeChat}
                setChatData={setChatData}
                showDialogReg={showDialogReg}
            />
        </div>
    )
}

export default Chat