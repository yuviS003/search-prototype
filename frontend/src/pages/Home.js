import React, { useState } from "react";

export default function Home() {
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [tags, setTags] = useState("");
  const [url, setUrl] = useState("http://localhost:3000/about");
  const handleSubmit = () => {
    if (postName !== "" && postDescription !== "" && tags !== "") {
      console.log(postName);
      console.log(postDescription);
      console.log(tags);
      const payload = {
        postName,
        postDescription,
        url,
        tags: tags.split(","),
      };
    }
  };
  return (
    <div className="w-full h-[90%] flex justify-center items-center">
      <div className="w-[38%] min-h-[50%] rounded shadow-md border border-gray-400 flex flex-col p-4 items-start justify-around">
        <p className="text-3xl mb-3 font-semibold">Create a post</p>
        <input
          type="text"
          placeholder="Enter a post name"
          className="my-2 w-full p-2 border border-gray-600 rounded outline-none"
          value={postName}
          onChange={(e) => setPostName(e.target.value)}
        />
        <textarea
          placeholder="Enter a post description"
          className="my-2 w-full p-2 border border-gray-600 rounded outline-none"
          rows={10}
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a tags (separated by commas , )"
          className="my-2 w-full p-2 border border-gray-600 rounded outline-none"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <p className="text-lg my-1 flex">
          These posts will be hosted on url <b className="ml-1">{url}</b>
        </p>
        <button
          type="button"
          className="w-full text-center p-2 bg-blue-500 mt-1 text-white rounded hover:cursor-pointer hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit now
        </button>
      </div>
    </div>
  );
}
