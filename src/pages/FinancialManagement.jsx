import { Box, Heading, Text, VStack, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const FinancialManagement = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Financial Management</Heading>
      <Text fontSize="lg">
        Welcome to the Financial Management Module. Here you will find tools and resources to help you manage your finances effectively.
      </Text>
      <Box>
        <Heading as="h2" size="lg">Tools and Calculators</Heading>
        <VStack spacing={4} align="stretch">
          <Link as={RouterLink} to="/financial-management/budgeting" color="teal.500">Budgeting</Link>
          <Link as={RouterLink} to="/financial-management/financial-planning" color="teal.500">Financial Planning</Link>
          <Link as={RouterLink} to="/financial-management/401k-management" color="teal.500">401(k) Management</Link>
        </VStack>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Advice and Strategies</Heading>
        <Text>
          Get advice on debt management, insurance, and investment strategies.
        </Text>
        <Button as={RouterLink} to="/financial-management/advice" colorScheme="teal" size="lg">
          Get Advice
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Connect with Financial Advisors</Heading>
        <Text>
          Get personalized guidance from financial advisors.
        </Text>
        <Button as={RouterLink} to="/financial-management/connect-advisors" colorScheme="teal" size="lg">
          Connect Now
        </Button>
      </Box>
    </VStack>
  </Box>
);

export default FinancialManagement;