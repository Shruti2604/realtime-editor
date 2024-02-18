import React from 'react'

const Home  = () => {
    return  <div className="homePageWrapper">
    <div className="formWrapper">
    <img src="/WeCode.png" alt="WeCode-logo"/>
    <h4 className="mainLabel">Paste Invitation Room ID</h4>
    <div className="inputGroup">
        <input
            type="text" 
            className="inputBox" 
            placeholder="ROOM ID"
        />    

        <input
            type="text" 
            className="inputBox" 
            placeholder="USERNAME"
        />  


        <button className='btn JoinBtn'>Join</button>

        <span className='createInfo'>
        If you don't have an invite, then create{' '}
        <a href='' className='createNewBtn'>new room</a>
        </span>
    </div>
    </div>
    </div>
    
};

export default Home