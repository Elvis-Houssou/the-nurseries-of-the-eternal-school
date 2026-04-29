import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'

export default function PolitiquePage() {
  return (
    <main>
      <Header />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Politique de Confidentialité
          </h1>

          <div className="space-y-8">
            <Card className="p-8 bg-blue-50 border-l-4 border-primary">
              <p className="text-muted-foreground leading-relaxed">
                Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
              </p>
            </Card>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les Pépinières de l&apos;Éternel s&apos;engage à protéger la vie privée et les données personnelles de tous les visiteurs de ce site web et des parents/tuteurs d&apos;enfants inscrits dans notre établissement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Données Collectées</h2>
              <p className="text-muted-foreground mb-4">Nous collectons les informations suivantes:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Informations personnelles des parents/tuteurs (nom, email, téléphone)</li>
                <li>Informations concernant l&apos;enfant (nom, date de naissance)</li>
                <li>Données médicales et d&apos;allergies (sécurité de l&apos;enfant)</li>
                <li>Informations de contact d&apos;urgence</li>
                <li>Logs d&apos;accès au site web</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Utilisation des Données</h2>
              <p className="text-muted-foreground mb-4">Vos données sont utilisées pour:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Traiter les inscriptions d&apos;enfants</li>
                <li>Communiquer avec les parents/tuteurs</li>
                <li>Assurer la sécurité et le bien-être des enfants</li>
                <li>Améliorer nos services</li>
                <li>Respecter les obligations légales et réglementaires</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Protection des Données</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos données contre l&apos;accès non autorisé, la modification ou la destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Partage des Données</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous ne partageons vos données personnelles que:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Avec le personnel de l&apos;établissement (sur besoin professionnel)</li>
                <li>Avec les autorités compétentes si légalement requises</li>
                <li>Avec les professionnels de santé en cas d&apos;urgence médicale</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Durée de Conservation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les données sont conservées pendant la période d&apos;inscription de l&apos;enfant et pour une période additionnelle conforme aux exigences légales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Droits des Utilisateurs</h2>
              <p className="text-muted-foreground mb-4">Vous avez le droit de:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Accéder à vos données personnelles</li>
                <li>Demander la correction de données inexactes</li>
                <li>Demander la suppression de vos données</li>
                <li>Demander une limitation du traitement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Pour toute question concernant cette politique ou vos données:
              </p>
              <p className="text-muted-foreground">
                <strong>Email:</strong> info@pepinieres-eternel.ci<br />
                <strong>Téléphone:</strong> 01 03 33 30 67
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
