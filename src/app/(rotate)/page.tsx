import { MatrixEditor } from '@/components/MatrixEditor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rotar matriz NxN 90° anti-horario — Prueba técnica',
  description: 'Interfaz para ingresar una matriz NxN (array de arrays) y obtenerla rotada 90 grados en sentido anti-horario. Validaciones, accesibilidad y buenas prácticas con Next.js.',
  alternates: {
    canonical: '/rotate'
  },
  openGraph: {
    title: 'Rotar matriz NxN 90° anti-horario',
    description: 'Interfaz para ingresar una matriz NxN y rotarla 90° anti-horario.',
  }
}

export default function RotatePage() {
  return (
    <main className="min-h-screen px-4 py-8 text-[#191919] bg-[#f8f9fa]">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-[#0071ff]">Rotar matriz NxN — 90° anti-horario</h1>
          <p className="mt-2 text-copy-20">Pega JSON o edita la grilla. La salida aparece en la columna derecha. Implementación orientada a mantenibilidad.</p>
        </header>

        <section aria-labelledby="matrix-editor">
          <MatrixEditor />
        </section>
      </div>
    </main>
  )
}
