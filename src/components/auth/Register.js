import { 
  Box, 
  Button, 
  Center, 
  FormControl, 
  FormErrorMessage, 
  FormLabel, 
  Heading, 
  Input, 
  Text, 
  Stack, 
  Checkbox, 
  Link } from '@chakra-ui/react'

import { DASHBOARD, LOGIN } from '../../lib/routers'
import { Link as RouterLink} from 'react-router-dom'
import { useRegister} from '../../hooks/auth'
import { useForm } from 'react-hook-form';
import { emailValidate, olderValidate, passwordValidate, usernameValidate } from "../../utils/form-validate";

export default function Register() {
  const { register: signup, isLoading } = useRegister()
  const { register, handleSubmit, formState: { errors }, } = useForm() 

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      older: data.older,
      redirectTo: DASHBOARD,
    })
  }

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Regístrate
        </Heading>

        <form onSubmit={handleSubmit(handleRegister)} >
          <FormControl isInvalid={errors.username} py="2">
              <FormLabel>Nombre de usuario</FormLabel>
              <Input placeholder="nombre de usuario" {...register("username", usernameValidate)} />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email} py="2">
              <FormLabel>Email</FormLabel>
              <Input 
                type='email' 
                placeholder='usuario@email.com'
                {...register("email", emailValidate )} />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password} py="2">
              <FormLabel>Contraseña</FormLabel>
              <Input 
                type='password' 
                placeholder='ingrese contraseña'
                {...register("password", passwordValidate)} />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.older} py="2">
            <Stack>
              <Checkbox colorScheme="green" {...register("older", olderValidate)}>
                <Text fontSize='sm'>Soy mayor de 13 años, he leído y aceptado <Link color="teal.800" fontWeight="medium" textDecor="underline" _hover={{ background: "teal.100" }}>los Términos y condiciones</Link> del sitio.</Text>
              </Checkbox>
              <FormErrorMessage>
                {errors.older && errors.older.message}
              </FormErrorMessage>
            </Stack>
            </FormControl>

            <Button 
              mt="4"
              type='submit'
              colorScheme='teal'
              size='md'
              w='full'
              isLoading={isLoading}
              loadingText='registrarse'>
              Registrarse
            </Button>
        </form>
        <Text fontSize="xlg" align="center" mt="6">
          Ya tienes una cuenta?{" "}
          <Link
            as={RouterLink}
            to={LOGIN}
            color="teal.800" 
            fontWeight="medium" 
            textDecor="underline" 
            _hover={{ background: "teal.100" }}>
            Iniciar sesión
          </Link>{" "}
            o inicia sesión con
        </Text>
      </Box>
    </Center>
  )
}









        
