import React, { createContext, useContext, useMemo } from 'react'
import useAdmin from '../Hooks/role/useAdmin'
import useAmbassador from '../Hooks/role/useAmbassador'
import useUser from '../Hooks/role/useUser'
import useAuth from '../Hooks/useAuth/useAuth'
import useAmbassadorAccess from '../Hooks/role/useAmbassadorAccess'

export const RoleContext = createContext(null)

export const RoleProvider = ({ children }) => {
  const { user } = useAuth() || {}

  const [isAdmin, adminLoading] = useAdmin()
  const [isAmbassador, ambassadorLoading] = useAmbassador()
  const [isUser, userLoading] = useUser()
  const [ambassadorData, ambassadorDataLoading] = useAmbassadorAccess()

  const ambassadorAccess = ambassadorData?.access
  const role = isAdmin ? 'admin' : isAmbassador ? 'ambassador' : isUser ? 'user' : undefined
  const roleLoading = adminLoading || ambassadorLoading || userLoading || ambassadorDataLoading

  const value = useMemo(() => ({
    user,
    role,
    roleLoading,
    isAdmin,
    isAmbassador,
    isUser,
    ambassadorAccess
  }), [
    user,
    role,
    roleLoading,
    isAdmin,
    isAmbassador,
    isUser,
    ambassadorAccess
  ])

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  )
}

export const useRole = () => {
  const ctx = useContext(RoleContext)
  return ctx || {}
}

