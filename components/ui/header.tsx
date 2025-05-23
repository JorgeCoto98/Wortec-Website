"use client";

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-30 w-full py-3 md:py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between rounded-2xl bg-gray-900/90 px-4 shadow-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold text-white tracking-tight">Wortec</span>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-gray-300 font-medium text-sm">
            <Link href="/" className="hover:text-indigo-400 transition duration-150 ease-in-out">
              Inicio
            </Link>
            <Link href="/" className="hover:text-indigo-400 transition duration-150 ease-in-out">
              Funciones
            </Link>
            <Link href="/" className="hover:text-indigo-400 transition duration-150 ease-in-out">
              Precios
            </Link>
            <Link href="/" className="hover:text-indigo-400 transition duration-150 ease-in-out">
              Blog
            </Link>
            <Link href="/" className="hover:text-indigo-400 transition duration-150 ease-in-out">
              Contacto
            </Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/signin"
              className="btn-sm bg-gray-800/60 text-gray-300 hover:text-white transition-all duration-200"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/signup"
              className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 text-white hover:to-indigo-400 shadow-md transition-all duration-200"
            >
              Comenzar gratis
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-gray-900/90 px-4 py-4 shadow-md text-sm text-gray-300 space-y-3 transition-all duration-300 animate-fade-in">
            <Link href="/" className="block hover:text-indigo-400">Inicio</Link>
            <Link href="/features" className="block hover:text-indigo-400">Funciones</Link>
            <Link href="/pricing" className="block hover:text-indigo-400">Precios</Link>
            <Link href="/blog" className="block hover:text-indigo-400">Blog</Link>
            <Link href="/contact" className="block hover:text-indigo-400">Contacto</Link>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/signin"
                className="btn-sm bg-gray-800/60 text-gray-300 hover:text-white"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/signup"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 text-white hover:to-indigo-400"
              >
                Comenzar gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
