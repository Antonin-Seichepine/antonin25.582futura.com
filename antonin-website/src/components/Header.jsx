import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { SelecteurLangue } from "@/components/SelecteurLangue"
import { cours } from "@/data/cours"
import { useLangue } from "@/i18n"

const lien =
  "block rounded-full px-4 py-1.5 font-sans text-sm font-medium transition-colors hover:bg-paper/10"

const etat = ({ isActive }) =>
  `${lien} ${isActive ? "bg-paper/10 text-paper" : "text-paper/75 hover:text-paper"}`

export function Header() {
  const [ouvert, setOuvert] = useState(false)
  const { pathname } = useLocation()
  const { t } = useLangue()

  useEffect(() => {
    setOuvert(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <div className="mx-auto flex max-w-fit flex-col items-stretch">
        <div className="flex items-center gap-1 rounded-full bg-ink/88 px-2 py-2 ring-1 ring-paper/15 backdrop-blur-xl">
          <NavLink
            to="/"
            className="flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 transition-colors hover:bg-paper/10"
          >
            <img src="./assets/logo-mark-white.svg" alt="" className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">{t.accueilAria}</span>
          </NavLink>

          <nav aria-label={t.navCours} className="hidden md:block">
            <ul className="flex items-center">
              {cours.map((c) => (
                <li key={c.slug}>
                  <NavLink to={`/${c.slug}`} className={etat}>
                    {c.titre}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOuvert((v) => !v)}
            aria-expanded={ouvert}
            aria-controls="menu-cours"
            className={`${lien} text-paper/75 hover:text-paper md:hidden`}
          >
            {t.navCours}
          </button>

          <SelecteurLangue />
        </div>

        {ouvert && (
          <nav
            id="menu-cours"
            aria-label={t.navCours}
            className="mt-2 rounded-3xl bg-ink/92 p-2 ring-1 ring-paper/15 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {cours.map((c) => (
                <li key={c.slug}>
                  <NavLink
                    to={`/${c.slug}`}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-2.5 font-sans text-sm font-medium transition-colors hover:bg-paper/10 ${
                        isActive ? "bg-paper/10 text-paper" : "text-paper/80 hover:text-paper"
                      }`
                    }
                  >
                    {c.titre}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
