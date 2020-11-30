import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Join.css'

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="Join">
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <div><input placeholder="Name" className="joinInput" type="text" onChange={(event)=>setName(event.target.value)} /></div>
                    <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange = {(event)=>setRoom(event.target.value)}/></div>
                    {/*we are passing data through url not through any props */}
                    <Link onChangeCapture={event=>(!name||!room) ? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                    <button className = "button mt-20" type = "submit">Start Chat</button>
                    </Link>
                </div>
            </div>





        </div>
    )
}

export default Join
