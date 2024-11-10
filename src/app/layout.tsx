"use client";
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isDarkMode, SetIsDarkMode]= useState(false);

  // const toggleTheme=()=> {
  //   SetIsDarkMode((prev) => !prev);
  // };
  // useEffect(() =>{
  //   if(isDarkMode) {
  //     document.body.classList.add("dark");
  //     document.body.classList.remove("light");
  //   }
  //   else {
  //     document.body.classList.add("light");
  //     document.body.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
