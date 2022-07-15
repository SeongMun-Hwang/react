import DiaryItem from "./DiaryItem";
import {DiaryStateContext} from "./App";
import {useContext} from "react";

const DiaryList = () => {
    const diaryList=useContext(DiaryStateContext);
    return (
        <div className={"DiaryList"}>
            <h2>Diary Lists</h2>
            <h4>There are {diaryList.length} numbers of diary</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id}{...it}/>
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [],
};

export default DiaryList;