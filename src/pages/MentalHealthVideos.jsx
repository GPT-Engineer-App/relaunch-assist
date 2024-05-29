import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const MentalHealthVideos = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Mental Health Videos</Heading>
      <Text fontSize="lg">
        Watch videos on various mental health topics to help you understand and manage your mental well-being.
      </Text>
      <Text>
        [Content on mental health videos...]
      </Text>
    </VStack>
  </Box>
);

export default MentalHealthVideos;