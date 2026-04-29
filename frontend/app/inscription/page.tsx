'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    childName: '',
    childDob: '',
    childAge: '',
    program: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      childName: '',
      childDob: '',
      childAge: '',
      program: '',
      notes: '',
    })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main>
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Inscription
            </h1>
            <p className="text-xl text-muted-foreground">
              Remplissez le formulaire ci-dessous pour inscrire votre enfant aux Pépinières
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Inscription Reçue!
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Merci de votre intérêt. Nous vous contacterons très bientôt pour confirmer l&apos;inscription.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-primary-foreground px-8 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Retour au formulaire
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Parent Information */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Informations Parent/Tuteur
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="parentName" className="block text-sm font-semibold text-foreground mb-2">
                        Nom complet *
                      </label>
                      <input
                        id="parentName"
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentEmail" className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        id="parentEmail"
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentPhone" className="block text-sm font-semibold text-foreground mb-2">
                        Téléphone *
                      </label>
                      <input
                        id="parentPhone"
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+225 01 02 03 04 05"
                      />
                    </div>
                  </div>
                </div>

                {/* Child Information */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Informations Enfant
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="childName" className="block text-sm font-semibold text-foreground mb-2">
                        Nom de l&apos;enfant *
                      </label>
                      <input
                        id="childName"
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Nom de l'enfant"
                      />
                    </div>
                    <div>
                      <label htmlFor="childDob" className="block text-sm font-semibold text-foreground mb-2">
                        Date de naissance *
                      </label>
                      <input
                        id="childDob"
                        type="date"
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Program Selection */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Sélection du Programme
                  </h3>
                  <div>
                    <label htmlFor="program" className="block text-sm font-semibold text-foreground mb-2">
                      Programme désiré *
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Choisir un programme</option>
                      <option value="creche">Crèche (2 mois - 18 mois)</option>
                      <option value="prescolaire">Préscolaire (18 mois - 3 ans)</option>
                      <option value="garderie">Garderie Éducative (2 ans - 3 ans)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Informations Supplémentaires
                  </h3>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-semibold text-foreground mb-2">
                      Commentaires ou questions
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Y a-t-il quelque chose que nous devrions savoir?"
                    />
                  </div>
                </div>

                {/* Required Documents Notice */}
                <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                  <p className="text-sm text-foreground font-semibold mb-2">
                    Documents Requis pour l&apos;Inscription:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Certifikat de naissance de l&apos;enfant</li>
                    <li>• Dossier d&apos;agrément ministériel</li>
                    <li>• Preuve de vaccination</li>
                    <li>• Informations médicales pertinentes</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Soumettre l&apos;Inscription
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires. Nous traiterons votre demande dans les 24 heures.
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
