import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Courses = () => (
  <Box p={4}>
    <VStack spacing={6} align="stretch">
      <Heading as="h1" size="xl" textAlign="center">Online Courses</Heading>
      <Text fontSize="lg">
        Browse through a variety of online courses to enhance your skills.
      </Text>
      <Text>
        [Content on online courses...]
      </Text>
    </VStack>
  </Box>
);

export default Courses;