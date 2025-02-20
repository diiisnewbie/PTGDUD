import React, { Component, useState } from "react";

const AddUserInfor = (props) => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Address, setAddress] = useState("IUH");
  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault(); //ngăn việc tải lại trang
    props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user",
      Name: Name,
      Age: Age,
    });
  };
  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <label className="font-semibold mx-1">
        Tên:
        <input
          className="m-2 border border-gray-400 rounded py-2 w-90 pl-2"
          type="text"
          name="Name"
          value={Name}
          onChange={(event) => handleOnChangeInput(event)}
          required
        />
      </label>
      <br />
      <label className="font-semibold mx-1">
        Tuổi:
        <input
          className="m-2 border border-gray-400 rounded py-2 w-90 pl-2"
          type="number"
          name="Age"
          value={Age}
          onChange={(event) => handleOnChangeAge(event)}
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-700 text-white font-semibold mb-2 p-2 rounded cursor-pointer"
      >
        Thêm người dùng
      </button>
    </form>
  );
};

export default AddUserInfor;