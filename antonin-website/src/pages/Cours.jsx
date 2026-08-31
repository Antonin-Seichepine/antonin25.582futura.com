import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { BoutonFigma } from "@/components/BoutonFigma"
import { trouverCours } from "@/data/cours"
import { useLangue } from "@/i18n"

export function Cours() {
  const { slug } = useParams()
  const { t } = useLangue()
  const cours = trouverCours(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!cours) return <Navigate to="/" replace />

  return (
    <article className="min-h-svh bg-paper">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span> {t.retour}
        </Link>

        <p className="mt-10 font-sans text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
          {cours.code ? `${cours.code} · ` : ""}
          {t.coursEyebrow}
        </p>

        <h1 className="mt-4 font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.9] tracking-tight text-ink">
          {cours.titre}
        </h1>

        {cours.figma && (
          <div className="mt-10">
            <BoutonFigma href={cours.figma} />
          </div>
        )}

        <section className="mt-16 border-t border-rule pt-10">
          <h2 className="font-display text-3xl tracking-tight text-ink">{t.rendus}</h2>

          {cours.rendus.length === 0 ? (
            <p className="mt-4 font-sans text-ink-soft">{t.aucunRendu}</p>
          ) : (
            <ul className="mt-6 divide-y divide-rule border-t border-rule">
              {cours.rendus.map((rendu) => (
                <li key={rendu.slug}>
                  <Link
                    to={`/${cours.slug}/${rendu.slug}`}
                    className="group flex items-baseline justify-between gap-6 py-5"
                  >
                    <span className="font-sans text-lg font-medium text-ink transition-colors group-hover:text-coral">
                      {rendu.titre}
                    </span>
                    <time
                      dateTime={rendu.date}
                      className="shrink-0 font-sans text-sm tabular-nums text-ink-soft"
                    >
                      {rendu.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </article>
  )
}
