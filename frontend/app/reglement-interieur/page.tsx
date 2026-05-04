'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { 
  Clock, 
  UserCheck, 
  Users, 
  Shield, 
  MessageCircle, 
  DoorOpen,
  Heart,
  Shirt,
  Bus,
  Camera,
  UsersRound,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BookOpen
} from 'lucide-react'

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

const articles = [
  {
    id: 1,
    title: "Horaires",
    subtitle: "Mon enfant va à l'école tous les jours",
    icon: Clock,
    color: "bg-primary",
    content: [
      "Tous les enfants doivent arriver en classe le matin entre 7H45 et 8H00, l'après-midi entre 14H00 et 14H15.",
      "Les enfants sont confiés aux enseignants par les parents ou les personnes qui les accompagnent.",
      "Il est exclu que des enfants de maternelle quittent seuls l'enceinte scolaire.",
      "S'il arrive après 8H45, mon enfant ne sera pas admis en classe.",
    ],
    schedule: {
      matin: { accueil: "7h45 - 8h45", sortie: "11h55 - 12h" },
      apresmidi: { accueil: "14h35 - 14h45", sortie: "16h40 - 16h45" }
    },
    important: "En cas d'absence, je préviens impérativement l'école par téléphone ou par courrier.",
  },
  {
    id: 2,
    title: "Inscription et Assiduité",
    subtitle: "Mon enfant arrive et quitte l'école à l'heure",
    icon: UserCheck,
    color: "bg-secondary",
    content: [
      "Les enfants peuvent être inscrits à l'école maternelle en TPS (année des 2 ans) ou en PS (année des 3 ans).",
      "Il y a obligation d'assiduité scolaire, l'instruction étant obligatoire à partir de la petite section.",
      "Toute absence doit être justifiée par téléphone, par écrit ou par mail.",
    ],
    documents: [
      "Livret de famille",
      "Document attestant les vaccinations obligatoires",
      "Justificatif de domicile",
      "Certificat de radiation (en cas de changement d'école)"
    ]
  },
  {
    id: 3,
    title: "Accompagnement",
    subtitle: "Mon enfant ne quitte jamais l'école seul",
    icon: Users,
    color: "bg-accent",
    content: [
      "Mon enfant quitte toujours l'école accompagné.",
      "Le soir, il est repris par le parent ou la personne autorisée (par écrit) à venir le chercher.",
      "Les enfants sont repris par les parents ou par toute personne autorisée par eux et par écrit (fiche de renseignement ou courrier).",
    ],
    attention: "Lorsque vous venez récupérer votre enfant, refermez bien les loquets du portail de la cour et de la porte d'entrée juste après votre passage."
  },
  {
    id: 4,
    title: "Autorité Parentale",
    subtitle: "J'informe l'école de mes changements de situation personnelle",
    icon: Shield,
    color: "bg-[oklch(var(--accent-blue))]",
    content: [
      "Les deux parents ont les mêmes droits et devoirs pour élever et protéger leur enfant.",
      "Le directeur de l'école est en relation avec les 2 parents et doit être informé des changements importants (déménagement, séparation...).",
      "En cas de séparation, les parents doivent fournir les copies des actes officiels fixant l'exercice de l'autorité parentale et la résidence habituelle de l'enfant.",
    ]
  },
  {
    id: 5,
    title: "Communication avec les Familles",
    subtitle: "Je suis les progrès et le comportement scolaire de mon enfant",
    icon: MessageCircle,
    color: "bg-primary",
    content: [
      "Les enseignants organisent en début d'année deux réunions d'information concernant le fonctionnement de l'école et les projets de l'année.",
      "Je suis invité à participer aux deux réunions organisées à la Rentrée par l'équipe enseignante.",
      "Je suis également invité à échanger sur les progrès et le comportement de mon enfant lors de rendez-vous prévus à cet effet (généralement en décembre).",
      "Je peux moi aussi demander un rendez-vous à l'équipe pédagogique si besoin.",
    ]
  },
  {
    id: 6,
    title: "Circulation dans l'École",
    subtitle: "Règles de sécurité",
    icon: DoorOpen,
    color: "bg-secondary",
    content: [
      "Les poussettes doivent être laissées devant la porte d'entrée de l'école.",
      "Les loquets du portail de la cour et de la porte d'entrée doivent être fermés aussitôt le passage de chaque adulte.",
      "Les vélos et les trottinettes sont tenus à la main jusqu'au portail de la rue.",
      "Les animaux même en laisse sont formellement interdits dans l'enceinte de l'école.",
    ]
  },
  {
    id: 7,
    title: "Bien-être et Santé",
    subtitle: "Je veille à l'hygiène et à la santé de mon enfant",
    icon: Heart,
    color: "bg-accent",
    content: [
      "Lorsqu'il arrive à l'école, mon enfant doit être propre (mains lavées, dents brossées...) et prêt à affronter la journée (bien reposé, petit déjeuner pris...).",
      "Les enfants peuvent bénéficier vers 10h30 d'une collation fournie par la famille (fruit, tranche de pain...).",
      "À la maison, je m'assure régulièrement que mon enfant n'a pas de poux et traite ses cheveux à l'aide d'un shampoing anti-poux dès leur première apparition.",
      "S'il est malade, mon enfant ne peut pas rester à l'école. Les enseignants ne lui donnent aucun médicament.",
    ],
    important: "Les enfants malades ne peuvent être acceptés à l'école. Tout enfant malade à l'école est remis à sa famille."
  },
  {
    id: 8,
    title: "Vêtements",
    subtitle: "Je fais attention aux vêtements que porte mon enfant",
    icon: Shirt,
    color: "bg-[oklch(var(--accent-blue))]",
    content: [
      "Une tenue confortable (ni bretelles, ni ceinture...)",
      "Des chaussures fermées (ni talons, ni tongs, ni bottes de pluie)",
      "Tous les vêtements (pull, manteau, bonnet, écharpe, gants...) doivent être marqués au nom de l'enfant.",
      "Si mon enfant porte des lunettes, j'indique aux enseignants s'il doit les garder pendant la récréation.",
    ],
    interdit: [
      "Foulard ou écharpe en tissu non extensible (risque d'étranglement)",
      "Parapluie"
    ]
  },
  {
    id: 9,
    title: "Objets Personnels",
    subtitle: "Je veille à ce que mon enfant n'apporte aucun objet personnel à l'école",
    icon: AlertTriangle,
    color: "bg-primary",
    content: [
      "L'école n'est pas responsable des objets personnels apportés par les élèves. Ceux-ci peuvent être perdus, volés.",
    ],
    interdit: [
      "Bonbons",
      "Jeux (cartes Pokemon, figurines...)",
      "Argent",
      "Maquillage",
      "Bijoux de valeur ou dangereux",
      "Téléphones portables"
    ],
    important: "S'il souhaite montrer un objet à la classe (souvenir de vacances, etc.), l'enfant demande avant l'autorisation à l'enseignant."
  },
  {
    id: 10,
    title: "Sorties Scolaires",
    subtitle: "Activités obligatoires",
    icon: Bus,
    color: "bg-secondary",
    content: [
      "La participation des élèves aux sorties scolaires (musées, piscine, judo...) organisées sur le temps de classe sont obligatoires.",
      "Pour l'encadrement des activités scolaires se déroulant à l'extérieur de l'école, les enseignants sollicitent la participation de parents volontaires agissant à titre bénévole.",
    ]
  },
  {
    id: 11,
    title: "Droit à l'Image",
    subtitle: "Protection des données personnelles",
    icon: Camera,
    color: "bg-accent",
    content: [
      "Personne n'a le droit de fixer, reproduire ou diffuser l'image d'autrui sans son consentement préalable.",
      "Aucune photo ne peut être prise par les parents lors des différentes visites ou manifestations de l'école.",
      "Seule l'équipe pédagogique pourra prendre des photos.",
    ]
  },
  {
    id: 12,
    title: "Conseil d'École",
    subtitle: "Je peux rejoindre le conseil d'école et/ou l'association des parents d'élèves",
    icon: UsersRound,
    color: "bg-[oklch(var(--accent-blue))]",
    content: [
      "En tant que parent, je peux demander à faire partie du conseil d'école (élection annuelle en octobre) ou de l'association des parents d'élèves.",
      "Le conseil d'école se réunit 3 fois par an.",
      "Les parents d'élèves élisent chaque année, en octobre, une liste de parents d'élèves volontaires pour les représenter lors des conseils d'écoles.",
      "Chaque Conseil fait l'objet d'un compte-rendu public.",
    ]
  },
]

