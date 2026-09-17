import { useLangue } from "@/i18n"

export function BoutonGithub({ href }) {
  const { t } = useLangue()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full bg-ink/90 px-5 py-3 font-sans text-sm font-medium text-paper ring-1 ring-ink/15 backdrop-blur-xl transition-colors hover:bg-ink"
    >
      <svg viewBox="0 0 19 19" aria-hidden="true" className="h-[19px] w-[19px] shrink-0">
        <use href="/icons.svg#github-icon" />
      </svg>
      {t.github}
      <span aria-hidden="true" className="text-coral">↗</span>
      <span className="sr-only">{t.nouvelOnglet}</span>
    </a>
  )
}
