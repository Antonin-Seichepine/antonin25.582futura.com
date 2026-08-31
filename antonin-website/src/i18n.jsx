import { createContext, useContext, useEffect, useMemo, useState } from "react"

export const LANGUES = ["en", "fr"]

const textes = {
  en: {
    htmlLang: "en",
    titrePage: "Antonin Seichepine — Coursework, Vanier College",
    aller: "Skip to content",
    accueilAria: "Antonin Seichepine — home",
    navCours: "Courses",
    retour: "Home",
    langue: "Language",
    heroEyebrow: "Vanier College · Montréal · Fall 2026",
    heroIntro:
      "BUT MMI exchange student at Vanier College from August to December 2026. This site gathers my coursework for the semester.",
    coursEyebrow: "Vanier College · Fall 2026",
    rendus: "Submissions",
    aucunRendu: "Nothing submitted yet.",
    figma: "Course Figma file",
    nouvelOnglet: "(opens in a new tab)",
  },
  fr: {
    htmlLang: "fr",
    titrePage: "Antonin Seichepine — Rendus, Cégep Vanier",
    aller: "Aller au contenu",
    accueilAria: "Antonin Seichepine — accueil",
    navCours: "Cours",
    retour: "Accueil",
    langue: "Langue",
    heroEyebrow: "Cégep Vanier · Montréal · Automne 2026",
    heroIntro:
      "Étudiant BUT MMI en échange au Cégep Vanier d'août à décembre 2026. Ce site rassemble mes rendus de cours du semestre.",
    coursEyebrow: "Cégep Vanier · Automne 2026",
    rendus: "Rendus",
    aucunRendu: "Aucun rendu déposé pour l'instant.",
    figma: "Répertoire Figma du cours",
    nouvelOnglet: "(nouvel onglet)",
  },
}

const Contexte = createContext(null)

export function FournisseurLangue({ children }) {
  const [langue, setLangue] = useState("en")
  const t = textes[langue]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.titrePage
  }, [t])

  const valeur = useMemo(() => ({ langue, setLangue, t }), [langue, t])
  return <Contexte.Provider value={valeur}>{children}</Contexte.Provider>
}

export const useLangue = () => useContext(Contexte)
