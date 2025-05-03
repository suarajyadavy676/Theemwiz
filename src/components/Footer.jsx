import React from "react";
import { Box, Flex, Stack, Text, Link, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#FFF3EE" color="black" px={6} py={10}>
      <Flex
        direction={isMobile ? "column" : "row"}
        justify={isMobile ? "center" : "space-between"} // Center for mobile, space-between for desktop
        align={isMobile ? "center" : "flex-start"} // Align center for mobile, flex-start for desktop
        wrap="wrap"
        gap={8}
      >
        {/* Branding */}
        <Box>
          <Text fontWeight="bold" fontSize="lg">Agency</Text>
        </Box>

        {/* Menu */}
        <Stack spacing={2} align={isMobile ? "center" : "flex-start"}> {/* Center items for mobile */}
          <Text fontSize="sm" fontWeight="bold" color="red.400">MENU</Text>
          {["About", "Services", "Blog", "Contact"].map((item) => (
            <Link key={item} href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
              {item}
            </Link>
          ))}
        </Stack>

        {/* Services */}
        <Stack spacing={2} align={isMobile ? "center" : "flex-start"}> {/* Center items for mobile */}
          <Text fontSize="sm" fontWeight="bold" color="red.400">SERVICE</Text>
          {["Design", "Development", "Marketing", "See More"].map((item) => (
            <Link key={item} href="#" fontSize="sm" _hover={{ textDecoration: "underline" }}>
              {item}
            </Link>
          ))}
        </Stack>

        {/* Social Icons */}
        <Flex
          mt={isMobile ? 4 : 0}
          gap={4}
          justify={isMobile ? "center" : "flex-start"} // Center icons for mobile
        >
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebookF />} borderRadius="full" bg="red.300" color="white" _hover={{ bg: "red.400" }} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} borderRadius="full" bg="red.300" color="white" _hover={{ bg: "red.400" }} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} borderRadius="full" bg="red.300" color="white" _hover={{ bg: "red.400" }} />
        </Flex>
      </Flex>

      {/* Bottom bar */}
      <Flex
        mt={10}
        direction={isMobile ? "column" : "row"}
        justify="space-between"
        align="center" // Center items in bottom bar for mobile
        textAlign={isMobile ? "center" : "left"}
      >
        <Text fontSize="xs" color="gray.600">© 2022 Leaqiq. All Rights Reserved.</Text>
        <Flex gap={6} mt={isMobile ? 2 : 0} justify={isMobile ? "center" : "flex-start"}>
          <Link href="#" fontSize="xs" color="gray.600">Terms of Use</Link>
          <Link href="#" fontSize="xs" color="gray.600">Privacy Policy</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
