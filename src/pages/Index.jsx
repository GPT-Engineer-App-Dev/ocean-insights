import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaWater, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Explore the Oceans</Heading>
          <Text fontSize="lg">Dive into the depths and discover the wonders of the underwater world.</Text>
        </Box>
        <Image src="/images/ocean.jpg" alt="Ocean" borderRadius="md" boxShadow="lg" />
        <Flex justifyContent="center" width="100%" mt={4}>
          <Button leftIcon={<FaWater />} colorScheme="teal" size="lg" mr={4}>
            Learn More
          </Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="blue" size="lg">
            About Us
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;