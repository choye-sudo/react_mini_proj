import { useEffect, useState } from "react";

// useEffect
const Test = () =>{
    const [timer, setTimer] = useState(new Date().toLocaleString());
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(true);
    const onRefresh= () => setRefresh(refresh + 1);
    useEffect(()=>{
        setTimeout(()=>{
            setTimer(new Date().toLocaleString()) // 0 3
        }, 1000)
    },[timer])
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=> setLoading(false), 5)
        setTimer(new Date().toLocaleString());
    }, [refresh])
    if(loading) return <h1>....</h1>
    return <div>
        <h1>{timer}</h1>
        <h1>{refresh}</h1>
        <button onClick={onRefresh}>fsadfsaasf</button>
    </div>

}

export default Test;