import React from "react";
import {
  Box,
  Text,
  Heading,
  Stack,
  Image,
  Button,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const AgencyLanding = () => {
  return (
    <Box bg="#fff5f0" px={6} py={12}>
      {/* Logo row */}
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6} mb={12}>
  {[1, 2, 3, 4, 5].map((num) => (
    <Box key={num} textAlign="center">
      <Image
        src={`/logo${num}.png`}
        alt={`logo${num}`}
        maxH="40px"
        mx="auto"
        objectFit="contain"
      />
    </Box>
  ))}
</SimpleGrid>


      {/* Top section */}
      <Stack direction={{ base: "column", md: "row" }} spacing={10} mb={12} align="center">
        {/* Image */}
        <Box flex="1" position="relative">
          <Image src="/pic2.png" alt="Workspace" borderRadius="md" />
        </Box>

        {/* Text content */}
        <Box flex="1">
          <Text textTransform="uppercase" fontSize="xs" color="pink.500" mb={1}>
            About
          </Text>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="extrabold" mb={3}>
            An Experience <br /> Design Agency
          </Heading>
          <Text color="gray.600" mb={6}>
            Our full-service range includes technical skills, design, and business understanding to
            bring your ideas to life.
          </Text>
          <Button colorScheme="gray" bg="black" color="white" size="sm">
            About Us
          </Button>
        </Box>
      </Stack>

      {/* Stats */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
        {[
          { number: "42%", label: "Years of experience" },
          { number: "73+", label: "Agency members" },
          { number: "5,000", label: "Projects complete" },
        ].map((stat, idx) => (
          <Box key={idx} textAlign="center">
            <Heading fontSize="2xl" fontWeight="bold">{stat.number}</Heading>
            <Text color="gray.500">{stat.label}</Text>
          </Box>
        ))}
      </SimpleGrid>

    {/* Key Areas Section */}
<Box mb={16}>
  <Flex
    direction={{ base: "column", md: "row" }}
    justify="space-between"
    gap={10}
    align="flex-start"
  >
    {/* Left Side */}
    <Box flex="1">
      <Text textTransform="uppercase" fontSize="xs" color="pink.500" mb={2}>
        How we work
      </Text>
      <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="extrabold" mb={4}>
        Making Your Projects <br /> Look Awesome
      </Heading>
      <Text color="gray.600" mb={4}>
        Technical skills, design, business understanding, ability to put themselves in the
        merchant’s shoes.
      </Text>
      <Text fontWeight="medium" fontSize="sm" color="black">
        Read More
      </Text>
    </Box>

    {/* Right Side - Numbered List */}
    <Stack flex="1" spacing={6}>
      {[
        "Full service range including",
        "Technical skills, design, business",
        "Themselves in the merchant's",
      ].map((item, idx) => (
        <Flex key={idx} align="flex-start" gap={4}>
          <Text fontSize="3xl" fontWeight="extrabold" color="black" lineHeight="1">
            {idx + 1}
          </Text>
          <Text fontWeight="bold" color="black">{item}</Text>
        </Flex>
      ))}
    </Stack>
  </Flex>
</Box>



     {/* Video Section */}
<Box mb={16}>
  <Flex
    direction={{ base: "column", md: "row" }}
    gap={10}
    align="center"
    justify="space-between"
  >
    {/* Video player */}
    <Box
      position="relative"
      w={{ base: "100%", md: "50%" }}
      borderRadius="xl"
      overflow="hidden"
    >
      <Box position="relative">
        <video
          src="/vdo.mp4"
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
        />
        {/* Optional: Time duration badge */}
        <Box
          position="absolute"
          bottom="2"
          left="2"
          bg="blackAlpha.700"
          color="white"
          px={2}
          py={0.5}
          fontSize="xs"
          borderRadius="sm"
        >
          1:45
        </Box>
      </Box>
    </Box>

    {/* Text section */}
    <Box w={{ base: "100%", md: "40%" }} textAlign={{ base: "left", md: "left" }} mt={{ base: 6, md: 0 }}>
      <Text textTransform="uppercase" fontSize="xs" color="pink.500" mb={1}>
        Video Reel
      </Text>
      <Heading fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" mb={2} color="gray.800">
        Unlock The Greatest <br /> Value Possible
      </Heading>
      <Text color="gray.600">
        Design, business understanding, ability to put themselves in the merchant’s shoes meant to partner.
      </Text>
    </Box>
  </Flex>
</Box>

    </Box>
  );
};

export default AgencyLanding;
