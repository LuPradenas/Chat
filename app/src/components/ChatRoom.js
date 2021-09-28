import React from "react";
import { db } from "./Firebase";
import {useChat} from './useChat';


function ChatRoom() {
  const  [message,setMessage] = React.useState('');
  const  {loading,messages,error} = useChat();

  const onPress = (e) => {
    e.preventDefault();
 

    //importamos la base de datos
    db.collection('messages').add({
      timestamp: Date.now(),
      message
    });
  }
  return (
    <div>
      <form>
        <input type="text" value={message} onChange= {(e)=> setMessage(e.target.value)} />
        <button type="submit" onPress={onPress}>Enviar Mensaje</button>
      </form>
      <ul>
        {messages.map(m => 
        <li key={m.id}>
          {m.message}
          </li>
        )}
      </ul>
    </div>
  );
}

export default ChatRoom;
