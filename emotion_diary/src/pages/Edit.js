import {useSearchParams,useNavigate} from "react-router-dom";

const Edit=()=>{
    const navigate=useNavigate();
    const [searchParams, setSearchParams]=useSearchParams();
    const id=searchParams.get("id");
    console.log(id);

    const mode=searchParams.get("mode");
    console.log(mode);
    return(
        <div>
            <h1>Edit</h1>
            <p>Here is Edit</p>
            <button onClick={()=>setSearchParams({who:"winterlood"})}>change query string</button>
            <button onClick={()=>{
                navigate("/home");
            }}>goto Home</button>
            <button onClick={()=>{
                navigate(-1);
            }}>go back</button>
        </div>
    );
};

export default Edit;