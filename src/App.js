import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

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
    return (
        <div className="App">
            <DiaryEditor/>
            <DiaryList diaryList={dummyList}/>
        </div>
    );
}

export default App;
