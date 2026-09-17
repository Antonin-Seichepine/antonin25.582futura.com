import { Navigate, Route, Routes } from "react-router-dom"
import { Header } from "@/components/Header"
import { Accueil } from "@/pages/Accueil"
import { Cours } from "@/pages/Cours"
import { useLangue } from "@/i18n"

export default function App() {
  const { t } = useLangue()

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:text-ink"
      >
        {t.aller}
      </a>
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/:slug" element={<Cours />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}
