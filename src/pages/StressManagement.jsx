import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const StressManagement = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Stress Management Programs</Heading>
      <Text fontSize="lg">
        Participate in programs designed to help you manage stress and build resilience.
      </Text>
      <Text>
        [Content on stress management programs...]
      </Text>
    </VStack>
  </Box>
);

export default StressManagement;