import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, Stack, Checkbox, Link } from '@chakra-ui/react'


function Register() {
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Regístrate
        </Heading>

          <FormControl py="2">
            <FormLabel>Nombre de usuario</FormLabel>
            <Input placeholder="nombre de usuario" />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl py="2">
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='usuario@email.com'/>
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl py="2">
            <FormLabel>Contraseña</FormLabel>
            <Input type='password' />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl py="2">
            <Stack>
              <Checkbox colorScheme="green">
                <Text fontSize='sm'>Soy mayor de 13 años, he leído y aceptado <Link color="teal.800" fontWeight="medium" textDecor="underline" _hover={{ background: "teal.100" }}>los Términos y condiciones</Link> del sitio.</Text>
              </Checkbox>
              <FormErrorMessage></FormErrorMessage>
            </Stack>
          </FormControl>
          <Button mt="4" type='submit' colorScheme='teal' size='md' w='full' loadingText='registrarse'>
            Registrarse
          </Button>

        
        <Text fontSize="xlg" align="center" mt="6">
          Ya tienes una cuenta?{" "}
          <Link  color="teal.800" fontWeight="medium" textDecor="underline" _hover={{ background: "teal.100" }}>
            Iniciar sesión
          </Link>{" "}
          o inicia sesión con
        </Text>
      </Box>
    </Center>
  )
}

export default Register