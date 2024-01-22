"use client"
import { NextUIProvider } from '@nextui-org/react'
import React, { ReactNode } from 'react'

const Providers = ({ children }: { readonly children: ReactNode }) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default Providers