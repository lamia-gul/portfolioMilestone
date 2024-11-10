"use client";


import './globals.css';
import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <main className="hero">
        <img src="./image.jpg" alt="Your Name" />
        <h2>I'm Lamia Gul, a Web Developer</h2>
      </main>

      <footer>
        <p>&copy; 2024 Lamia Gul. All Rights Reserved.</p>
      </footer>
    </div>
  );
}