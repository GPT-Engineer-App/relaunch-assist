import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const SeveranceAgreements = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Severance Agreements</Heading>
      <Text fontSize="lg">
        Here you will find detailed information and guides on severance agreements.
      </Text>
      <Text>
        [Content on severance agreements...]
      </Text>
    </VStack>
  </Box>
);

export default SeveranceAgreements;