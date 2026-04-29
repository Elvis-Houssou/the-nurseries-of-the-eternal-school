'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.png"
              alt="Logo Les Pépinières"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary">Les Pépinières</h1>
            <p className="text-xs text-muted-foreground">de l&apos;Éternel</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            À Propos
          </Link>
          <Link href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Services
          </Link>
          <Link href="#practical" className="text-foreground hover:text-primary transition-colors font-medium">
            Infos Pratiques
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </Link>
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Inscription
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
          <Link
            href="#about"
            className="text-foreground hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            À Propos
          </Link>
          <Link
            href="#services"
            className="text-foreground hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#practical"
            className="text-foreground hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Infos Pratiques
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-primary transition-colors font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            onClick={() => setIsOpen(false)}
          >
            Inscription
          </Link>
        </nav>
      )}
    </header>
  )
}
