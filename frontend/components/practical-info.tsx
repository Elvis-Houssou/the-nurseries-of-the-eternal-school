'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Calendar, Shirt, Banknote, Clock, FileText, Utensils, BookOpen, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function PracticalInfo() {
  return (
    <section id="practical" className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/5"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-accent-blue/10 text-accent-blue px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Guide Pratique
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Informations Pratiques
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir pour inscrire votre enfant
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Calendar */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <motion.div 
                className="flex items-center gap-4 mb-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Calendar className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Calendrier Scolaire</h3>
              </motion.div>
              <div className="space-y-3 pl-2 border-l-2 border-primary/20">
                <div>
                  <p className="font-semibold text-foreground">Année Scolaire 2025-2026</p>
                  <p className="text-muted-foreground">1er lundi d&apos;octobre - 31 mai</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Hours Maternelle */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <motion.div 
                className="flex items-center gap-4 mb-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-accent-blue w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Clock className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Horaires Maternelle</h3>
              </motion.div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium mb-2">Du Lundi au Vendredi</p>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground font-medium">Matin</span>
                  <span className="text-primary font-bold">7h45 - 11h45</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground font-medium">Après-midi</span>
                  <span className="text-primary font-bold">14h00 - 16h30</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Hours Primaire */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <motion.div 
                className="flex items-center gap-4 mb-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-accent w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Clock className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Horaires Primaire</h3>
              </motion.div>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium mb-2">Du Lundi au Vendredi (CP1/CP2)</p>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground font-medium">Matin</span>
                  <span className="text-primary font-bold">7h45 - 12h00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground font-medium">Après-midi</span>
                  <span className="text-primary font-bold">14h00 - 17h00</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Uniforms */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <motion.div 
                className="flex items-center gap-4 mb-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Shirt className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tenue Scolaire</h3>
              </motion.div>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Filles</p>
                  <p className="text-muted-foreground">Robe ou jupe carreaux vert-blanc</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-foreground mb-1">Garçons</p>
                  <p className="text-muted-foreground">Culotte kaki + haut vert-blanc</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Pricing Summary */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <motion.div 
                className="flex items-center gap-4 mb-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-accent w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Banknote className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Tarifs Mensuels</h3>
              </motion.div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground">Crèche (2-18 mois)</span>
                  <span className="font-bold text-primary">30 000 FCFA</span>
                </div>
                <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground">Garderie (19+ mois)</span>
                  <span className="font-bold text-primary">25 000 FCFA</span>
                </div>
                <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground">Préscolaire/an</span>
                  <span className="font-bold text-primary">80 000 FCFA</span>
                </div>
                <div className="flex justify-between p-3 bg-primary/10 rounded-lg">
                  <span className="text-foreground font-medium">Primaire CP1/an</span>
                  <span className="font-bold text-primary">95 000 FCFA</span>
                </div>
                <div className="flex justify-between p-3 bg-primary/10 rounded-lg">
                  <span className="text-foreground font-medium">Primaire CP2/an</span>
                  <span className="font-bold text-primary">100 000 FCFA</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Cantine */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <motion.div 
                className="flex items-center gap-4 mb-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <Utensils className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Cantine</h3>
              </motion.div>
              <div className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                <p className="text-3xl font-bold text-primary mb-1">15 000 FCFA</p>
                <p className="text-muted-foreground">par mois</p>
                <p className="text-sm text-muted-foreground mt-3">
                  Repas équilibrés et adaptés à chaque tranche d&apos;âge
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Inscription */}
          <motion.div variants={cardVariants}>
            <Card className="h-full p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
              <motion.div 
                className="flex items-center gap-4 mb-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-accent-blue w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <FileText className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Inscription</h3>
              </motion.div>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground">Crèche / Garderie</span>
                  <span className="font-bold text-primary">20 000 FCFA</span>
                </div>
                <div className="flex justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-foreground">Frais annexes</span>
                  <span className="font-bold text-primary">15 000 FCFA</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 p-2 bg-accent/10 rounded-lg">
                  Frais d&apos;inscription uniques par année scolaire
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Link to Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            href="/reglement-interieur"
            className="inline-flex items-center gap-3 bg-white border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <BookOpen className="w-5 h-5" />
            Consulter le Règlement Intérieur
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
