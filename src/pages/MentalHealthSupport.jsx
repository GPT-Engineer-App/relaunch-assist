import { Box, Heading, Text, VStack, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const MentalHealthSupport = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Mental Health Support</Heading>
      <Text fontSize="lg">
        Access resources for mental health support and wellness programs.
      </Text>
      <Box>
        <Heading as="h2" size="lg">Resources</Heading>
        <VStack spacing={4} align="stretch">
          <Text>Find articles, videos, and exercises for mental health support.</Text>
          <Link as={RouterLink} to="/resources/mental-health-articles" color="teal.500">Articles</Link>
          <Link as={RouterLink} to="/resources/mental-health-videos" color="teal.500">Videos</Link>
          <Link as={RouterLink} to="/resources/mental-health-exercises" color="teal.500">Exercises</Link>
        </VStack>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Online Counseling</Heading>
        <Text>
          Connect with licensed therapists for online counseling sessions.
        </Text>
        <Button as={RouterLink} to="/therapy-and-wellness" colorScheme="teal" size="lg">
          Connect Now
        </Button>
      </Box>
    </VStack>
  </Box>
);

export default MentalHealthSupport;