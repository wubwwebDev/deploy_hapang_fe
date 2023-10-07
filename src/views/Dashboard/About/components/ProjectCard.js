// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const ProjectCard = ({ image, name, description }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column">
      <Box
        mb="20px"
        position="relative"
        borderRadius="15px"
        background={"gray"}
        width={{ sm: "200px", lg: "300px" }}
      >
        <Image
          src={image}
          borderRadius="15px"
          height={"200px"}
          width={"100%"}
        />
        <Box
          w="100%"
          h="100%"
          position="absolute"
          top="0"
          borderRadius="15px"
          bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
        ></Box>
      </Box>
      <Flex direction="column">
        <Text fontSize="1.625rem" color="#000000" fontWeight="bold" mb="10px">
          {name}
        </Text>

        <Text fontSize="1.125rem" color="#080000" fontWeight="400" mb="20px">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
