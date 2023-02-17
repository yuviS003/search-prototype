import React, { useEffect, useState } from "react";
import CardGrid from "../../components/CardGrid";

const API_BASE_URL = `http://localhost:5000`;

export default function About2() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/post/fetchByUrl`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: "http://localhost:3000/about2",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res.result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-400 w-full h-[90%] p-5">
      <CardGrid posts={posts} />
    </div>
  );
}
