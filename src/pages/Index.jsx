import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to ReLaunch</Heading>
        <Text fontSize="lg" textAlign="center">
          Supporting laid-off employees with legal assistance, financial management, healthcare navigation, therapy and wellness resources, skill-building, job search tools, networking opportunities, and HR interaction management.
        </Text>
        <Box>
          <Button as={Link} to="/register" colorScheme="teal" size="lg" m={2}>
            Get Started
          </Button>
          <Button as={Link} to="/login" colorScheme="teal" size="lg" m={2}>
            Login
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;