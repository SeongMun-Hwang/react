import {useRef, useState} from "react";

const DiaryItem=({onEdit, onRemove,author,content,created_date,emotion,id})=>{

    const [isEdit,setIsEdit]=useState(false);
    const toggleIsEdit=()=>setIsEdit(!isEdit);
    const [localContent,setLocalContent]=useState(content);
    const localContentInput=useRef();
    const handleRemove=()=>{
        if (window.confirm(`Are you sure remove number ${id} diary?`)) {
            onRemove(id);
        }
    }
    const handleQuitEdit=()=>{
        setIsEdit(false);
        setLocalContent(content);
    }
    const handleEdit=()=>{
        if(localContent.length<5){
            localContentInput.current.focus();
            return;
        }
        if(window.confirm(`Are you sure Edit number ${id} dairy?`)){
            onEdit(id,localContent);
            toggleIsEdit();
        }


        onEdit(id,localContent);
    }

    return <div className={"DiaryEditor"}>
        <div className={"info"}>
            <span>author:{author} | emotion:{emotion}</span><br/>
            <span className={"date"}>{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className={"content"}>{isEdit?(<textarea
            ref={localContentInput} value={localContent} onChange={(e)=>setLocalContent(e.target.value)}>
        </textarea>):(<>{content}</>)}</div>

        {isEdit?<>
            <button onClick={handleQuitEdit}>Cancel Edit</button>
            <button onClick={handleEdit}>Edit Complete</button>
        </>: <>
                <button onClick={handleRemove}>Remove</button>
                <button onClick={toggleIsEdit}>Edit</button></>}

    </div>
}
export default DiaryItem;