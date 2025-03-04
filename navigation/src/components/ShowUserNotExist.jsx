import UserList from "./UserList";
import UserDetail from "./UserDetail";
import { useState } from "react";

const ShowUserNotExist= ()=>{

    const [isShow,setIsShow] = useState(false)

    const handleShowUser = ()=>{
        setIsShow(!isShow)
        
    }

    return (
        <div className="d-flex justify-content-center">
            <button className={`btn ${isShow ? 'btn-danger' : 'btn-primary'}`} 
                onClick={handleShowUser}>{isShow ? "Unshow" : "Show"}
            </button>
        </div>
    )
}

export default ShowUserNotExist