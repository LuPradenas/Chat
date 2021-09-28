import { useEffect, useState } from "react";
import {db } from './Firebase';


export const useChat = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [messages,setMessages] = useState([]);


 useEffect(
   () => {                                          // se va actializar cualquier cambio en la base de datos
       const unsubscribe = db.collection('messages').onSnapshot(
           snapshot => {
               setLoading(false)
               setMessages(snapshot.docs.map(d => ({ id: d.id, ...d.data()})))
           },
           err => {
               setError(err)
           }
       );
       return() => unsubscribe();
   },
   [setMessages]
 )

 return { error,loading, messages,}

    }