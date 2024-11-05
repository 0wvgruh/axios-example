import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get(`/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error("Error fetching user data:", error));
  }, [id]);

  if (!user) {
    return <p>해당 사용자를 찾을 수 없습니다.</p>;
  }

  const handleBackToScroll = () => {
    navigate(`/user-scroll?userId=${user.id}`);
  };

  return (
    <div>
      <h2>{user.title}</h2>
      <p><strong>Album ID:</strong> {user.albumId}</p>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>URL:</strong> <a href={user.url} target="_blank" rel="noopener noreferrer">{user.url}</a></p>
      <p><strong>Thumbnail URL:</strong> <a href={user.thumbnailUrl} target="_blank" rel="noopener noreferrer">{user.thumbnailUrl}</a></p>
      
      <button onClick={handleBackToScroll}>목록으로</button>
    </div>
  );
}

export default UserDetail;
