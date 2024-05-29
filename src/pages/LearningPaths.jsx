import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const LearningPaths = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Personalized Learning Paths</Heading>
      <Text fontSize="lg">
        Get personalized learning paths based on your career goals and interests.
      </Text>
      <Text>
        [Content on personalized learning paths...]
      </Text>
    </VStack>
  </Box>
);

export default LearningPaths;