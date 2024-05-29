import { Box, Heading, Text, VStack, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const TherapyAndWellness = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Therapy and Wellness</Heading>
      <Text fontSize="lg">
        Access resources for therapy and wellness, including online counseling sessions, self-guided mental health resources, and stress management programs.
      </Text>
      <Box>
        <Heading as="h2" size="lg">Online Counseling</Heading>
        <Text>Connect with licensed therapists for online counseling sessions.</Text>
        <Button as={RouterLink} to="/therapy-and-wellness/online-counseling" colorScheme="teal" size="lg">
          Connect Now
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Self-Guided Mental Health Resources</Heading>
        <VStack spacing={4} align="stretch">
          <Link as={RouterLink} to="/therapy-and-wellness/articles" color="teal.500">Articles</Link>
          <Link as={RouterLink} to="/therapy-and-wellness/videos" color="teal.500">Videos</Link>
          <Link as={RouterLink} to="/therapy-and-wellness/exercises" color="teal.500">Exercises</Link>
        </VStack>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Stress Management Programs</Heading>
        <Text>Participate in programs designed to help you manage stress and build resilience.</Text>
        <Button as={RouterLink} to="/therapy-and-wellness/stress-management" colorScheme="teal" size="lg">
          Learn More
        </Button>
      </Box>
    </VStack>
  </Box>
);

export default TherapyAndWellness;