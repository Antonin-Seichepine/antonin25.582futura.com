import { useLangue } from "@/i18n"

export function BoutonFigma({ href }) {
  const { t } = useLangue()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full bg-ink/90 px-5 py-3 font-sans text-sm font-medium text-paper ring-1 ring-ink/15 backdrop-blur-xl transition-colors hover:bg-ink"
    >
      {t.figma}
      <span aria-hidden="true" className="text-coral">↗</span>
      <span className="sr-only">{t.nouvelOnglet}</span>
    </a>
  )
}
