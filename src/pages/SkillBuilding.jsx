import { Box, Heading, Text, VStack, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SkillBuilding = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Skill Building</Heading>
      <Text fontSize="lg">
        Access online courses, workshops, and webinars for skill development. Get personalized learning paths based on your career goals and interests. Connect with mentors and industry experts for guidance and advice.
      </Text>
      <Box>
        <Heading as="h2" size="lg">Online Courses</Heading>
        <Text>Explore a variety of online courses to enhance your skills.</Text>
        <Button as={RouterLink} to="/skill-building/courses" colorScheme="teal" size="lg">
          Browse Courses
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Workshops and Webinars</Heading>
        <Text>Participate in workshops and webinars to gain practical knowledge.</Text>
        <Button as={RouterLink} to="/skill-building/workshops" colorScheme="teal" size="lg">
          View Workshops
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Personalized Learning Paths</Heading>
        <Text>Get personalized learning paths based on your career goals and interests.</Text>
        <Button as={RouterLink} to="/skill-building/learning-paths" colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>
      <Box>
        <Heading as="h2" size="lg">Mentorship</Heading>
        <Text>Connect with mentors and industry experts for guidance and advice.</Text>
        <Button as={RouterLink} to="/skill-building/mentorship" colorScheme="teal" size="lg">
          Find a Mentor
        </Button>
      </Box>
    </VStack>
  </Box>
);

export default SkillBuilding;