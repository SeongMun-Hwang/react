import DiaryItem from "./DiaryItem";

const DiaryList = ({onEdit, onRemove, diaryList}) => {
    console.log(diaryList)
    return (
        <div className={"DiaryList"}>
            <h2>Diary Lists</h2>
            <h4>There are {diaryList.length} numbers of diary</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id}{...it} onEdit={onEdit} onRemove={onRemove}/>
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;