// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom Components
import PropTypes from "prop-types";
import React from "react";

import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import routes from "routes.js";
export default function HeaderLinks(props) {
  const location = useLocation();
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;

  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <NavLink to="home">
        <Button
          ms="0px"
          px="10px"
          me={{ sm: "2px", md: "16px" }}
          color={"black"}
          variant="transparent-with-icon"
          borderRadius={"5px"}
          _hover={{ background: "white" }}
          background={
            location?.pathname.split("/").includes("home") ? "white" : ""
          }
        >
          <Text display={{ sm: "none", md: "flex" }}>HOME</Text>
        </Button>
      </NavLink>
      <NavLink to="about">
        <Button
          ms="0px"
          px="10px"
          me={{ sm: "2px", md: "16px" }}
          color={"black"}
          variant="transparent-with-icon"
          _hover={{ background: "white" }}
          borderRadius={"5px"}
          background={
            location?.pathname.split("/").includes("about") ? "white" : ""
          }
        >
          <Text display={{ sm: "none", md: "flex" }}>ABOUT</Text>
        </Button>
      </NavLink>
      <NavLink to="track">
        <Button
          ms="0px"
          px="10px"
          me={{ sm: "2px", md: "16px" }}
          color={"black"}
          variant="transparent-with-icon"
          _hover={{ background: "white" }}
          borderRadius={"5px"}
          background={
            location?.pathname.split("/").includes("track") ? "white" : ""
          }
        >
          <Text display={{ sm: "none", md: "flex" }}>TRACK</Text>
        </Button>
      </NavLink>
      <NavLink to="/contact">
        <Button
          ms="0px"
          px="10px"
          me={{ sm: "2px", md: "16px" }}
          color={"black"}
          variant="transparent-with-icon"
          _hover={{ background: "white" }}
          borderRadius={"5px"}
          background={
            location?.pathname.split("/").includes("contact") ? "white" : ""
          }
        >
          <Text display={{ sm: "none", md: "flex" }}>CONTACT</Text>
        </Button>
      </NavLink>
      <NavLink to="/">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            document.documentElement.dir ? (
              <SearchIcon
                color={"black"}
                w="40px"
                h="40px"
                p={"10px"}
                borderRadius={"50%"}
              />
            ) : (
              ""
            )
          }
        ></Button>
      </NavLink>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
