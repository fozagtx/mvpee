"use client";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 z-20 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-full px-8 py-2 flex items-center justify-center" style={{minWidth: 'max-content', maxWidth: '90vw'}}>
      {/* Centered Navigation */}
      <nav className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-tight text-white drop-shadow">mvpee</span>
        <a href="#" className="text-white/90 hover:text-pink-400 font-medium transition">Docs</a>
        <a href="#" className="text-white/90 hover:text-pink-400 font-medium transition">About</a>
      </nav>
    </header>
  );
}

