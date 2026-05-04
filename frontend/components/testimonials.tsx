'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mme Kouadio',
    relation: 'Mère de Yves (Crèche)',
    text: "LES PEPINIÈRES DE L'ETERNEL est un véritable refuge pour mon enfant. L'équipe est si attentive et bienveillante. Je vois les progrès de mon fils chaque jour!",
    rating: 5,
    color: 'from-primary/10 to-primary/5',
  },
  {
    name: 'M. Traore',
    relation: 'Père de Fatou (Préscolaire)',
    text: 'Nous avons essayé plusieurs centres, mais celui-ci est vraiment exceptionnel. Le programme éducatif est bien structuré et ma fille adore y aller.',
    rating: 5,
    color: 'from-secondary/10 to-secondary/5',
  },
  {
    name: 'Mme Diallo',
    relation: 'Mère d&apos;Aminata (Garderie)',
    text: 'Le rapport qualité-prix est excellent. Le personnel communique régulièrement avec moi et je suis toujours rassurée sur le bien-être de ma fille.',
    rating: 5,
    color: 'from-accent/10 to-accent/5',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-secondary/5"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/5"
          animate={{ y: [0, 20, 0] }}
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
            className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            T&eacute;moignages
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ce que les Parents Disent
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leurs histoires de confiance et de satisfaction
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
            >
              <Card className={`p-8 h-full hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${testimonial.color} border-0 shadow-lg group`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <Quote className="w-10 h-10 text-primary/30" />
                </motion.div>
                
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star
                        size={20}
                        className="fill-secondary text-secondary"
                      />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-foreground mb-8 leading-relaxed text-lg">
                  &quot;{testimonial.text}&quot;
                </p>
                
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
