import React, { createContext, useContext, useState } from "react";

// Tạo Context
const UserContext = createContext();

// Hook để lấy dữ liệu người dùng từ Context
export const useUsers = () => {
  return useContext(UserContext);
};

// Component cung cấp dữ liệu người dùng cho toàn bộ ứng dụng
export const UserProvider = ({ children }) => {
  const [users] = useState([
    { id: 1, name: "Nguyễn Văn A" },
    { id: 2, name: "Trần Thị B" },
    { id: 3, name: "Lê Văn C" },
    { id: 4, name: "Trần Nhật Duy" }
    // Thêm người dùng vào đây nếu cần
  ]);

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
};
