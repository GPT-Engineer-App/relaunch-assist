import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Mentorship = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Mentorship</Heading>
      <Text fontSize="lg">
        Connect with mentors and industry experts for guidance and advice.
      </Text>
      <Text>
        [Content on mentorship...]
      </Text>
    </VStack>
  </Box>
);

export default Mentorship;