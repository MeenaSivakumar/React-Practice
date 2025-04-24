import { useEffect, useState } from "react";

export const ApiFetch = ({}) =>{
    const[jokeData,setJokeData] = useState(null);
    useEffect(()=>{
     fetch('https://official-joke-api.appspot.com/random_joke').then(response =>response.json()).then(data=>setJokeData(data))
    },[])
    return(
        <>
        <p>Today joke</p>
        {/* {jokeData && (<div>
            <p>Joke Type:{jokeData.type}</p>
            <p>setup:{jokeData.setup}</p>
            <p>punchline:{jokeData.punchline}</p>
            </div>)} */}
        </>
    );
}