import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUser } = this.props;
    return (
      <div>
        <ul className="flex flex-col justify-center items-center">
          {listUser.map((user) => (
            <li key={user.id} className="bg-amber-500 w-70 my-2 rounded text-center text-white font-semibold p-1">
              {user.Name} - {user.Age} years old
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DisplayInfor;