// @/components/Layout/index.tsx
"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";
import { NextUIProvider } from "@nextui-org/react";
import * as NProgress from "nprogress";
import { usePathname } from "next/navigation";
import Header from '../app/header'
import Footer from '../app/footer'
import Home from '../components/Home'
interface LayoutProps {
    readonly pageTitle?: string;
    children: ReactNode;
}

export default function Layout({ pageTitle, children }: LayoutProps) {
    // Concatenate page title (if exists) to site title
    let titleConcat = "Responsive Sidebar Example";
    if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

    // Mobile sidebar visibility state
    const [showSidebar, setShowSidebar] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        NProgress.done();
    }, [pathname]);

    return (
        <NextUIProvider>
            <NextTopLoader color="orange" />
            <Head>
                <title className="text-white">{titleConcat}</title>
            </Head>
            <Header />
            <Home />
            {children}
            <Footer />
        </NextUIProvider>
    );
}
