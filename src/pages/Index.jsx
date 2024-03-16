import React, { useState } from "react";
import { Box, Button, Container, Input, FormControl, FormLabel, Heading, Stack, Divider, Text, VStack, HStack, useToast, Image } from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEnvelope, FaHome } from "react-icons/fa";

const Index = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const toast = useToast();

  const handleRegister = (event) => {
    event.preventDefault();
    // Placeholder for registration logic
    setIsRegistered(true);
    toast({ title: "Registration successful!", status: "success", duration: 2000 });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Placeholder for login logic
    setIsLoggedIn(true);
    setUser({ name: "John Doe" }); // Mock user data
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  if (!isRegistered) {
    return (
      <Container>
        <Heading as="h1" size="xl" textAlign="center" my={6}>
          Register
        </Heading>
        <form onSubmit={handleRegister}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input id="name" placeholder="John Doe" type="text" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" placeholder="john@example.com" type="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" placeholder="••••••••" type="password" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="address">Address</FormLabel>
              <Input id="address" placeholder="123 Main St" type="text" />
            </FormControl>
            <Button leftIcon={<FaUserAlt />} type="submit" colorScheme="blue" size="lg" fontSize="md">
              Register
            </Button>
          </VStack>
        </form>
      </Container>
    );
  } else if (!isLoggedIn) {
    return (
      <Container>
        <Heading as="h1" size="xl" textAlign="center" my={6}>
          Login
        </Heading>
        <form onSubmit={handleLogin}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" placeholder="john@example.com" type="email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" placeholder="••••••••" type="password" />
            </FormControl>
            <Button leftIcon={<FaLock />} type="submit" colorScheme="blue" size="lg" fontSize="md">
              Login
            </Button>
          </VStack>
        </form>
      </Container>
    );
  } else {
    return (
      <Container>
        <VStack spacing={6}>
          <Heading as="h1" size="xl" textAlign="center" my={6}>
            Dashboard
          </Heading>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading as="h2" size="md">
              Welcome, {user.name}
            </Heading>
            <Text mt={4}>This is your dashboard. You can place user-specific information here.</Text>
          </Box>
          <Button leftIcon={<FaHome />} colorScheme="blue" size="lg" onClick={handleLogout}>
            Logout
          </Button>
        </VStack>
      </Container>
    );
  }
};

export default Index;
