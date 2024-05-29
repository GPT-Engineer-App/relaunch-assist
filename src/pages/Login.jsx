import { useState } from "react";
import { Container, Box, Heading, FormControl, FormLabel, Input, Button, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log(formData);
  };

  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Login</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={formData.password} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" mt={4} width="full">
              Login
            </Button>
          </form>
          <Text>
            Don't have an account? <Link to="/register" style={{ color: "teal" }}>Register</Link>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;