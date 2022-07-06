import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useRef, useState} from "react";

const dummyList = [
    {
        id: 1,
        author: "hsm",
        content:"hello",
        emotion: 5,
        created_date: new Date().getTime()
},
{
    id: 2,
        author: "pth",
    content:"hello",
    emotion: 5,
    created_date: new Date().getTime()
},
{
    id: 3,
        author: "ksl",
    content:"hello",
    emotion: 5,
    created_date: new Date().getTime()
},
]


function App() {
    const [data,setData]=useState([]);

    const dataId=useRef(0)
    const onCreate=(author,content,emotion)=>{
        const created_date=new Date().getTime();
        const newItem={
            author,
            content,
            emotion,
            created_date,
            id: dataId.current,
        };
        dataId.current+=1;
        setData([newItem,...data])
    };
    return (
        <div className="App">
            <DiaryEditor onCreate={onCreate}/>
            <DiaryList diaryList={data}/>
        </div>
    );
}

export default App;
