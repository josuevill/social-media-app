import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import { useState } from "react";
import { DASHBOARD } from "../lib/routers";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import isUsernameExists from "../utils/isUsernameExists";

export function useAuth() {
    const [authUser, isLoading, error] = useAuthState(auth)

    return { user: authUser, isLoading, error }
}

export function useRegister() {
    const [isLoading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()

    async function register({
        username,
        email,
        password,
        redirectTo = DASHBOARD,
    }) {
        setLoading(true)

        const usernameExists = await isUsernameExists(username)

        if (usernameExists) {
            toast({
                title: "El nombre de usuario ya existe",
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000,
            })
            setLoading(false)
        } else {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password)
                await setDoc(doc(db, "usuarios", res.user.uid), {
                    id: res.user.uid,
                    username: username.toLowerCase(),
                    avatar: "",
                    date: Date.now(),
                })

                toast({
                    title: "Cuenta creada correctamente",
                    description: "Cuenta logeada",
                    status: "success",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                })
                 
                navigate(redirectTo)
            } catch (error) {
                toast({
                    title: "Logeo fallido",
                    description: error.message,
                    status: "error",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                })
            } finally {
                setLoading(false)
            }
        }
    }

    return { register, isLoading }
}

export function useLogin() {
    const [isLoading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()

    async function login({ email, password, redirectTo=DASHBOARD }) {
        setLoading(true)
        
        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast({
                title: "ingreso exitoso",
                status: "success",
                isClosable: true,
                position: "top",
                duration: 5000,
            })
            navigate(redirectTo)
        } catch (error) {
            toast({
                title: "falló al ingresar",
                description: error.message,
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000    
            })
            setLoading(false)
        } finally {
            setLoading(false)
        }    
    }

    return { login, isLoading}
}