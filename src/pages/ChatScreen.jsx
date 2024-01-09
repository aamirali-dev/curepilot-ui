import React, { useState } from 'react'
import {LuSend} from 'react-icons/lu'
import ChatGroup from '../components/ChatGroup'
import {completeChat} from '../api/ChatApi'

const ChatScreen = () => {

    const [prompt, setPrompt] = useState()
    const [disableSubmit, setDisableSubmit] = useState()

    const handlePromptChange = (event) => {
        setPrompt(event.target.value)
    }
    const handlePromptSubmit = async (event) => {
        event.preventDefault()
        const message = prompt 
        setPrompt('')
        setDisableSubmit(true)
        await completeChat(prompt)
            .then((response) => {
                console.log(response)
            })
            .catch((error)=> {
                console.log(error)
            })
        setDisableSubmit(false)
    }

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>
            <div className='row w-100 h-100 d-flex justify-content-between align-items-between'>
                <ChatGroup />
                <form className='d-flex justify-content-center align-items-center mb-3 gap-1' style={{height: '10%'}} onSubmit={handlePromptSubmit}>
                    <input type='text' className='form-control prompt' name='prompt' />
                    <button className='btn send-btn' type="submit" disabled={disableSubmit}><LuSend size={20} color='white' /></button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen