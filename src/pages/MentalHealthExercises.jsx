import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const MentalHealthExercises = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Mental Health Exercises</Heading>
      <Text fontSize="lg">
        Find exercises to help you manage stress and improve your mental well-being.
      </Text>
      <Text>
        [Content on mental health exercises...]
      </Text>
    </VStack>
  </Box>
);

export default MentalHealthExercises;