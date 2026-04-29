'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Heart, Users, Lightbulb, Shield, Award, Globe, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    icon: Heart,
    title: 'Bienveillance',
    description: 'Chaque enfant est accueilli avec amour et respect, dans un environnement chaleureux.',
    color: 'bg-primary',
  },
  {
    icon: Users,
    title: 'Socialisation',
    description: 'Nous favorisons les interactions pour développer les compétences relationnelles.',
    color: 'bg-secondary',
  },
  {
    icon: Lightbulb,
    title: 'Apprentissage',
    description: 'Des activités pédagogiques variées stimulent la curiosité et le développement.',
    color: 'bg-accent',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'La sécurité physique et émotionnelle de votre enfant est notre engagement.',
    color: 'bg-accent-blue',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/5"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-secondary/5"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Notre Histoire
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              &Agrave; Propos de{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nous
              </span>
            </h2>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Les P&eacute;pini&egrave;res de l&apos;&Eacute;ternel est un centre priv&eacute; de protection de la petite enfance agr&eacute;&eacute; par le Minist&egrave;re de la Femme, de la Famille et de l&apos;Enfant.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Nous nous d&eacute;dions &agrave; offrir un cadre id&eacute;al pour le d&eacute;veloppement harmonieux de la petite enfance. Notre &eacute;quipe de professionnels qualifi&eacute;s cr&eacute;e un environnement ludique, &eacute;ducatif et s&eacute;curis&eacute;.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Agr&eacute;&eacute; MFFE</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Qualit&eacute; certifi&eacute;e</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    className="relative w-40 h-40 mx-auto mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Globe className="w-20 h-20 text-primary" strokeWidth={1} />
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-5xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    16
                  </motion.p>
                  <p className="text-xl font-semibold text-foreground">enfants inscrits</p>
                  <p className="text-muted-foreground">Ann&eacute;e 2025-2026</p>
                </div>
              </div>
              
              {/* Ministry logo */}
              <motion.div
                className="absolute bottom-4 right-4 bg-white rounded-xl p-2 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/logo_ministere.png"
                  alt="Logo Minist&egrave;re"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Nos Valeurs
          </h3>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                >
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-500 text-center group border-0 shadow-lg bg-white">
                    <motion.div 
                      className="flex justify-center mb-5"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`${value.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '16+', label: 'Enfants', color: 'from-primary to-primary/80' },
            { number: '3', label: 'Programmes', color: 'from-secondary to-secondary/80' },
            { number: '100%', label: 'Accrédité', color: 'from-accent to-accent/80' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className={`p-8 bg-gradient-to-br ${stat.color} border-0 shadow-xl hover:shadow-2xl transition-all duration-500`}>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-5xl md:text-6xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-lg text-white/90 font-medium">{stat.label}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
