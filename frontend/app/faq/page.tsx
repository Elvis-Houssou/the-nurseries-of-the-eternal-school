'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Quel est l&apos;âge minimum pour l&apos;inscription?',
    answer: 'Notre programme de crèche accepte les enfants à partir de 2 mois. Pour les autres programmes, l&apos;âge minimum est 18 mois pour le préscolaire et 2 ans pour la garderie éducative.',
  },
  {
    question: 'Quels sont les horaires d&apos;ouverture?',
    answer: 'Nous sommes ouverts de 7h30 à 18h00, du lundi au vendredi. Nous offrons également des services de garde supplémentaires sur demande.',
  },
  {
    question: 'Quels sont les coûts d&apos;inscription?',
    answer: 'L&apos;inscription pour le préscolaire et la crèche est de 20 000 FCFA. La cantine coûte 15 000 FCFA par mois. Des tarifs mensuels supplémentaires s&apos;appliquent selon le programme choisi.',
  },
  {
    question: 'Y a-t-il des activités extrascolaires?',
    answer: 'Oui! Nous proposons des activités artistiques, musicales, et de développement moteur adaptées à chaque groupe d&apos;âge.',
  },
  {
    question: 'Que se passe-t-il en cas d&apos;urgence médicale?',
    answer: 'Notre personnel est formé aux premiers secours. En cas d&apos;urgence sérieuse, nous contactons immédiatement les parents et les services médicaux d&apos;urgence.',
  },
  {
    question: 'Puis-je visiter l&apos;établissement avant d&apos;inscrire mon enfant?',
    answer: 'Absolument! Nous encourageons les parents à visiter notre établissement. Veuillez nous contacter pour prendre rendez-vous.',
  },
  {
    question: 'Comment communiquez-vous avec les parents?',
    answer: 'Nous communiquons régulièrement via WhatsApp, email et appels téléphoniques. Nous partageons aussi des photos et vidéos du développement de votre enfant.',
  },
  {
    question: 'Quels documents sont nécessaires pour l&apos;inscription?',
    answer: 'Vous aurez besoin du certificat de naissance de l&apos;enfant, du dossier d&apos;agrément ministériel, de la preuve de vaccination et des informations médicales pertinentes.',
  },
  {
    question: 'Y a-t-il une période d&apos;adaptation?',
    answer: 'Oui, nous proposons une période d&apos;adaptation progressive pour aider l&apos;enfant à s&apos;adapter progressivement à son nouvel environnement.',
  },
  {
    question: 'Acceptez-vous les repas apportés de la maison?',
    answer: 'Nous fournissons des repas équilibrés à la cantine. Cependant, si votre enfant a des besoins alimentaires spécifiques, veuillez nous le signaler pour des arrangements.',
  },
]

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <main>
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Questions Fréquemment Posées
            </h1>
            <p className="text-xl text-muted-foreground">
              Trouvez les réponses aux questions courantes
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-muted transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 ml-4 text-primary transition-transform ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedIndex === index && (
                  <div className="px-6 pb-6 border-t border-border bg-blue-50">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-0">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Vous n&apos;avez pas trouvé la réponse?
            </h2>
            <p className="text-muted-foreground mb-6">
              N&apos;hésitez pas à nous contacter directement. Notre équipe est prête à répondre à toutes vos questions.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Nous Contacter
            </a>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
