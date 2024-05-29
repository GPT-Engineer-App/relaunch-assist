import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Workshops = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Workshops and Webinars</Heading>
      <Text fontSize="lg">
        Participate in workshops and webinars to gain practical knowledge.
      </Text>
      <Text>
        [Content on workshops and webinars...]
      </Text>
    </VStack>
  </Box>
);

export default Workshops;