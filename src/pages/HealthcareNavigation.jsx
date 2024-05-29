import { Box, Heading, Text, VStack, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HealthcareNavigation = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Healthcare Navigation</Heading>
      <Text fontSize="lg">
        Welcome to the Healthcare Navigation Module. Here you will find information on healthcare options, assistance in understanding and enrolling in appropriate healthcare plans, and resources for mental health support and wellness programs.
      </Text>
      <Box>
        <Heading as="h2" size="lg">Healthcare Options</Heading>
        <VStack spacing={4} align="stretch">
          <Text>Learn about COBRA and health insurance marketplaces.</Text>
          <Link as={RouterLink} to="/resources/cobra" color="teal.500">COBRA</Link>
          <Link as={RouterLink} to="/resources/health-insurance-marketplaces" color="teal.500">Health Insurance Marketplaces</Link>
        </VStack>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Enrollment Assistance</Heading>
        <Text>
          Get help in understanding and enrolling in appropriate healthcare plans.
        </Text>
        <Button as={RouterLink} to="/healthcare/enrollment-assistance" colorScheme="teal" size="lg">
          Get Assistance
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Mental Health Support</Heading>
        <Text>
          Access resources for mental health support and wellness programs.
        </Text>
        <Button as={RouterLink} to="/healthcare/mental-health-support" colorScheme="teal" size="lg">
          Access Resources
        </Button>
      </Box>
    </VStack>
  </Box>
);

export default HealthcareNavigation;