import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const COBRA = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">COBRA</Heading>
      <Text fontSize="lg">
        COBRA (Consolidated Omnibus Budget Reconciliation Act) provides eligible employees and their dependents the option to continue health insurance coverage after losing their job or experiencing a reduction in work hours.
      </Text>
      <Text>
        [Detailed information on COBRA...]
      </Text>
    </VStack>
  </Box>
);

export default COBRA;