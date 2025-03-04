import UserList from "../components/UserList";
import ShowUserNotExist from "../components/ShowUserNotExist";
function Home() {
  return (
    <div>
      <h1 className="text-center text-primary">Danh sách người dùng</h1>
      <ShowUserNotExist></ShowUserNotExist>
      <UserList />
    </div>
  );
}
export default Home