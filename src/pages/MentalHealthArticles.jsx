import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const MentalHealthArticles = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Mental Health Articles</Heading>
      <Text fontSize="lg">
        Find articles on various mental health topics to help you understand and manage your mental well-being.
      </Text>
      <Text>
        [Content on mental health articles...]
      </Text>
    </VStack>
  </Box>
);

export default MentalHealthArticles;