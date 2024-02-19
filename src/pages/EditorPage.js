import React , { useState } from 'react'
import Client from '../components/Client'
import Editor from '../components/editor'



const EditorPage  = () => {
    const [clients, setClients] = useState([
        {socketId : 1 , username:  'Shruti K'},
        {socketId : 2 , username:  'Ashish K'},
        {socketId : 3 , username:  'Shruu K'},
    ]);

    return (
        <div className='mainWrap'>
        <div className='aside'>
        <div className='asideInner'>
            <div className='logo'>
                <img 
                src='/WeCode.png' 
                alt='logo' 
                className='logoImage'
            />
            </div>
            <h3>Connected</h3>
            <div className='clientsList'>
            { clients.map((client) => (
                < Client 
                   key={client.socketId} 
                   username={client.username}
                   />
            ))}
            </div> 
        </div>

        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
        </div> 

        <div className='editorWrap'>
            <Editor></Editor>
        </div>
         </div>
    );
};

export default EditorPage