const DiaryItem=({author,content,created_date,emotion,id})=>{
    return <div className={"DiaryEditor"}>
        <div className={"info"}>
            <span>author:{author} | emotion:{emotion}</span>
            <span className={"date"}>{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className={"content"}>{content}</div>
    </div>
}
export default DiaryItem;