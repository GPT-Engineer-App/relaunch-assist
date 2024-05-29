import { Box, Heading, Text, VStack, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const LegalAssistance = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Legal Assistance</Heading>
      <Text fontSize="lg">
        Welcome to the Legal Assistance Module. Here you will find resources and guides on severance agreements, unemployment benefits, and employment rights.
      </Text>
      <Box>
        <Heading as="h2" size="lg">Resources and Guides</Heading>
        <VStack spacing={4} align="stretch">
          <Link as={RouterLink} to="/resources/severance-agreements" color="teal.500">Severance Agreements</Link>
          <Link as={RouterLink} to="/resources/unemployment-benefits" color="teal.500">Unemployment Benefits</Link>
          <Link as={RouterLink} to="/resources/employment-rights" color="teal.500">Employment Rights</Link>
        </VStack>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Connect with Legal Experts</Heading>
        <Text>
          Get personalized advice and consultation from legal experts.
        </Text>
        <Button as={RouterLink} to="/connect-legal-experts" colorScheme="teal" size="lg">
          Connect Now
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Document Review Services</Heading>
        <Text>
          We offer document review services for severance agreements and employment contracts.
        </Text>
        <Button as={RouterLink} to="/document-review" colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>
    </VStack>
  </Box>
);

export default LegalAssistance;