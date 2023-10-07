import { Flex, Spacer, Text, useColorModeValue, Box } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";

const SalesOverview = () => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minHeight="290.5px" p="1.2rem" my="26px">
      <CardBody w="100%">
        <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
          <Flex
            flexDirection="column"
            h="100%"
            lineHeight="1.6"
            // width={{ lg: "70%" }}
            gap={"2rem"}
          >
            <Box>
              <Text
                fontSize="2.5rem"
                lineHeight={"2.5rem"}
                color={textColor}
                fontWeight="bold"
              >
                How to charter a dry cargo vessel
              </Text>
            </Box>

            <Text fontSize="sm" color="gray.400" w={"80%"} fontWeight="normal">
              With more than 80% of international trade being transported by
              sea, maritime transport is hugely important for moving all kinds
              of goods to where they need to be. And dry bulk cargo is no
              exception. In order to transport dry bulk commodities (such as
              coal, grain and sand) it is necessary to charter a ship, however,
              the type of dry bulk vessel used for a specific shipment will
              depend on the following factors:
            </Text>

            <Box
              display={"grid"}
              gridTemplateColumns={{ sm: "1fr", lg: "1fr 1fr" }}
              width={"100%"}
              rowGap={"2rem"}
              columnGap={"1.5rem"}
            >
              <Box
                display={"flex"}
                flexDir={"column"}
                w={{ sm: "100%", lg: "100%" }}
                py={"1rem"}
                px={"1rem"}
                background={
                  "transparent linear-gradient(1deg, #FFFFFF 0%, #D3D3D3D5 100%) 0% 0% no-repeat padding-box"
                }
                borderRadius={"15px"}
                cursor={"pointer"}
                _hover={{ background: "#b3b1b1" }}
                gap={"10px"}
              >
                {" "}
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "1.2rem" }}
                  fontWeight={"bold"}
                >
                  WHAT IS THE SIZE OF THE CARGO?
                </Text>
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "0.85rem" }}
                  fontWeight={"medium"}
                  fontStyle={"italic"}
                  w="85%"
                >
                  Very Large Ore Carriers (VLOC), Capesize and Panamax vessels
                  have large capacities so are suitable for bigger cargoes,
                  whereas Handymax and small handy vessels are more suited to
                  carrying smaller cargoes.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                w={{ sm: "100%", lg: "100%" }}
                py={"1rem"}
                px={"1rem"}
                background={
                  "transparent linear-gradient(1deg, #FFFFFF 0%, #D3D3D3D5 100%) 0% 0% no-repeat padding-box"
                }
                borderRadius={"15px"}
                cursor={"pointer"}
                _hover={{ background: "#b3b1b1" }}
                gap={"10px"}
                h={"10rem"}
              >
                {" "}
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "1.2rem" }}
                  fontWeight={"bold"}
                >
                  IS IT HAZARDOUS CARGO?
                </Text>
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "0.85rem" }}
                  fontWeight={"medium"}
                  fontStyle={"italic"}
                  w="85%"
                >
                  If you’re shipping dangerous goods, it is vital you take
                  appropriate precautions to ensure their safe storage and
                  transportation.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                w={{ sm: "100%", lg: "100%" }}
                py={"1rem"}
                px={"1rem"}
                background={
                  "transparent linear-gradient(1deg, #FFFFFF 0%, #D3D3D3D5 100%) 0% 0% no-repeat padding-box"
                }
                borderRadius={"15px"}
                cursor={"pointer"}
                _hover={{ background: "#b3b1b1" }}
                gap={"10px"}
                h={"10rem"}
              >
                {" "}
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "1.2rem" }}
                  fontWeight={"bold"}
                >
                  IS IT FOOD-GRADE CARGO?
                </Text>
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "0.85rem" }}
                  fontWeight={"medium"}
                  fontStyle={"italic"}
                  w="85%"
                >
                  Regulations require food-grade cargo to be transported in a
                  special container that has not previously been used for
                  storing harmful substances or chemicals.
                </Text>
              </Box>
              <Box
                display={"flex"}
                flexDir={"column"}
                w={{ sm: "100%", lg: "100%" }}
                py={"1rem"}
                px={"1rem"}
                background={
                  "transparent linear-gradient(1deg, #FFFFFF 0%, #D3D3D3D5 100%) 0% 0% no-repeat padding-box"
                }
                borderRadius={"15px"}
                cursor={"pointer"}
                _hover={{ background: "#b3b1b1" }}
                gap={"10px"}
                h={"10rem"}
              >
                {" "}
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "1.2rem" }}
                  fontWeight={"bold"}
                >
                  IS IT VALUABLE CARGO?
                </Text>
                <Text
                  ml="0.8rem"
                  fontSize={{ sm: "0.8rem", lg: "0.85rem" }}
                  fontWeight={"medium"}
                  fontStyle={"italic"}
                  w="85%"
                >
                  For high-value items it is important the necessary steps are
                  taken to handle goods with a high level of care and security.
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              w={{ sm: "100%", lg: "100%" }}
              alignItems={"center"}
              justifyContent={"center"}
              py={"0.3rem"}
              px={"1rem"}
              bgColor={"#F4F4F4"}
              borderRadius={"15px"}
              border={"1px solid #707070"}
            >
              <Text fontSize={"15px"} fontWeight={"bold"}>
                WITH 170+ DRY CARGO BROKERS, WE COVER ALL COMMODITIES, OF ALL
                SIZES, ACROSS ALL TRADE ROUTES – ALL BACKED BY 24/7 SUPPORT FOR
                OUR CLIENTS
              </Text>
            </Box>
          </Flex>
          <Spacer />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default SalesOverview;
