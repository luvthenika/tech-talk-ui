"use client"
import React, { ReactNode } from 'react';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import NavigationBar from './components/header/Navigation'; // Adjust the path according to your file structure
import SideBar from './components/home/SideBar';
import Footer from './components/home/Footer';

export default function Template({ children }: { children: ReactNode }) {
    return (
        <ChakraProvider >
            <NavigationBar />
            
            <div>{children}</div>
            
            <Footer/>
        </ChakraProvider>
    )

}