import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Tag,
  Select,
} from "@chakra-ui/react";

const workItems = [
  {
    id: 1,
    category: "Design",
    title: "SOFA",
    image: "/sofa.png",
  },
  {
    id: 2,
    category: "Branding",
    title: "KeyBoard",
    image: "/keyboard.png",
  },
  {
    id: 3,
    category: "Illustration",
    title: "Work Media",
    image: "/work.png",
  },
  {
    id: 4,
    category: "Motion",
    title: "DDDone",
    image: "/dd.png",
  },
];

const categories = ["All", "Design", "Branding", "Illustration", "Motion"];

const LatestWorkSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All"
      ? workItems
      : workItems.filter((item) => item.category === filter);

  return (
    <Box bg="#1B1F36" color="white" py={16} px={{ base: 4, md: 20 }}>
      <Text color="#F4715F" textAlign={"center"} textTransform="uppercase" fontSize="sm" mb={2}>
        Portfolio
      </Text>
      <Heading size="xl" textAlign={"center"} fontWeight="bold" mb={6}>
        Latest Work
      </Heading>

      {/* Filter Controls */}
      <Box mb={8}>
        {/* Desktop Tabs and in center */}
        <Box display={{ base: "none", md: "flex", }} gap={4} justifyContent="center">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setFilter(cat)}
              variant="ghost"
              size="sm"
              colorScheme="whiteAlpha"
              fontWeight={filter === cat ? "bold" : "normal"}
              textDecoration={filter === cat ? "underline" : "none"}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Mobile Select */}
<Box display={{ base: "flex", md: "none" }} justifyContent="center" mt={4}>
  <Select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    bg="white"
    color="black"
    maxW="200px"
    textAlign="center"
  >
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </Select>
</Box>

      </Box>

      {/* Work Grid */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {filteredItems.map((item) => (
          <Box
            key={item.id}
            position="relative"
            borderRadius="md"
            overflow="hidden"
            height={{ base: "300px", md: "280px" }}
            bgImage={`url(${item.image})`}
            bgSize="cover"
            bgPosition="center"
          >
            {/* Overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="rgba(0,0,0,0.4)"
              zIndex={1}
            />

            {/* Content */}
            <Box
              position="absolute"
              bottom={4}
              left="50%"
              transform="translateX(-50%)"
              textAlign="center"
              zIndex={2}
            >
              <Tag
                colorScheme="whiteAlpha"
                borderRadius="full"
                px={3}
                mb={2}
                bg="whiteAlpha.800"
                color="black"
              >
                {item.category}
              </Tag>
              <Text fontSize="xl" fontWeight="bold">
                {item.title}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Explore More */}
      <Box mt={8} textAlign="center">
        <Button
          variant="outline"
          colorScheme="whiteAlpha"
          borderColor="whiteAlpha.400"
          _hover={{ bg: "whiteAlpha.100" }}
        >
          Explore More
        </Button>
      </Box>
    </Box>
  );
};

export default LatestWorkSection;
