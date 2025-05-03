import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Collapse,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "A digital agency is a business",
    answer:
      "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
  {
    question: "Hire to outsource your digital",
    answer:
      "You can hire a digital agency to outsource your digital marketing efforts efficiently.",
  },
  {
    question: "Marketing efforts",
    answer:
      "Marketing efforts include SEO, social media, email campaigns, and more.",
  },
  {
    question: "Can provide your business",
    answer:
      "Agencies can offer business insights and marketing strategies tailored to your needs.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const toggleFaq = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <Box bg="#fdf0ea" px={{ base: 4, md: 16 }} py={{ base: 10, md: 20 }}>
      <Box className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto">
        {/* Left content */}
        <Box mb={10} maxW="md">
          <Text fontSize="sm" color="red.400" fontWeight="bold" mb={2}>
            FAQ
          </Text>
          <Heading as="h2" size="xl" mb={4}>
            Frequently Asked Questions
          </Heading>
          <Text color="gray.700" mb={4}>
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </Text>
          <Text fontWeight="bold" color="gray.800" cursor="pointer">
            Contact Us
          </Text>
        </Box>

        {/* Right Accordion with outer border */}
        <Box
          w="full"
          maxW="lg"
          border="1px solid #f3d6cd"
          borderRadius="md"
          overflow="hidden"
          bg="white"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Box key={index}>
                <Box
                  bg={isOpen ? "white" : "#fdf0ea"}
                  px={4}
                  py={4}
                  transition="all 0.2s"
                  boxShadow={isOpen ? "md" : "none"}
                >
                  <HStack
                    justify="space-between"
                    cursor="pointer"
                    onClick={() => toggleFaq(index)}
                  >
                    <Text fontWeight="bold">{faq.question}</Text>
                    <Box
                      bg="#f15b43"
                      borderRadius="full"
                      p={2}
                      transition="transform 0.3s"
                      transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                    >
                      <FaChevronDown color="white" />
                    </Box>
                  </HStack>
                  <Collapse in={isOpen} animateOpacity>
                    <Text mt={3} color="gray.600">
                      {faq.answer}
                    </Text>
                  </Collapse>
                </Box>
                {index !== faqs.length - 1 && (
                  <Divider borderColor="#f3d6cd" />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSection;
