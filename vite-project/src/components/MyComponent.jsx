import React, { Component, useState } from "react";
import AddUserInfor from "./AddUserInfor"; // Đảm bảo tên import đúng
import DisplayInfor from "./DisplayInfor";

const MyComponents = (props) => {
  const [listUser, setListUser] = useState([
    { id: 1, Name: "Huy", Age: 49 },
    { id: 2, Name: "Chuc", Age: 34 },
    { id: 3, Name: "Bao", Age: 32 },
  ]);

  const handleAddnewUser = (userObject) => {
    if (listUser.length >= 10) {
      alert("Danh sách người dùng đã đầy");
      return;
    }
    setListUser([userObject, ...listUser]);
  };

  const handleDeleteUser = (userID) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userID);
    setListUser(listUserClone);
  };

  return (
    <div>
      <AddUserInfor handleAddnewUser={handleAddnewUser} />
      <hr
        className="h-1 bg-gradient-to-r from-red-500 
      to-pink-500 border-0"
      />
      <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default MyComponents;