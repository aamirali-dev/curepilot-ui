import React from 'react'
import { LuSend } from 'react-icons/lu'
import ChatGroup from '../components/ChatGroup'

const ChatScreen = () => {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>
            <div className='row w-100 h-100 d-flex justify-content-between align-items-between'>
                <ChatGroup />
                <div className='d-flex justify-content-center align-items-center mb-3 gap-1' style={{height: '10%'}}>
                    <input type='text' className='form-control prompt' name='prompt' />
                    <button className='btn send-btn' type="submit"><LuSend size={20} color='white' /></button>
                </div>
            </div>
        </div>
    )
}

export default ChatScreen