import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      <Header />
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Nos Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Trois programmes d&apos;excellence pour chaque étape du développement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Crèche */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">👶</div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Crèche</h2>
              <p className="text-primary font-semibold mb-4">2 mois à 18 mois</p>
              <p className="text-muted-foreground mb-6">
                Notre service de crèche offre un environnement doux et sécurisé pour les tout-petits, avec un personnel formé et attentif.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Environnement chauffé et climatisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Personnel qualifié et expérimenté</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Menus équilibrés et adaptés</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Activités sensorielles stimulantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Suivi individuel du développement</span>
                </div>
              </div>
              <Link href="#contact" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                En savoir plus
              </Link>
            </Card>

            {/* Préscolaire */}
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-secondary">
              <div className="text-5xl mb-4">🎨</div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Préscolaire</h2>
              <p className="text-secondary font-semibold mb-4">18 mois à 3 ans</p>
              <p className="text-muted-foreground mb-6">
                Programme éducatif structuré favorisant le développement cognitif, moteur et social.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Apprentissage ludique et interactif</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Développement moteur et créatif</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Socialisation avec les pairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Activités artistiques et musicales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Préparation aux apprentissages formels</span>
                </div>
              </div>
              <Link href="#contact" className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                En savoir plus
              </Link>
            </Card>

            {/* Garderie */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌟</div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Garderie Éducative</h2>
              <p className="text-accent font-semibold mb-4">2 ans à 3 ans</p>
              <p className="text-muted-foreground mb-6">
                Service de garderie combinant sécurité et éducation avec des activités enrichissantes.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Horaires flexibles et adaptés</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Activités éducatives programmées</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Nutrition équilibrée et saine</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Suivi personnalisé de chaque enfant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Communication régulière avec parents</span>
                </div>
              </div>
              <Link href="#contact" className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                En savoir plus
              </Link>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à inscrire votre enfant?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contactez-nous dès aujourd&apos;hui pour discuter du programme qui convient le mieux à votre enfant.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-white text-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
