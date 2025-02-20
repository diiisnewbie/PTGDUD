import React, { useEffect, useState } from "react";

const DisplayInfor = (props) => {
  const { listUser } = props; //trong function component không dùng this
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // this.state{
  //     isShowHideListUser:true//gán giá trị cho biến
  // }

  const [color, setColor] = useState("red");

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
    isShowHideListUser === true ? setColor("blue") : setColor("red");
  };

  useEffect(() => {
    if (listUser.length > 10) {
      alert("Danh sách người dùng đã đầy");
    }
  }, [listUser]);

  useEffect(() => {
    if (listUser.length === 0) {
      alert("Danh sách người dùng chỉ còn 1 người");
    }
  }, [listUser]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <span
          className={`${
            color === "red" ? "bg-red-500" : "bg-blue-500"
          } font-semibold text-white p-2 rounded cursor-pointer mt-2`}
          onClick={() => handleShowHideListUser()}
        >
          {isShowHideListUser === true ? "Hide list User" : "Show list User"}
        </span>
      </div>
      {isShowHideListUser === true ? (
        <ul className="flex flex-col justify-center items-center">
          {listUser.map((user) => (
            <div className="flex justify-center relative items-center" key={user.id}>
              <li
                key={user.id}
                className="bg-orange-400 w-90 my-2 rounded text-center text-white font-semibold p-3"
              >
                {user.Name} - {user.Age} years old
                <br></br>
                <br></br>
                <span
                onClick={() => props.handleDeleteUser(user.id)}
                className="bg-red-500 p-2 m-3 rounded ml-2 cursor-pointer text-white font-medium"
              >
                Delete
              </span>
              </li>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DisplayInfor;