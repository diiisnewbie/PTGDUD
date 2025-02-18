import React, { Component } from "react";

class AddUserInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Age: "",
    };
  }

  // Cập nhật state khi người dùng nhập dữ liệu
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Xử lý sự kiện submit form
  handleOnSubmit = (event) => {
    event.preventDefault(); 
    this.props.handleAddnewUser({
      id: Math.floor(Math.random() * 100 + 1) + "user", // Tạo id ngẫu nhiên
      Name: this.state.Name,
      Age: this.state.Age,
    });
  
    this.setState({
      Name: "",
      Age: "",
    });
  };

  render() {
    return (
      <form 
      className="flex flex-col justify-center items-center mt-10"
      onSubmit={this.handleOnSubmit}>
        <label className="font-semibold mx-1">
          Tên:
          <input
          className="m-1 border border-gray-400 rounded py-1 w-70"
            type="text"
            name="Name"
            value={this.state.Name}
            onChange={this.handleInputChange}
            required
          />
        </label >
        <br />
        <label className="font-semibold mx-1">
          Tuổi:
          <input
          className="m-1 border border-gray-400 rounded py-1 w-70"
            type="number"
            name="Age"
            value={this.state.Age}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="bg-blue-400 text-white font-semibold my-2 p-2 rounded cursor-pointer">Thêm </button>
      </form>
    );
  }
}

export default AddUserInfor;