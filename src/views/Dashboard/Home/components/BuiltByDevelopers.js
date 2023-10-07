// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  background,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
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
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Partnerships with close customers are the core of our business,
              and considerable effort is put into visualising and meeting their
              needs. Long-Term perspectives drive investments aimed at building
              personal relations and cooperation.
            </Text>

            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              With an asset light business model and a strong focus on risk
              assessment, we are a safe choice for your maritime transportation
              needs.
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              Ultrabulk A/S is a subsidiary of Ultranav, a privately owned
              shipping company for over six decades, headquartered in Chile and
              operating globally with offices in 17 countries.
            </Text>
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
