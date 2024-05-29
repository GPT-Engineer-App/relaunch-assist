import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Management401k = () => {
  const [formData, setFormData] = useState({
    contributions: "",
    balance: "",
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
    // Handle 401(k) management logic here
    console.log("401(k) management data:", formData);
  };

  return (
    <Box p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">401(k) Management Tool</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="contributions" isRequired>
              <FormLabel>Monthly Contributions</FormLabel>
              <Input name="contributions" value={formData.contributions} onChange={handleChange} />
            </FormControl>
            <FormControl id="balance" isRequired>
              <FormLabel>Current Balance</FormLabel>
              <Input name="balance" value={formData.balance} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Manage 401(k)
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Management401k;