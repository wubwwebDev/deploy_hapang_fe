import {
  Flex,
  Spacer,
  Text,
  useColorModeValue,
  Box,
  Grid,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
import ProjectCard from "./ProjectCard";
import HomePicOne from "assets/img/iron-core.png";
import IronOre from "assets/img/iron_ore_scroll.png";
import CoalOre from "assets/img/coal_scroll.png";
import Grain from "assets/img/wheat_grain_scroll.png";
import Baxuite from "assets/img/bauxit_ore_scroll.png";

const scrollAbleData = [
  {
    image: IronOre,
    name: "Iron Ore",
    content:
      "Iron ore is the raw material used to make iron. Found in the earth’s crust, there are, A number of different iron ores. Iron ore is refined and turned into iron, which is then used in many industries across the globe.",
  },
  {
    image: CoalOre,
    name: "Coal",
    content:
      "Coal is typically mined using large machines. After extracting the coal from the ground, it is sent to a plant for cleaning and processing. Coal is mainly used to generate electric power, however it does have a number of other uses.",
  },
  {
    image: Grain,
    name: "Grain",
    content:
      "Grain (also known as cereals) is the name given to a group of commodities that includes wheat, oats, rice, and corn, which all come from harvesting the seeds of grasses.",
  },
  {
    image: Grain,
    name: "Scrap Metal",
    content:
      "Scrap metal refers to metal which is left over from the manufacturing process, or has been discarded by consumers, but which can be recycled and has monetary value.",
  },
  {
    image: Baxuite,
    name: "Baxuite",
    content:
      "Baxuite is one of the most abundant minerals on the planet.Brownish-yello in colour, it is generally found close to the earth's surface with layers varying from under 1 meter to over 40 meters",
  },
  {
    image: Baxuite,
    name: "Sand and Gravel",
    content:
      "Typically, sand is mined through a open pit but it can also be extracted from beaches and inland dunes, or dredged from sea beds and riverbeds. it is a valuable dry bulk commodity as it has a number of commercial uses",
  },
];

const Projects = () => {
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
            gap={"1rem"}
            overflowX={"hidden"}
          >
            <Box>
              <Text
                fontSize="2.5rem"
                lineHeight={"2.5rem"}
                color={textColor}
                fontWeight="bold"
              >
                What are the major dry bulk trades in shipping?
              </Text>
            </Box>

            <Text
              fontSize="sm"
              color="gray.400"
              w={{ sm: "100%", lg: "50%" }}
              fontWeight="normal"
            >
              Dry bulk cargo is split into two main groups: major bulks and
              minor bulks. Grain, Iron Ore and Coal account for around 67% of
              the world’s total dry bulk commodity trading. The remaining 33% is
              referred to as minor dry bulk trades as:
            </Text>
            <Box
              display={"grid"}
              columnGap={"1rem"}
              gridTemplateColumns={{ sm: "repeat(3,1fr)", lg: "repeat(6,1fr)" }}
              gridTemplateRows={{ sm: "repeat(2,1fr)" }}
              rowGap={"1rem"}
              width={{ sm: "100%", lg: "50%" }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F4F4F4"}
                p={"0.5rem"}
                borderRadius={"15px"}
                fontSize={"1rem"}
                fontWeight={"medium"}
                fontStyle={"italic"}
                color={"#060F1C"}
              >
                Grain
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F4F4F4"}
                p={"0.5rem"}
                borderRadius={"15px"}
                fontSize={"1rem"}
                fontWeight={"medium"}
                fontStyle={"italic"}
                color={"#060F1C"}
              >
                Iron Ore
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F4F4F4"}
                p={"0.5rem"}
                borderRadius={"15px"}
                fontSize={"1rem"}
                fontWeight={"medium"}
                fontStyle={"italic"}
                color={"#060F1C"}
              >
                Coal
              </Box>{" "}
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F4F4F4"}
                p={"0.5rem"}
                borderRadius={"15px"}
                fontSize={"1rem"}
                fontWeight={"medium"}
                fontStyle={"italic"}
                color={"#060F1C"}
              >
                Cement
              </Box>{" "}
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F4F4F4"}
                p={"0.5rem"}
                borderRadius={"15px"}
                fontSize={"1rem"}
                fontWeight={"medium"}
                fontStyle={"italic"}
                color={"#060F1C"}
              >
                Fertiliser
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                bgColor={"#F4F4F4"}
                p={"0.5rem"}
                borderRadius={"15px"}
                fontSize={"1rem"}
                fontWeight={"medium"}
                fontStyle={"italic"}
                color={"#060F1C"}
              >
                Scrap Metal
              </Box>
            </Box>
            <Box
              display={"flex"}
              overflowX={"auto"}
              gap="100px"
              css={{
                "&::-webkit-scrollbar": {
                  width: "1px",
                  height: "1px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "1px",
                  height: "1px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "grey",
                  borderRadius: "24px",
                  height: "1px",
                },
              }}
            >
              {scrollAbleData.map((data) => {
                return (
                  <ProjectCard
                    image={data.image}
                    name={data.name}
                    description={data.content}
                  />
                );
              })}
            </Box>
          </Flex>
          <Spacer />
        </Flex>
      </CardBody>
    </Card>
  );
};
export default Projects;
