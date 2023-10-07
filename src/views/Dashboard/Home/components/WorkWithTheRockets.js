// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Portal,
  Spacer,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import HomePicOne from "assets/img/home_pic_1.png";

import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";

const WorkWithTheRockets = ({ title, description, backgroundImage }) => {
  const overlayRef = React.useRef();
  return (
    <Box
      p="0px"
      backgroundImage={HomePicOne}
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h={{ sm: "80vh", lg: "80vh" }}
      bgSize="cover"
      _hover={{ "background-size": "auto" }}
      position="relative"
      borderRadius="15px"
    >
      <Box
        bg="linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)"
        w="100%"
        position="absolute"
        h="inherit"
        borderRadius="inherit"
        ref={overlayRef}
      ></Box>
      <Portal containerRef={overlayRef}>
        <Flex
          flexDirection="column"
          color="white"
          p="1.5rem 1.2rem 0.3rem 1.2rem"
          lineHeight="1.6"
          position={"absolute"}
          bottom={10}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Text
            fontSize={[null, "1rem", "1rem", "3rem", "3rem", "3rem"]}
            fontWeight="bold"
            pb=".3rem"
            textAlign={"center"}
          >
            Hapag is a leading global dry bulk operator
          </Text>
          <Text
            fontSize={[null, "0.85rem", "0.85rem", "2rem", "2rem", "2rem"]}
            fontWeight="normal"
          >
            Reach live position of your shipment.
          </Text>
        </Flex>
      </Portal>
    </Box>
  );
};

export default WorkWithTheRockets;
