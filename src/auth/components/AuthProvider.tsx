'use client'

import { FC, PropsWithChildren } from 'react'
import { SessionProvider } from 'next-auth/react'

export const AuthProvider: FC<PropsWithChildren> = ({ children, ...rest }) => {
  return <SessionProvider>{children}</SessionProvider>
}
