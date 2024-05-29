import { Box, Heading, Text, VStack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Budgeting = () => {
  const [formData, setFormData] = useState({
    income: "",
    expenses: "",
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
    // Handle budgeting logic here
    console.log("Budgeting data:", formData);
  };

  return (
    <Box p={4}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Budgeting Tool</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="income" isRequired>
              <FormLabel>Monthly Income</FormLabel>
              <Input name="income" value={formData.income} onChange={handleChange} />
            </FormControl>
            <FormControl id="expenses" isRequired>
              <FormLabel>Monthly Expenses</FormLabel>
              <Input name="expenses" value={formData.expenses} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Calculate Budget
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Budgeting;