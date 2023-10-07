// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  background,
  useColorModeValue,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
  Box,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
import Calender from "assets/img/Calender.svg";
import Grain from "assets/img/wheat-sack.svg";
import Pick from "assets/img/pick.svg";
import Coal from "assets/img/coal.svg";

// react icons
import { BsArrowRight } from "react-icons/bs";

const BuiltByDevelopers = ({ title, name, description, image }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minHeight="290.5px" p="1.2rem">
      <CardBody w="100%">
        <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
          <Flex
            flexDirection="column"
            h="100%"
            lineHeight="1.6"
            width={{ lg: "55%" }}
            gap={"2.5rem"}
          >
            <Box>
              <Breadcrumb>
                <BreadcrumbItem color={"blackAlpha.600"}>
                  <BreadcrumbLink
                    href="#"
                    color={"blackAlpha.600"}
                    fontWeight={"semibold"}
                    fontSize={"0.875rem"}
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem color={"blackAlpha.800"}>
                  <BreadcrumbLink
                    href="/about"
                    color={"blackAlpha.800"}
                    fontWeight={"semibold"}
                    fontSize={"0.875rem"}
                  >
                    About
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Text
                fontSize="2.5rem"
                color={textColor}
                fontWeight="bold"
                lineHeight={"3rem"}
              >
                What is dry bulk shipping?
              </Text>
              <Text fontSize="1.625rem" color={textColor} fontWeight="medium">
                Reach live position of your shipment.
              </Text>
            </Box>

            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Dry bulk shipping refers to the transportation of dry bulk cargo
              on ships known as bulk carriers. There are several different types
              of these specialist vessels, each capable of carrying varying
              amounts of cargo.
            </Text>

            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              The dry bulk shipping industry plays a central role in global
              trade. Without it, modern industry as we know it would not exist.
              Even everyday tasks, such as cooking a pizza in the oven, would
              not be possible without dry bulk shipping which is responsible for
              transporting the:
            </Text>

            <Box display={"flex"} flexDir={"column"} gap={"1.5rem"}>
              <Box
                display={"flex"}
                w={{ sm: "100%", lg: "42%" }}
                alignItems={"center"}
                py={"0.3rem"}
                pl={"1rem"}
                bgColor={"#F4F4F4"}
                borderRadius={"15px"}
                cursor={"pointer"}
                _hover={{ background: "#b3b1b1" }}
              >
                {/* image */}
                <Box
                  height={"20px"}
                  width={"20px"}
                  bgRepeat="no-repeat"
                  zIndex="1"
                  top="0"
                  bgImage={Grain}
                  bgSize="contain"
                ></Box>
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "1rem" }}
                  fontWeight={"medium"}
                >
                  Grain needed to make the pizza base
                </Text>
              </Box>
              <Box
                display={"flex"}
                w={{ sm: "100%", lg: "69.5%" }}
                // justifyContent={"space-around"}
                alignItems={"center"}
                py={"0.3rem"}
                pl={"1rem"}
                bgColor={"#F4F4F4"}
                borderRadius={"15px"}
                cursor={"pointer"}
                _hover={{ background: "#b3b1b1" }}
              >
                {/* image */}
                <Box
                  height={"20px"}
                  width={"20px"}
                  bgRepeat="no-repeat"
                  zIndex="1"
                  top="0"
                  bgImage={Pick}
                  bgSize="contain"
                ></Box>
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "1rem" }}
                  fontWeight={"medium"}
                  w={{ sm: "80%", lg: "100%" }}
                >
                  Iron ore and aluminium used to make the oven’s metal
                  components
                </Text>
              </Box>
              <Box
                display={"flex"}
                w={{ sm: "100%", lg: "53.5%" }}
                alignItems={"center"}
                py={"0.3rem"}
                pl={"1rem"}
                bgColor={"#F4F4F4"}
                borderRadius={"15px"}
                cursor={"pointer"}
                _hover={{ background: "#b3b1b1" }}
              >
                {/* image */}
                <Box
                  height={"20px"}
                  width={"20px"}
                  bgRepeat="no-repeat"
                  zIndex="1"
                  top="0"
                  bgImage={Coal}
                  bgSize="contain"
                ></Box>
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "1rem" }}
                  w={{ sm: "80%", lg: "100%" }}
                  fontWeight={"medium"}
                >
                  Coal-generated electricity used to power the oven
                </Text>
              </Box>
            </Box>
          </Flex>
          <Spacer />
          <Flex
            align="center"
            justify="center"
            borderRadius="15px"
            width={{ lg: "40%" }}
            transition={"transform .5s"}
            minHeight={{ sm: "250px" }}
            _hover={{ transform: "scale(1.05)" }}
          >
            {image}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BuiltByDevelopers;
