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

          <a
            href="https://github.com/Antonin-Seichepine/Antonin---Vanier-"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-paper/75 transition-colors hover:bg-paper/10 hover:text-paper"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
              <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.05-.02-1.9-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.92a9.4 9.4 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>

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
