import { Box, Button, Text, Badge } from "@chakra-ui/react";
import React from "react";

// Feature item with correct icon styles
const FeatureItem = ({ text, active }) => (
  <Box className="flex items-center space-x-2">
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="16px"
      height="16px"
      borderRadius="full"
      bg={active ? "#E53E3E" : "#FED7D7"} // Solid red for +, faded red for -
      color="white"
      fontSize="10px"
      fontWeight="bold"
      lineHeight="1"
    >
      {active ? "+" : "–"}
    </Box>
    <Text fontWeight={active ? "bold" : "normal"}>{text}</Text>
  </Box>
);

// Main pricing card component
const PricingCard = ({ title, price, description, features, isPopular }) => {
  return (
    <Box
      className={`
        relative w-full max-w-sm flex flex-col justify-between
        border rounded-xl p-6 transition-all duration-300
        ${isPopular ? "bg-white scale-105 shadow-lg border-[#f5cfc3] z-10" : "bg-[#fff4ee] border-[#f5cfc3]"}
      `}
      style={isPopular ? { minHeight: '400px' } : {}}
    >
      {/* Popular Badge */}
      {isPopular && (
        <Box
          className="absolute -top-3 left-4 text-xs px-3 py-1 shadow"
          bg="#EF6D58"
          color="white"
          borderRadius="full"
          fontWeight="bold"
        >
          Popular
        </Box>
      )}

      {/* Title and Price */}
      <Box>
        <Text className="uppercase text-sm tracking-wider text-[#cc6f57] mb-1">
          {title}
        </Text>
        <Text fontSize="3xl" fontWeight="extrabold" className="text-[#2d2d2d]">
          {price}
        </Text>
        <Text className="text-sm text-gray-600 mt-1">{description}</Text>
      </Box>

      {/* Features List */}
      <Box className="space-y-2 my-6">
        {features.map((f, idx) => (
          <FeatureItem key={idx} text={f.label} active={f.active} />
        ))}
      </Box>

      {/* Contact Button */}
      <Button
        size="md"
        fontWeight="bold"
        textTransform="uppercase"
        rounded="full"
        bg={isPopular ? "#f15b43" : "white"}
        color={isPopular ? "white" : "black"}
        border={isPopular ? "none" : "1px solid #e2e2e2"}
        _hover={{
          opacity: 0.9,
          bg: isPopular ? "#e14a2c" : "#f9f9f9",
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default PricingCard;
