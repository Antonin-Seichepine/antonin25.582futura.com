// Source unique des cours et des rendus.
// `titre` reprend pour l'instant le nom des dossiers de D:\MMI\Vanier :
// à remplacer par les intitulés exacts, et à compléter avec `code` et
// `description` quand Antonin les fournit.
export const cours = [
  {
    slug: "design-thinking",
    titre: "Design Thinking",
    code: null,
    description: null,
    figma: null,
    rendus: [],
  },
  {
    slug: "functional-documents",
    titre: "Functional Documents",
    code: null,
    description: null,
    figma: null,
    rendus: [],
  },
  {
    slug: "motion-graphics",
    titre: "Motion Graphics",
    code: null,
    description: null,
    figma: "https://www.figma.com/design/K9sJS5t3CtUdqOuwYAQslR/mg1_Antonin?node-id=0-1&t=HnoPkD0xdEbm0csk-1",
    rendus: [],
  },
  {
    slug: "sound-design",
    titre: "Sound Design",
    code: null,
    description: null,
    figma: null,
    rendus: [],
  },
  {
    slug: "web3",
    titre: "Web3",
    code: null,
    description: null,
    figma: "https://www.figma.com/design/Au3xGFSR17qrBEe3o5cu2M/Untitled?node-id=0-1&t=7AR9prWD1X91XGMk-1",
    rendus: [],
  },
]

export const trouverCours = (slug) => cours.find((c) => c.slug === slug)
