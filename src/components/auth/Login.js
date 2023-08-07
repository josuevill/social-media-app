import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, Text } from "@chakra-ui/react";
import { DASHBOARD, REGISTER } from "../../lib/routers";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "../../utils/form-validate";

export default function Login() {
  const { login, isLoading} = useLogin()
  const {register, handleSubmit, reset, formState: {errors} } = useForm()

  async function handleLogin(data) {
    const exito = await login({
        email: data.email,
        password: data.password,
        redirectTo: DASHBOARD
    })

    if (exito) reset();
  }

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Iniciar sesión
        </Heading>

        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.email} py="2">
            <FormLabel>Email</FormLabel>
            <Input 
              type="email" 
              placeholder="usuario@email.com" 
              {...register('email', emailValidate)} />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password} py="2">
            <FormLabel>Contraseña</FormLabel>
            <Input 
              type="password" 
              placeholder="contraseña" 
              {...register('password', passwordValidate)} />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt="4" type="submit" colorScheme="teal" isLoading={isLoading} size="md" w="full" loadingText="Iniciar sesión">
            Ingresar
          </Button>
        </form>
        
        <Text fontSize="xlg" align="center" mt="6">
          No tienes una cuenta?{" "}
          <Link 
            as={RouterLink} 
            to={REGISTER} 
            color="teal.800" 
            fontWeight="medium" 
            textDecor="underline" 
            _hover={{ background: "teal.100" }} >
            Regístrate
          </Link>{" "}
          o registrarse con
        </Text>
      </Box>
    </Center>
  )
}