const rulesOfLife = {
  respect_personnes: [
    "Je me tiens correctement",
    "Je respecte les autres : je surveille mon langage et mes gestes",
    "Je suis poli : je dis « bonjour », « au revoir », « merci »,...",
    "Je respecte les différences",
    "Je respecte le bien des autres (cartable, goûter, jeux, objets personnels, vêtements)",
    "L'école est un lieu de travail, je porte une tenue correcte",
    "J'obéis à tous les éducateurs, y compris les parents bénévoles",
  ],
  respect_lieux: [
    "Dans la cour, je ne m'appuie pas contre le grillage et je ne monte pas sur le muret",
    "Je ne joue pas autour des bacs à fleurs",
    "Je prends soin du matériel collectif (bureaux, livres,...)",
    "Si je perds ou détériore du matériel collectif, je le remplace",
    "J'utilise les poubelles pour jeter mes papiers",
  ],
  respect_fonctionnement: [
    "J'arrive à l'heure",
    "Je me mets en rang en silence quand la cloche sonne",
    "Je justifie mes absences par un billet signé de mes parents",
    "Je ne sors pas de la cour ni de l'école pendant les horaires scolaires",
    "Je me déplace dans la classe et dans les couloirs sans courir et sans bruit",
    "Je ne joue pas et je ne reste pas dans les toilettes",
    "Je laisse les objets dangereux (couteaux, cutters, ciseaux pointus, ballons de cuirs,...) ou de valeur (jeux électroniques, téléphones portables,...) chez moi",
    "Je n'apporte ni chewing-gum, ni sucette",
    "Je ne demande pas aux autres enfants",
    "La circulation d'argent entre enfants est interdite",
    "Je ne m'accroche pas aux filets des cages de jeux",
    "Je ne cours pas dans la descente après avoir franchi le portail",
    "Je ne me penche pas aux fenêtres",
  ]
}

