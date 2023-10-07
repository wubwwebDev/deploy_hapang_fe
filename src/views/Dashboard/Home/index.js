// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import HomePicTwo from "assets/img/home_pic_2.png";

import React from "react";

import BuiltByDevelopers from "./components/BuiltByDevelopers";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function HomePage() {

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 1, xl: 1 }}
        row={{ lg: 1 }}
      >
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"Work with the rockets"}
          description={
            "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
          }
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my="26px"
      >
        <BuiltByDevelopers
          title={""}
          name={
            "Hapag is a leading global dry bulk operator, servicing its customers in their maritime transportation needs in the Panamax, Supramax, Handysize and Specialised Services segments."
          }
          description={
            "Partnerships with close customers are the core of our business, and considerable effort is put into visualising and meeting their needs. Long-Term perspectives drive investments aimed at building personal relations and cooperation. With an asset light business model and a strong focus on risk assessment, we are a safe choice for your maritime transportation needs. Ultrabulk A/S is a subsidiary of Ultranav, a privately owned shipping company for over six decades, headquartered in Chile and operating globally with offices in 17 countries."
          }
          image={
            <Image
              src={HomePicTwo}
              alt="image"
              minWidth={{ md: "300px", lg: "auto" }}
              objectFit={"cover"}
            />
          }
        />
      </Grid>
    </Flex>
  );
}
