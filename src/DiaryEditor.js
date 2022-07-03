import {useState} from "react";

const DiaryEditor = () => {
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    })

    const HandelChangeState=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    const HandleSubmit=(e)=>{
        console.log(state);
        alert("Save Success");
    }

    return <div className="DiaryEditor">
        <h2>Today's Diary</h2>
        <div>
            <input name="author" value={state.author}
                   onChange={HandelChangeState}/>
        </div>
            <div>
                <textarea name="content" value={state.content}
                          onChange={HandelChangeState}/>
            </div>
        <div>
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
export default DiaryEditor;