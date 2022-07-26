import React, {useContext, useRef, useState} from "react";
import {DiaryDispatchContext} from "./App";

const DiaryEditor = () => {
    const {onCreate}=useContext(DiaryDispatchContext);
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    })
    const AuthorInput =useRef();
    const ContentInput=useRef();

    const HandelChangeState=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }
    const HandleSubmit=()=>{
        if(state.author.length<1){
            AuthorInput.current.focus();
            return;
        }
        if(state.content.length<5){
            ContentInput.current.focus();
            return;
        }
        onCreate(state.author, state.content,state.emotion);
        setState({
            author:"",
            content:"",
            emotion:1,
        });
        alert("Save Success");
    }

    return <div className="DiaryEditor">
        <h2>Today's Diary</h2>
        <div>
            <input ref={AuthorInput} name="author" value={state.author}
                   onChange={HandelChangeState}/>
        </div>
            <div>
                <textarea ref={ContentInput} name="content" value={state.content}
                          onChange={HandelChangeState}/>
            </div>
        <div>
            <span>Emotion level:</span>
            <select name={"emotion"} value={state.emotion} onChange={HandelChangeState}>
                <option value={1}> 1 </option>
                <option value={2}> 2 </option>
                <option value={3}> 3 </option>
                <option value={4}> 4 </option>
                <option value={5}> 5 </option>
            </select>
        </div>
        <div>
            <button onClick={HandleSubmit}>Save Diary</button>
        </div>
    </div>;
}
export default React.memo(DiaryEditor);