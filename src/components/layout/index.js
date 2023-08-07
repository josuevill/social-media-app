import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";
import { LOGIN } from '../../lib/routers'
import {  } from "../../hooks/auth";

export default function Layout() {
 const {pathname} = useLocation()
 const navigate = useNavigate()
 const {user, isLoading} = useAuth()

 
 useEffect(() => {
   if (pathname.startsWith("/segura") && !user) {
     navigate(LOGIN)
    }
  }, [pathname, user])
  
  if (isLoading) return "Cargando..."

  return (
    <>
      <Outlet />
    </>
  )
}
