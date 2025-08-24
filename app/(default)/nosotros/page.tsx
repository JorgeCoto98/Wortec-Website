import type { Metadata } from 'next'
import PageIllustration from '@/components/page-illustration'
import Features from '@/components/features'
import Workflows from '@/components/workflows'
import Cta from '@/components/cta'
import TeamGallery from '@/components/team-gallery'

export const metadata: Metadata = {
  title: 'Nosotros - Wortec Darktec Landing',
  description: 'Conoce nuestra historia, equipo y experiencia.',
}

export default function Nosotros() {
  return (
    <>
      <PageIllustration />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70">
          Conoce a Wortec
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Construimos tecnología a tu medida
        </h1>
        <p className="mt-4 max-w-3xl text-white/70 md:text-lg">
          Somos un equipo multidisciplinario que combina desarrollo de software, infraestructura
          y experiencias impulsadas por IA para acelerar la transformación digital.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Nuestra historia</h2>
            <p className="mt-4 text-white/80">
              Wortec nació acercando soluciones tecnológicas de alto impacto a negocios reales.
              Empezamos con sitios y sistemas a medida; hoy construimos plataformas educativas,
              e-commerce y soluciones con IA, con un enfoque práctico y cercano.
            </p>
            <p className="mt-4 text-white/80">
              Mantenemos la filosofía de proyectos claros, entregas puntuales y resultados medibles.
            </p>
            <ul className="mt-6 grid gap-2 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                10+ años de experiencia.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Educación, retail, manufactura y servicios.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                Calidad, seguridad y escalabilidad.
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-1">
              <div className="flex h-full items-center justify-center rounded-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/30 via-indigo-500/10 to-transparent">
                <p className="px-8 text-center text-sm text-white/70">
                  imagen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10">
          <h3 className="text-xl md:text-2xl font-semibold text-white">Nuestra experiencia</h3>
          <p className="mt-2 max-w-3xl text-white/70">
            Ingeniería + diseño funcional para productos mantenibles y escalables.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: '30+', label: 'Proyectos' },
              { value: '25+', label: 'Clientes' },
              { value: '4', label: 'Sectores clave' },
              { value: 'A+', label: 'Soporte' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-black/20 p-5 text-center">
                <div className="text-3xl md:text-4xl font-black tracking-tight text-white">{s.value}</div>
                <div className="mt-1 text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Nuestro equipo</h2>
          <p className="text-sm text-white/70">Sube fotos, nombres y roles para mostrarlos en la galería.</p>
        </div>
        <TeamGallery />
      </section>

      {/* Reutiliza la misma lógica/diseño de la landing */}
      <Features />
      <Workflows />
      <Cta />
    </>
  )
}
