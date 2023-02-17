import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function CardGrid({ posts }) {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {posts.map((post, index) => {
        return (
          <Card key={index} className="hover:shadow-2xl hover:cursor-pointer">
            <CardHeader>
              <Heading size="md">{post.postName}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{post.postDescription}</Text>
            </CardBody>
            <CardFooter>
              Tags: <b className="ml-1">{post.tags.split(",").join(", ")}</b>
            </CardFooter>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}
