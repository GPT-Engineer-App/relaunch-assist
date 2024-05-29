import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const UnemploymentBenefits = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Unemployment Benefits</Heading>
      <Text fontSize="lg">
        Here you will find detailed information and guides on unemployment benefits.
      </Text>
      <Text>
        [Content on unemployment benefits...]
      </Text>
    </VStack>
  </Box>
);

export default UnemploymentBenefits;