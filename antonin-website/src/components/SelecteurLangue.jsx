import { LANGUES, useLangue } from "@/i18n"

export function SelecteurLangue() {
  const { langue, setLangue, t } = useLangue()

  return (
    <div
      role="group"
      aria-label={t.langue}
      className="ml-1 flex items-center gap-0.5 border-l border-paper/15 pl-1.5"
    >
      {LANGUES.map((code) => {
        const actif = code === langue
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLangue(code)}
            aria-pressed={actif}
            className={`rounded-full px-2.5 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-paper/10 ${
              actif ? "bg-coral text-ink" : "text-paper/60 hover:text-paper"
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}
