import { Link } from "react-router-dom";
const users = [
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
    { id: 3, name: "Lê Văn C" },
    { id: 4, name: "Trần Nhật Duy" }
];
function UserList() {
    return (
        <ul className="bg-warning">
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    );
}
export default UserList;