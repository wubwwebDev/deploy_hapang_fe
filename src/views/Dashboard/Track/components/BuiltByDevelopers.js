// Chakra imports
import {
  Flex,
  Spacer,
  Text,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  SimpleGrid,
  Stack,
  Box,
  InputGroup,
  Input,
  InputLeftElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React, { useState } from "react";
import Waves from "assets/img/BG-wave.svg";

import Ship from "assets/img/ship_path.svg";
import DocPath from "assets/img/doc_path.svg";
import ShipP from "assets/img/ship.svg";
import Calender from "assets/img/Calender.svg";
import ContinerPic from "assets/img/container.svg";
import Delivery from "assets/img/delivery.svg";

// react icons
import { BsArrowRight } from "react-icons/bs";
import { firestore } from "../../../../firebase";
import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  or,
  and,
  getCountFromServer,
} from "firebase/firestore";

const BuiltByDevelopers = ({ title, name, description, image }) => {
  const [voyageNumber, setVoyageNumber] = useState("");
  const [billNumber, setBillNumber] = useState("");
  const [proData, setProdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const textColor = useColorModeValue("gray.700", "white");

  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  function formatDate(dateString) {
    let date;
    if (dateString) {
      date = new Date(dateString.seconds * 1000);
    } else {
      date = new Date();
    }
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  const fetchData = async () => {
    if (voyageNumber == "" || billNumber == "") {
      setError("Fields Can't Be Empty");
      return;
    }
    setLoading(true);
    const trackCouriersRef = collection(firestore, "trackCouriers");

    const q = query(
      trackCouriersRef,
      and(
        where("vesselNumber", "==", voyageNumber),
        or(
          where("blNumber", "==", billNumber),
          where("proNumber", "==", billNumber),
          where("bookingNumber", "==", billNumber)
        )
      )
    );
    const getCount = await getCountFromServer(q);
    let count = getCount.data().count;
    if (count) {
      const snapShot = await getDocs(q);
      snapShot.forEach((doc) => {
        let d = doc.data();
        if (d["dateOfDelivery"]) {
          d["dateOfDelivery"] = formatDate(d["dateOfDelivery"]);
        }
        if (d["dateOfDispatch"]) {
          d["dateOfDispatch"] = formatDate(d["dateOfDispatch"]);
        }
        d["dateOfTransit"] = formatDate(null);

        setProdata(d);
        setLoading(false);
      });
      setVoyageNumber("");
      setBillNumber("");
      return;
    } else {
      setLoading(false);
      setError("Could not Find Data");
      return;
    }
  };

  const anotherShipMent = () => {
    setProdata(null);
    setError("");
  };

  return (
    <Card minHeight="290.5px" p="1.2rem">
      <CardBody w="100%" overflow="hidden">
        <Flex flexDirection={{ sm: "column", lg: "row" }} w="100%">
          <Flex
            flexDirection="column"
            h="100%"
            lineHeight="1.6"
            width={{ lg: "45%" }}
          >
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
                  href="/track"
                  color={"blackAlpha.800"}
                  fontWeight={"semibold"}
                  fontSize={"0.875rem"}
                >
                  Track
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Text
              fontSize={[null, "1rem", "1rem", "2.5rem", "2.5rem"]}
              color={"#000000"}
              fontWeight="bold"
            >
              Container Tracking
            </Text>
            <Text
              fontSize={[null, "1rem", "0.85rem", "1.625rem", "1.625rem"]}
              fontWeight="normal"
            >
              Reach live position of your shipment.
            </Text>
            <Spacer />
            <Flex
              mt={{ sm: "1rem", lg: "3rem" }}
              flexDirection={"column"}
              gap={"2rem"}
            >
              {" "}
              {proData ? (
                <>
                  {" "}
                  <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3 }}
                    spacingY="20px"
                    w={[null, "10vw", null, null, "90vw", null]}
                  >
                    <Box>
                      <Text
                        fontSize={"1rem"}
                        fontWeight={"bold"}
                        color={"#9F9F9F"}
                      >
                        PRO NO
                      </Text>
                      <Text fontSize={"1.5rem"} fontWeight={"medium"}>
                        {proData?.proNumber}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize={"1rem"}
                        fontWeight={"bold"}
                        color={"#9F9F9F"}
                      >
                        VOYAGE NUMBER
                      </Text>
                      <Text fontSize={"1.5rem"} fontWeight={"medium"}>
                        {proData?.vesselNumber}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize={"1rem"}
                        fontWeight={"bold"}
                        color={"#9F9F9F"}
                      >
                        STATUS
                      </Text>
                      <Text fontSize={"1.5rem"} fontWeight={"medium"}>
                        {proData?.status ? proData?.status : "Pending"}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize={"1rem"}
                        fontWeight={"bold"}
                        color={"#9F9F9F"}
                      >
                        BL NO
                      </Text>
                      <Text fontSize={"1.5rem"} fontWeight={"medium"}>
                        {proData?.blNumber}
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontSize={"1rem"}
                        fontWeight={"bold"}
                        color={"#9F9F9F"}
                      >
                        BOOKING NO
                      </Text>
                      <Text fontSize={"1.5rem"} fontWeight={"medium"}>
                        {proData?.bookingNumber}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        fontSize={"1rem"}
                        fontWeight={"bold"}
                        color={"#9F9F9F"}
                      >
                        REMARKS
                      </Text>
                      <Text fontSize={"1.5rem"} fontWeight={"medium"}>
                        {proData?.remark}
                      </Text>
                    </Box>
                  </SimpleGrid>
                  <Box position={"relative"}>
                    <SimpleGrid
                      columns={{ sm: 1, md: 2, lg: 3 }}
                      gap={["20px", "20px", null, "0px", null]}
                      w={[null, "10vw", null, null, "80vw", null]}
                      zIndex={100}
                    >
                      {/* Port Origin Card */}
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"2fr 1fr"}
                        width={[null, "100%", "100%", "80%", "70%", null]}
                        height={"9rem"}
                        position={"relative"}
                        pl={["", "", "", "", ".5rem", ""]}
                      >
                        <Box
                          background={
                            "transparent linear-gradient(1deg, #FFFFFF 0%, #D3D3D3D5 100%) 0% 0% no-repeat padding-box"
                          }
                          pos="absolute"
                          height={"100%"}
                          width={"100%"}
                          borderRadius={"10px"}
                          border={"0.5px solid #C0C1C3"}
                          _hover={{ top: -2 }}
                        ></Box>
                        {/* content */}
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"space-evenly"}
                          ml={"0.5rem"}
                          zIndex={"1"}
                        >
                          <Text
                            fontSize={"1rem"}
                            color={"#525151"}
                            fontWeight={"bold"}
                          >
                            PORT ORIGIN
                          </Text>
                          <Box>
                            <Text fontSize={"1.625rem"} fontWeight={"medium"}>
                              {proData?.portOrigin}
                            </Text>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap={"5px"}
                            >
                              <Box
                                height={"15px"}
                                width={"15px"}
                                bgRepeat="no-repeat"
                                zIndex="1"
                                top="0"
                                bgImage={Calender}
                                bgSize="contain"
                              ></Box>
                              <Text fontSize={"1rem"} fontWeight={"semibold"}>
                                {proData?.dateOfDispatch}
                              </Text>
                            </Box>
                          </Box>
                        </Box>
                        {/* Image */}
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          {" "}
                          <Box
                            height={"80px"}
                            width={"80px"}
                            bgRepeat="no-repeat"
                            zIndex="1"
                            top="0"
                            bgImage={ContinerPic}
                            bgSize="contain"
                          ></Box>
                        </Box>
                      </Box>
                      {/* In Transit */}
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"2fr 1fr"}
                        width={[null, "100%", "100%", "80%", "70%", null]}
                        height={"9rem"}
                        position={"relative"}
                        pl={["", "", "", "", ".5rem", ""]}
                      >
                        <Box
                          background={
                            "transparent linear-gradient(1deg, #FFFFFF 0%, #D3D3D3D5 100%) 0% 0% no-repeat padding-box"
                          }
                          pos="absolute"
                          height={"100%"}
                          width={"100%"}
                          borderRadius={"10px"}
                          border={"0.5px solid #C0C1C3"}
                          _hover={{ top: -2 }}
                        ></Box>
                        {/* content */}
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"space-evenly"}
                          ml={"0.5rem"}
                          zIndex={"1"}
                        >
                          <Text
                            fontSize={"1rem"}
                            color={"#525151"}
                            fontWeight={"bold"}
                          >
                            IN TRANSIT
                          </Text>
                          <Box>
                            <Text fontSize={"1.625rem"} fontWeight={"medium"}>
                              Sailing
                            </Text>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap={"5px"}
                            >
                              <Box
                                height={"15px"}
                                width={"15px"}
                                bgRepeat="no-repeat"
                                zIndex="1"
                                top="0"
                                bgImage={Calender}
                                bgSize="contain"
                              ></Box>
                              <Text fontSize={"1rem"} fontWeight={"semibold"}>
                                {proData?.dateOfTransit}
                              </Text>
                            </Box>
                          </Box>
                        </Box>
                        {/* Image */}
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          {" "}
                          <Box
                            height={"80px"}
                            width={"80px"}
                            bgRepeat="no-repeat"
                            zIndex="1"
                            top="0"
                            bgImage={ShipP}
                            bgSize="contain"
                          ></Box>
                        </Box>
                      </Box>
                      {/* Port Delivery */}
                      <Box
                        display={"grid"}
                        gridTemplateColumns={"2fr 1fr"}
                        width={[null, "100%", "100%", "80%", "70%", null]}
                        height={"9rem"}
                        position={"relative"}
                        pl={["", "", "", "", ".5rem", ""]}
                      >
                        <Box
                          background={
                            "transparent linear-gradient(1deg, #FFFFFF 0%, #D3D3D3D5 100%) 0% 0% no-repeat padding-box"
                          }
                          pos="absolute"
                          height={"100%"}
                          width={"100%"}
                          borderRadius={"10px"}
                          border={"0.5px solid #C0C1C3"}
                          _hover={{ top: -2 }}
                        ></Box>
                        {/* content */}
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"space-evenly"}
                          ml={"0.5rem"}
                          zIndex={"1"}
                        >
                          <Text
                            fontSize={"1rem"}
                            color={"#525151"}
                            fontWeight={"bold"}
                          >
                            PORT DELIVERY
                          </Text>
                          <Box>
                            <Text fontSize={"1.625rem"} fontWeight={"medium"}>
                              {proData?.portDelivery}
                            </Text>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              gap={"5px"}
                            >
                              <Box
                                height={"15px"}
                                width={"15px"}
                                bgRepeat="no-repeat"
                                zIndex="1"
                                top="0"
                                bgImage={Calender}
                                bgSize="contain"
                              ></Box>
                              <Text fontSize={"1rem"} fontWeight={"semibold"}>
                                {proData.dateOfDelivery}
                              </Text>
                            </Box>
                          </Box>
                        </Box>
                        {/* Image */}
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          {" "}
                          <Box
                            height={"80px"}
                            width={"80px"}
                            bgRepeat="no-repeat"
                            zIndex="1"
                            top="0"
                            bgImage={Delivery}
                            bgSize="contain"
                          ></Box>
                        </Box>
                      </Box>
                    </SimpleGrid>
                    <Box
                      width={"100vw"}
                      height={"200px"}
                      position={"absolute"}
                      bgImage={Waves}
                      top={"60px"}
                      zIndex={0}
                      display={[
                        null,
                        "none",
                        "none",
                        "block",
                        "block",
                        "block",
                      ]}
                    ></Box>
                  </Box>
                  <Button
                    // variant="no-hover"
                    my={{ sm: "1.5rem", lg: "1.5rem" }}
                    w={{ sm: "100%", lg: "45%" }}
                    background={"#000000"}
                    rightIcon={<BsArrowRight color="white" />}
                    onClick={() => {
                      anotherShipMent();
                    }}
                    _hover={{ bg: "#363739" }}
                    h={"3rem"}
                  >
                    <Text
                      fontSize={[null, "0.5rem", "0.45rem", "sm", "sm"]}
                      color={"white"}
                      fontWeight="bold"
                      cursor="pointer"
                      transition="all .5s ease"
                      my={{ sm: "1.5rem", lg: "0px" }}
                    >
                      TRACK ANOTHER SHIPMENT
                    </Text>
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Stack spacing={3} w={"100%"}>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mt={{ sm: "0.8rem", lg: "0.8rem" }}
                        ml={"0.25rem"}
                        borderRadius={"10px"}
                        height={"35px"}
                        width={"35px"}
                      >
                        <Box
                          height={"20px"}
                          width={"20px"}
                          bgRepeat="no-repeat"
                          zIndex="1"
                          top="0"
                          bgImage={Ship}
                          bgSize="contain"
                        ></Box>
                      </InputLeftElement>
                      <Input
                        type="text"
                        placeholder="Enter Voyage Number"
                        size="lg"
                        variant="filled"
                        value={voyageNumber}
                        onChange={(e) => setVoyageNumber(e.target.value)}
                        h="4rem"
                      />
                    </InputGroup>

                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        mt={{ sm: "0.8rem", lg: "0.8rem" }}
                        ml={"0.25rem"}
                        borderRadius={"10px"}
                        height={"35px"}
                        width={"35px"}
                      >
                        <Box
                          height={"20px"}
                          width={"20px"}
                          bgRepeat="no-repeat"
                          zIndex="1"
                          top="0"
                          bgImage={DocPath}
                          bgSize="contain"
                        ></Box>
                      </InputLeftElement>
                      <Input
                        type="text"
                        placeholder="Enter PRO Number/ BL Number/Booking Number"
                        size="lg"
                        variant="filled"
                        value={billNumber}
                        onChange={(e) => setBillNumber(e.target.value)}
                        h="4rem"
                      />
                    </InputGroup>
                  </Stack>
                  {error ? (
                    <Alert status="error">
                      <AlertIcon />
                      <AlertTitle>{error}</AlertTitle>
                    </Alert>
                  ) : (
                    ""
                  )}
                  <Button
                    my={{ sm: "0.5rem", lg: "0.5rem" }}
                    w={{ sm: "100%", lg: "35%" }}
                    background={loading ? "gold" : "black"}
                    _active={{
                      bg: "gold",
                      transform: "scale(0.98)",
                      borderColor: "#bec3c9",
                    }}
                    rightIcon={<BsArrowRight color="white" />}
                    _hover={{ bg: "#363739" }}
                    onClick={() => {
                      fetchData();
                    }}
                    isLoading={loading}
                    loadingText="Fetching"
                    zIndex={100}
                    h={"3rem"}
                  >
                    <Text
                      fontSize={[null, "0.5rem", "0.65rem", "sm", "sm"]}
                      color={"white"}
                      fontWeight="bold"
                      cursor="pointer"
                      transition="all .5s ease"
                      my={{ sm: "1.5rem", lg: "0px" }}
                    >
                      TRACK SHIPMENT
                    </Text>
                  </Button>
                </>
              )}
            </Flex>
          </Flex>
          <Spacer />
        </Flex>
      </CardBody>
      {proData == null ? (
        <Box
          width={"100%"}
          height={"200px"}
          position={"relative"}
          bgImage={Waves}
          bottom={"50px"}
        ></Box>
      ) : (
        ""
      )}
    </Card>
  );
};

export default BuiltByDevelopers;
