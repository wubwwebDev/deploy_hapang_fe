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
import HomePicOne from "assets/img/about_page_two.png";

import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";

const WorkWithTheRockets = () => {
  const overlayRef = React.useRef();
  return (
    <Box
      p="0px"
      backgroundImage={HomePicOne}
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h={{ sm: "20vh", lg: "50vh" }}
      bgSize="cover"
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
    </Box>
  );
};

export default WorkWithTheRockets;
