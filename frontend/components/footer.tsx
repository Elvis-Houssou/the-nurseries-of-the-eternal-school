import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-secondary">Les Pépinières de l'Éternel</h3>
          <p className="text-gray-300 mb-4">
            Centre de Protection de la Petite Enfance Privé
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-secondary flex-shrink-0" />
              <span className="text-sm">Carrefour Académie, Cité Cnps Lot 10,Face a la clinique Médicale La Roche Bethsaïda</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-secondary flex-shrink-0" />
              <span className="text-sm">01 03 33 30 67 / 07 49 69 07 01</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-secondary">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#services" className="hover:text-secondary transition-colors">
                Crèche
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-secondary transition-colors">
                Préscolaire
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-secondary transition-colors">
                Garderie Éducative
              </Link>
            </li>
            <li>
              <Link href="#practical" className="hover:text-secondary transition-colors">
                Infos Pratiques
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-secondary">Horaires</h3>
          <p className="text-gray-300 mb-4">
            <strong>Lundi au Vendredi</strong>
            <br />
            7h30 - 18h00
          </p>
          <p className="text-sm text-gray-400">
            Agrément Ministère de la Femme, de la Famille et de l&apos;Enfant
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Les Pépinières de l&apos;Éternel. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
