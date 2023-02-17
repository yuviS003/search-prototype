import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const API_BASE_URL = "http://localhost:5000";

const options = [
  "http://localhost:3000/about",
  "http://localhost:3000/about1",
  "http://localhost:3000/about2",
  "http://localhost:3000/about3",
  "http://localhost:3000/about4",
];

export default function Home() {
  const toast = useToast();
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [tags, setTags] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (checkedValue) => {
    if (selectedOptions.includes(checkedValue)) {
      setSelectedOptions(
        selectedOptions.filter((value) => value !== checkedValue)
      );
    } else {
      setSelectedOptions([...selectedOptions, checkedValue]);
    }
  };
  const handleSubmit = () => {
    if (
      postName !== "" &&
      postDescription !== "" &&
      tags !== "" &&
      selectedOptions.length === 1
    ) {
      const payload = {
        postName,
        postDescription,
        url: selectedOptions[0],
        tags: tags.split(","),
      };
      console.log(payload);
      fetch(`${API_BASE_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.message === "Successfully created") {
            toast({
              title: "SUCCESS.",
              description: "New Post created.",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else {
            toast({
              title: "ERROR.",
              description: `${res.message}`,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        })
        .catch((err) => console.error(err));
    } else if (selectedOptions.length > 1 || selectedOptions.length === 0) {
      toast({
        title: "ERROR.",
        description: "Choose only one hosting URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "ERROR.",
        description: "Required fields missing.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="w-full h-full flex justify-center bg-gray-400 py-2">
      <div className="w-[50rem] rounded shadow-md border border-gray-400 flex flex-col p-4 items-start justify-around bg-white h-[90%]">
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
          rows={5}
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
        <div className="text-lg my-1 flex flex-col">
          These posts will be hosted on url
          <CheckboxGroup colorScheme="green">
            {options.map((option) => (
              <Checkbox
                key={option}
                isChecked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              >
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
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
