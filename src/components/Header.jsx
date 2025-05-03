// components/Header.jsx
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaHouseDamage } from "react-icons/fa";
import { Link } from "react-router-dom"; // or use `next/link` for Next.js

const navLinks = ["About", "Services", "Pricing", "Blog"];

const NavLink = ({ children }) => (
  <ChakraLink
    px={3}
    py={1}
    rounded="md"
    fontWeight="medium"
    _hover={{ bg: "purple.600", color: "white" }}
    href={`#${children.toLowerCase()}`}
  >
    {children}
  </ChakraLink>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#1A1A2E" px={4} py={2} color="white">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <HStack spacing={2}>
          <Box display="flex" alignItems="center">
            <Image
              src="/logo.png"
              alt="Agency Logo"
              height="40px" // Adjust this as needed
              width="auto"
              objectFit="contain"
            />
          </Box>
        </HStack>

        {/* Desktop Nav Links */}
        <HStack
          as="nav"
          spacing={8}
          display={{ base: "none", md: "flex" }}
          px={4}
          py={1}
          borderRadius="md"
        >
          {navLinks.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* Contact button + hamburger */}
        <Flex alignItems="center">
          <Button
            variant="ghost"
            fontWeight="bold"
            size="sm"
            display={{ base: "none", md: "inline-flex" }}
            color="white"
            _hover={{ bg: "purple.600", color: "white" }}
          >
            CONTACT
          </Button>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            ml={2}
            variant="ghost"
            color="white"
            border="1px solid white"
            _hover={{
              bg: "transparent",
              border: "1px solid white",
            }}
            _active={{
              bg: "transparent",
              border: "1px solid white",
            }}
          />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {navLinks.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Button
              variant="ghost"
              fontWeight="bold"
              size="sm"
              color="white"
              _hover={{ bg: "purple.600", color: "white" }}
            >
              CONTACT
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
