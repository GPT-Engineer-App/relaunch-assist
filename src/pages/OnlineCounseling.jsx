import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const OnlineCounseling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle connection logic here
    console.log("User connected with therapist:", formData);
  };

  return (
    <Box p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Online Counseling</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl id="question" isRequired>
              <FormLabel>Question</FormLabel>
              <Input name="question" value={formData.question} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Connect
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default OnlineCounseling;