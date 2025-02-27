import { useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>Chi tiết người dùng</h2>
      <p>ID: {id}</p>
    </div>
  );
}

export default UserDetail;
