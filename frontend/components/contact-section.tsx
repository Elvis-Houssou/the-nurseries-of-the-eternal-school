'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Send, CheckCircle, Award } from 'lucide-react'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-48 h-48 rounded-full bg-primary/5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-accent/5"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            Nous Contacter
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-Nous
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous sommes pr&ecirc;ts &agrave; r&eacute;pondre &agrave; vos questions et &agrave; inscrire votre enfant
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MapPin className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Adresse</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Niangon, Carrefour Acad&eacute;mie<br />
                      Cit&eacute; CNPS Lot 10<br />
                      Face Clinique La Roche Bethsa&iuml;da
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="bg-secondary w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">T&eacute;l&eacute;phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+2250103333067" className="hover:text-primary transition-colors">01 03 33 30 67</a><br />
                      <a href="tel:+2250749690701" className="hover:text-primary transition-colors">07 49 69 07 01</a>
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-0 shadow-lg hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="bg-accent w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@pepinieres-eternel.ci" className="hover:text-primary transition-colors">
                        info@pepinieres-eternel.ci
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-gradient-to-br from-accent-blue/10 to-accent-blue/5 border-0 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-accent-blue" />
                  <h3 className="font-bold text-foreground">Agr&eacute;ment Minist&eacute;riel</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Centre approuv&eacute; et accr&eacute;dit&eacute; par le Minist&egrave;re de la Femme, de la Famille et de l&apos;Enfant - Arr&ecirc;t&eacute; N&deg;0243/MFFE/CAB du 11 novembre 2022
                </p>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl">
              {submitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Merci pour votre message!
                  </h3>
                  <p className="text-muted-foreground">
                    Nous vous r&eacute;pondrons dans les plus brefs d&eacute;lais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nom complet
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      T&eacute;l&eacute;phone
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+225 01 02 03 04 05"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Parlez-nous de votre enfant et vos questions..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        Envoyer le message
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
