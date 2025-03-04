import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UserDetail.css';  // Import CSS file

const users = [
  { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com" ,image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"},
  { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com" ,image: 'https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg'},
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com" ,image: 'https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg'}
];

function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  if (!user) {
    return (
      <div className="container text-center">
        <h2>Người dùng không tồn tại</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg rounded">
        <div className="card-header text-center bg-info text-white">
          <h1>{user.name}</h1>
        </div>
        <div className="card-body text-center">
          {/* Hình ảnh với Bootstrap để tối ưu */}
          <img
            src={user.image}
            alt={user.name}
            className="img-fluid rounded-circle mb-4 border border-light"
            style={{ maxWidth: '3000px' , maxHeight : '200px'}}  // Điều chỉnh kích thước tối đa của ảnh
          />
          <p><strong>Tuổi:</strong> {user.age}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-secondary btn-lg" onClick={goToHome}>Quay lại</button>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
