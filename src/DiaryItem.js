const DiaryItem=({onDelete,author,content,created_date,emotion,id})=>{
    return <div className={"DiaryEditor"}>
        <div className={"info"}>
            <span>author:{author} | emotion:{emotion}</span><br/>
            <span className={"date"}>{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className={"content"}>{content}</div>
        <button onClick={()=> {
            console.log(id)
            if (window.confirm(`Are you sure delete number ${id} diary?`)) {
                onDelete(id);
            }
        }
        }>Delete</button>
    </div>
}
export default DiaryItem;