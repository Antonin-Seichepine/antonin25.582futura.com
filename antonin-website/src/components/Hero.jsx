import { ShaderBackground } from "@/components/ShaderBackground"
import { useLangue } from "@/i18n"

export function Hero() {
  const { t } = useLangue()

  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-20">
        <ShaderBackground className="h-full w-full" />
      </div>

      {/* Voile sombre côté texte : garantit le contraste quel que soit
          l'endroit où le coral dérive. */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/25 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:px-10">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.22em] text-paper/65">
          {t.heroEyebrow}
        </p>

        <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.86] tracking-tight text-paper">
          Antonin
          <br />
          Seichepine
        </h1>

        <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-paper/75">
          {t.heroIntro}
        </p>
      </div>
    </section>
  )
}
