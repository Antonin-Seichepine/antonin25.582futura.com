import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { BoutonFigma } from "@/components/BoutonFigma"
import { BoutonGithub } from "@/components/BoutonGithub"
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

        {(cours.figma || cours.github) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {cours.figma && <BoutonFigma href={cours.figma} />}
            {cours.github && <BoutonGithub href={cours.github} />}
          </div>
        )}

        {cours.videos?.length > 0 && (
          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-display text-3xl tracking-tight text-ink">{t.videos}</h2>

            <ul className="mt-6 grid gap-8 sm:grid-cols-2">
              {cours.videos.map((video) => (
                <li key={video.slug}>
                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full rounded-2xl bg-ink"
                  />
                  <p className="mt-3 font-sans text-sm font-medium text-ink-soft">{video.titre}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  )
}
