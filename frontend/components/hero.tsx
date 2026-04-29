'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smile, Sparkles, Palette, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 md:py-24">
      {/* Animated decorative bars */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: 'left' }}
      >
        <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent" />
      </motion.div>
      
      {/* Floating shapes animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary/10"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 rounded-lg bg-secondary/10"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-10 h-10 rounded-full bg-accent/10"
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-8 h-8 rounded-lg bg-accent-blue/10"
          animate={{ y: [0, 15, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Centre agr&eacute;&eacute; MFFE
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block"
              >
                Bienvenue aux
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                P&eacute;pini&egrave;res de l&apos;&Eacute;ternel
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Un centre de protection de la petite enfance o&ugrave; la joie, l&apos;apprentissage et le bien-&ecirc;tre de votre enfant sont notre priorit&eacute; absolue.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link
                href="/inscription"
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start"
              >
                Inscrire votre enfant 
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </Link>
              <Link
                href="#services"
                className="group border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 justify-center sm:justify-start"
              >
                En savoir plus
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden">
              {/* Animated colored blocks */}
              <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
                <motion.div 
                  className="bg-primary rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Smile className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="bg-secondary rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="bg-accent rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Palette className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="bg-accent-blue rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <BookOpen className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Logo floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-3"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
