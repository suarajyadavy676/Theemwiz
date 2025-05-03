import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";

const HeroSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#1B1F36" color="white" px={6} py={12}>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
        spacing={10}
      >
        {/* Left Content */}
        <Box flex="1" position="relative">
          {/* Star Image on Top Left */}
          <Image
            src="/Star.png"
            alt="star"
            position="absolute"
            top="10px"
            right="100px"
            boxSize="50px"
            zIndex="1"
            display={{ base: "none", md: "block" }}
          />

          <Text
            textTransform="uppercase"
            fontSize="sm"
            color="#f4715f"
            mb={2}
            fontWeight="bold"
          >
            Modern Studio
          </Text>
          <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={4}>
            We’re HelpTo Build Your <br />
            Dream Project
          </Heading>
          <Text color="gray.400" mb={6}>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </Text>
          <Stack direction="row" spacing={4} mb={8}>
            <Button colorScheme="orange" fontWeight="bold">
              HOW WE WORK
            </Button>
            <Button variant="outline" borderColor="white" color="white">
              Contact Us
            </Button>
          </Stack>

          {/* Quote Section */}
          <Flex mt={4} align="center">
            <Image
              src="/heroimg1.png"
              alt="avatar"
              boxSize="30px"
              borderRadius="full"
              mr={2}
            />
            <Box>
              <Text fontSize="xs" color="white">
                “Put themselves in the merchant's shoes”
              </Text>
              <Text fontSize="xs" color="gray.400">
                Meta Inc.
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Right Visual Section */}
        <Box flex="1" position="relative" w="full">
          <Box
            position="relative"
            w="full"
            h="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap={6}
          >
            {/* Laptop Image in Purple BG */}
            <Box
              bg="purple.600"
              borderRadius="2xl"
              p={6}
              w={{ base: "80%", md: "60%" }}
              position="relative"
            >
              <Image src="/pic.png" alt="Laptop" w="full" />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroSection;
