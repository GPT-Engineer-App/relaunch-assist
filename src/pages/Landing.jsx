import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Landing = () => (
  <Box p={4} textAlign="center">
    <VStack spacing={6}>
      <Heading as="h1" size="2xl">Welcome to ReLaunch</Heading>
      <Text fontSize="lg">
        Supporting laid-off employees with legal assistance, financial management, healthcare navigation, therapy and wellness resources, skill-building, job search tools, networking opportunities, and HR interaction management.
      </Text>
      <Button as={Link} to="/register" colorScheme="teal" size="lg">
        Get Started
      </Button>
    </VStack>
  </Box>
);

export default Landing;