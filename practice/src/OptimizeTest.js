import React, {useState, useEffect} from "react";

const CounterA=React.memo(({count})=>{
    useEffect(()=>{
        console.log(`CounterA updated - count: ${count}`);
    });
    return <div>{count}</div>;
});
const CounterB=({obj})=>{
    useEffect(()=>{
        console.log(`CounterB updated - counter: ${obj.count}`);
    });
    return<div>{obj.count}</div>
};

const areEqual=(prevProps,nextProps)=>{
    return prevProps.obj.count===nextProps.obj.count;
}

const MemorizedCounterB=React.memo(CounterB,areEqual);

const OptimizeTest=()=>{
    const [count,setCount]=useState(1);
    const[obj,setObj]=useState({
        count:1,
    });

    return <div style={{padding:50}}>
        <div>
            <h2>counter A</h2>
            <CounterA count={count}/>
            <button onClick={()=>setCount(count)}>A button</button>
        </div>
        <div>
            <h2>counter B</h2>
            <MemorizedCounterB obj={obj}/>
            <button onClick={()=>setObj({
                count:obj.count
            })}>A button</button>
        </div>
    </div>
}

export default OptimizeTest;