'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (isHomePage) {
      e.preventDefault()
      const element = document.getElementById(anchor)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsOpen(false)
    } else {
      setIsOpen(false)
    }
  }

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: isHomePage ? '#about' : '/#about', anchor: 'about', label: 'À Propos' },
    { href: isHomePage ? '#services' : '/#services', anchor: 'services', label: 'Services' },
    { href: isHomePage ? '#practical' : '/#practical', anchor: 'practical', label: 'Infos Pratiques' },
    { href: '/reglement-interieur', anchor: '', label: 'Règlement', isPage: true },
    { href: isHomePage ? '#contact' : '/#contact', anchor: 'contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DS6DK28wHgPetJXmjCs5sYISM0Ugal.png"
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
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={link.isPage ? undefined : (e) => handleNavClick(e, link.anchor)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/inscription"
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={link.isPage ? () => setIsOpen(false) : (e) => handleNavClick(e, link.anchor)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/inscription"
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
