import { useEffect } from "react"
const BACKEND_URL = import.meta.env.VITE_LRO_SERVER_BACKEND;
import { useUser } from "@clerk/clerk-react";

const TIME_BEFORE_SERVER_CALL_AFTER_FAIL = 5000;
const SERVER_FETCH_TIMEOUT = 5000;

export default function StateManager() {
    const userData = useUser();
    useEffect(function(){fetchInitialData()}, [])
    return(<></>)

    async function fetchInitialData(){
        console.log('trying to connec to the server.');
    
        try{
            // const response = await fetch(`${BACKEND_URL}/user-data`, {signal: AbortSignal.timeout(SERVER_FETCH_TIMEOUT)});
            const response = await fetch(`${BACKEND_URL}/user-data`, {
                headers: {
                  'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({userID: userData.user?.id}),
                signal: AbortSignal.timeout(SERVER_FETCH_TIMEOUT)
              })
            const jsoned = await response.json();
            console.log(jsoned)
        }
        catch(error){
            console.log(`Failed to connect to server - error: ${error}`);
            setTimeout(fetchInitialData, TIME_BEFORE_SERVER_CALL_AFTER_FAIL);
        }
    } 
}


