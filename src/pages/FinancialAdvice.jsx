import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const FinancialAdvice = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Financial Advice</Heading>
      <Text fontSize="lg">
        Get advice on debt management, insurance, and investment strategies.
      </Text>
      <Text>
        [Content on financial advice...]
      </Text>
    </VStack>
  </Box>
);

export default FinancialAdvice;