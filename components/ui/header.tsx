'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './logo';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sobre Nosotros', href: 'nosotros' },
  { label: 'Blog', href: 'blog' },
  { label: 'Contacto', href: 'contacto' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowX = '';
    }
    // Cleanup para resetear cuando el componente se desmonte o cambie
    return () => {
      document.body.style.overflowX = '';
    };
  }, [mobileMenuOpen]);

  // Cierra el menú móvil al hacer click en un link
  function handleLinkClick() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="z-30 w-full py-3 md:py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between rounded-2xl bg-gray-900/90 px-4 shadow-lg before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[mask-composite:exclude_!important] before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Logo + Nombre */}
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold tracking-tight text-white">Wortec</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-20 text-lg font-medium text-gray-300 md:flex">
            {menuItems.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="transition duration-150 ease-in-out hover:text-indigo-400"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Buttons Desktop */}
          <div className="hidden items-center gap-3 md:flex"></div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 transition hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto bg-gray-900/95 backdrop-blur-sm"
          style={{ width: '100vw', maxWidth: '100vw' }}
        >
          <div
            className="animate-fade-slide-in mx-auto flex min-h-full max-w-screen-md flex-col px-6 py-8 text-lg text-gray-300"
            style={{ boxSizing: 'border-box' }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Cerrar menú"
              className="fixed top-4 right-4 z-60 rounded-full bg-gray-800/70 p-2 text-gray-300 shadow-lg transition hover:bg-gray-700 hover:text-white"
            >
              <X size={28} />
            </button>

            <nav className="mt-16 flex flex-col gap-10">
              {menuItems.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={handleLinkClick}
                  className="block transition hover:text-indigo-400"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-in {
          animation: fadeSlideIn 300ms ease forwards;
        }
      `}</style>
    </header>
  );
}
