import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";


export default function Login() {
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Iniciar sesión
        </Heading>

          <FormControl py="2">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="usuario@email.com" />
            <FormErrorMessage>

            </FormErrorMessage>
          </FormControl>
          <FormControl py="2">
            <FormLabel>Contraseña</FormLabel>
            <Input type="password" placeholder="contraseña" />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <Button mt="4" type="submit" colorScheme="teal" size="md" w="full" loadingText="Iniciar sesión">
            Ingresar
          </Button>

        <Text fontSize="xlg" align="center" mt="6">
          No tienes una cuenta?{" "}
          <Link color="teal.800" fontWeight="medium" textDecor="underline" _hover={{ background: "teal.100" }}>
            Regístrate
          </Link>{" "}
          o registrarse con
        </Text>
      </Box>
    </Center>
  )
}