export default function ReglementInterieurPage() {
  return (
    <main className="bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl" />
        </motion.div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Règlement Intérieur
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aux Pépinières de l&apos;Éternel, respect et courtoisie sont des valeurs à faire vivre tant par les enfants que par les adultes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Rules Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pourquoi un règlement intérieur ?
            </h2>
            <div className="bg-muted/30 rounded-2xl p-6 text-left max-w-2xl mx-auto">
              <p className="text-muted-foreground mb-4">
                Le règlement intérieur définit les droits et les devoirs :
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  Des enseignants
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  Du personnel de l&apos;école
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  Des parents
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  Des élèves
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  Des partenaires et intervenants extérieurs
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                Le règlement intérieur est un document obligatoire. Il est élaboré par le directeur d&apos;école, puis examiné et voté lors du conseil d&apos;école. Toutes les personnes fréquentant l&apos;école s&apos;engagent à le respecter. Les parents le signent en début d&apos;année.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Les Principaux Points
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {articles.map((article) => {
              const Icon = article.icon
              return (
                <motion.div key={article.id} variants={cardVariants}>
                  <Card className="h-full p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${article.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground">Article {article.id}</span>
                        <h3 className="text-xl font-bold text-foreground">{article.title}</h3>
                        <p className="text-sm text-primary font-medium">{article.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {article.content.map((text, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {text}
                        </p>
                      ))}
                      
                      {article.schedule && (
                        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                          <p className="font-semibold text-foreground text-sm mb-2">Horaires:</p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-white p-2 rounded">
                              <p className="font-medium">Matin</p>
                              <p className="text-muted-foreground">Accueil: {article.schedule.matin.accueil}</p>
                              <p className="text-muted-foreground">Sortie: {article.schedule.matin.sortie}</p>
                            </div>
                            <div className="bg-white p-2 rounded">
                              <p className="font-medium">Après-midi</p>
                              <p className="text-muted-foreground">Accueil: {article.schedule.apresmidi.accueil}</p>
                              <p className="text-muted-foreground">Sortie: {article.schedule.apresmidi.sortie}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {article.documents && (
                        <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                          <p className="font-semibold text-foreground text-sm mb-2">Documents requis:</p>
                          <ul className="space-y-1">
                            {article.documents.map((doc, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-accent" />
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {article.interdit && (
                        <div className="mt-4 p-4 bg-destructive/10 rounded-lg">
                          <p className="font-semibold text-destructive text-sm mb-2">Non autorisé:</p>
                          <ul className="space-y-1">
                            {article.interdit.map((item, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                                <XCircle className="w-3 h-3 text-destructive" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {article.attention && (
                        <div className="mt-4 p-3 bg-secondary/10 border-l-4 border-secondary rounded-r-lg">
                          <p className="text-sm text-foreground font-medium">Attention:</p>
                          <p className="text-xs text-muted-foreground">{article.attention}</p>
                        </div>
                      )}
                      
                      {article.important && (
                        <div className="mt-4 p-3 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                          <p className="text-sm text-foreground font-medium">Important:</p>
                          <p className="text-xs text-muted-foreground">{article.important}</p>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Rules of Life Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nos Règles de Vie à l&apos;École
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Respect des Personnes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Respect des Personnes
                </h3>
                <ul className="space-y-3">
                  {rulesOfLife.respect_personnes.map((rule, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Respect des Lieux et du Matériel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <DoorOpen className="w-6 h-6" />
                  Respect des Lieux et du Matériel
                </h3>
                <ul className="space-y-3">
                  {rulesOfLife.respect_lieux.map((rule, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Respect des Règles de Fonctionnement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-0 shadow-lg">
                <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Respect des Règles de Fonctionnement
                </h3>
                <ul className="space-y-3">
                  {rulesOfLife.respect_fonctionnement.map((rule, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <p className="text-muted-foreground">
              Toute personne se trouvant dans l&apos;école se conformera au règlement intérieur et adoptera un comportement adapté au lieu.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Règlement intérieur en vigueur - Les Pépinières de l&apos;Éternel
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
