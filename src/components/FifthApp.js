import React, { useState, useEffect } from "react";

const FifthApp = () => {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
      // xoá link ảnh khỏi bộ nhớ
    }
  }, [avatar]) // dependencies avatar, khi chọn thay đổi ảnh => gọi callback
  

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]; // this file is object
    file.preview = URL.createObjectURL(file); // tạo link ảnh và lưu vào bộ nhớ
    setAvatar(file);
  };

  return (
    <div>
      <h2>Fifth_App</h2>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
};

export default FifthApp;
