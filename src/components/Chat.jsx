import React from 'react'

const Chat = ({role, message}) => {
    return (
        <div className={(role == 'user') ? "d-flex justify-content-end": 'd-flex'}>
          <div className="rounded border border-primary p-2" style={{ whiteSpace: 'pre-wrap', maxWidth: '100%'}}>
            {message}
          </div>
        </div>
      );
}

export default Chat