import React, { useEffect, useState } from "react";
import CardGrid from "../../components/CardGrid";

const API_BASE_URL = `http://localhost:5000`;

export default function About4() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/post`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-400 w-full h-[90%] p-5">
      <CardGrid posts={posts} />
    </div>
  );
}
