import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { BsArrowReturnRight } from "react-icons/bs";

const API_BASE_URL = "http://localhost:5000";

export default function Navbar() {
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchedResults, setSearchedResults] = useState([]);
  const [query, setQuery] = useState("");
  const goSearch = () => {
    // console.log(query);
    // onOpen();
    if (query !== "") {
      fetch(`${API_BASE_URL}/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (!res?.message) {
            setSearchedResults(res);
            onOpen();
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
    }
  };
  const handleSearchRouting = (url) => {
    const routeTo = url.split("/")[url.split("/").length - 1];
    onClose();
    navigate(`/${routeTo}`);
  };
  return (
    <>
      <div className="sticky top-0 left-0 h-[10%] w-full flex justify-between items-center px-5 bg-blue-500 border-b-2 border-black shadow-stone-500 z-10">
        <div className="flex justify-between items-center text-white text-lg">
          <Link to="/" className="mr-4 hover:cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="mx-4 hover:cursor-pointer">
            About
          </Link>
          <Link to="/about1" className="mx-4 hover:cursor-pointer">
            About1
          </Link>
          <Link to="/about2" className="mx-4 hover:cursor-pointer">
            About2
          </Link>
          <Link to="/about3" className="mx-4 hover:cursor-pointer">
            About3
          </Link>
          <Link to="/about4" className="mx-4 hover:cursor-pointer">
            About4
          </Link>
        </div>
        <div className="flex w-[25rem]">
          <input
            type="query"
            placeholder="query"
            className="p-2 rounded w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            className="px-2 text-center text-white bg-red-500"
            onClick={goSearch}
          >
            Go
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Results</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction="column" spacing={3}>
              {searchedResults.map((result, index) => {
                return (
                  <div
                    className="border border-gray-400 shadow rounded-lg hover:bg-cyan-200 flex w-full p-2 hover:cursor-pointer"
                    key={index}
                    onClick={() => handleSearchRouting(result.url)}
                  >
                    <div className="w-[95%] flex flex-col">
                      <p className="text-lg font-semibold">{result.postName}</p>
                      <p className="text-md my-1">
                        {result.postDescription.split().slice(0, 15).join() +
                          "..."}
                      </p>
                    </div>
                    <div className="w-[5%] flex justify-center items-center">
                      <BsArrowReturnRight />
                    </div>
                  </div>
                );
              })}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
