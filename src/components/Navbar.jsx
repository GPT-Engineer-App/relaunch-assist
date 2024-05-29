import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" px={4} py={2}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
          ReLaunch
        </Link>
      </Box>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/register" color="white" mr={4}>
          Register
        </Link>
        <Link as={RouterLink} to="/legal-assistance" color="white" mr={4}>
          Legal Assistance
        </Link>
        <Link as={RouterLink} to="/financial-management" color="white" mr={4}>
          Financial Management
        </Link>
        <Button as={RouterLink} to="/login" colorScheme="teal" variant="outline">
          Login
        </Button>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;