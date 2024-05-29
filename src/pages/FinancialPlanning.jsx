import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const FinancialPlanning = () => {
  const [formData, setFormData] = useState({
    goals: "",
    savings: "",
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
    // Handle financial planning logic here
    console.log("Financial planning data:", formData);
  };

  return (
    <Box p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Financial Planning Tool</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="goals" isRequired>
              <FormLabel>Financial Goals</FormLabel>
              <Input name="goals" value={formData.goals} onChange={handleChange} />
            </FormControl>
            <FormControl id="savings" isRequired>
              <FormLabel>Current Savings</FormLabel>
              <Input name="savings" value={formData.savings} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Plan Finances
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default FinancialPlanning;