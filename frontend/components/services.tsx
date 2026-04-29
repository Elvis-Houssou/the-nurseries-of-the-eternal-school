'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Baby, Palette, GraduationCap, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'creche',
    title: 'Crèche',
    age: '2 mois à 18 mois',
    description: 'Accueil bienveillant pour les plus petits avec personnel qualifié et espaces sécurisés.',
    features: ['Personnel formé', 'Environnement sûr', 'Menus équilibrés', 'Activités sensorielles'],
    color: 'bg-primary',
    hoverColor: 'hover:bg-primary/90',
    Icon: Baby,
    price: '30 000 FCFA/mois',
  },
  {
    id: 'prescolaire',
    title: 'Préscolaire',
    age: '18 mois à 3 ans',
    description: 'Programme éducatif structuré favorisant le développement cognitif et moteur.',
    features: ['Apprentissage ludique', 'Développement moteur', 'Socialisation', 'Créativité'],
    color: 'bg-secondary',
    hoverColor: 'hover:bg-secondary/90',
    Icon: Palette,
    price: '25 000 FCFA/mois',
  },
  {
    id: 'garderie',
    title: 'Garderie Éducative',
    age: '2 ans à 3 ans',
    description: 'Service de garderie combinant sécurité et éducation avec des activités enrichissantes.',
    features: ['Horaires flexibles', 'Activités éducatives', 'Nutrition adaptée', 'Suivi personnalisé'],
    color: 'bg-accent',
    hoverColor: 'hover:bg-accent/90',
    Icon: GraduationCap,
    price: '25 000 FCFA/mois',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-secondary/5"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
            className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Nos Programmes
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trois programmes adapt&eacute;s &agrave; chaque &eacute;tape de la petite enfance
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.Icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
              >
                <Card className="h-full group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg">
                  <motion.div 
                    className={`${service.color} h-3`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <div className="p-8">
                    <motion.div 
                      className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-2">
                      {service.age}
                    </p>
                    <p className="text-lg font-bold text-secondary mb-4">
                      {service.price}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={feature} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`${service.color} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Link 
                      href="/inscription"
                      className={`inline-flex items-center gap-2 ${service.color} text-white px-6 py-3 rounded-xl font-semibold ${service.hoverColor} transition-all duration-300 group/btn`}
                    >
                      En savoir plus
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.span>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
