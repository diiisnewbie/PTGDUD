import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

function Home() {
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
