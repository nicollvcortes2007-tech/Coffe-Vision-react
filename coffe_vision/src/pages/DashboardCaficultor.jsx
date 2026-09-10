import React from 'react';

export default function DashboardCaficultor({ cambiarVista }) {
  return (
    <article className="min-h-screen bg-stone-100 flex flex-col md:flex-row">
      {/* Menú Lateral */}
      <aside className="w-full md:w-64 bg-amber-900 text-amber-100 p-6 flex flex-col justify-between">
        <section>
          <h1 className="text-2xl font-bold text-amber-200 mb-8">Coffee+Vision</h1>
          <nav className="space-y-3">
            <a href="#lotes" className="block px-4 py-2 rounded-lg bg-amber-800 text-white font-medium">
              🌾 Mis Lotes
            </a>
            <a href="#cosecha" className="block px-4 py-2 rounded-lg hover:bg-amber-800/50 transition">
              📦 Registro Cosecha
            </a>
            <a href="#alertas" className="block px-4 py-2 rounded-lg hover:bg-amber-800/50 transition">
              ⚠️ Alertas / Plagas
            </a>
          </nav>
        </section>

        <button
          onClick={() => cambiarVista('home')}
          className="mt-8 bg-amber-950 hover:bg-amber-900 text-amber-200 py-2 px-4 rounded-lg text-sm text-center transition"
        >
          Cerrar Sesión
        </button>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-6 md:p-10 space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <hgroup>
            <h2 className="text-3xl font-bold text-stone-800">Panel del Caficultor</h2>
            <p className="text-stone-500 text-sm">Resumen de estado y producción de la finca</p>
          </hgroup>
          <aside className="bg-white px-4 py-2 rounded-xl shadow-sm border border-stone-200 text-right">
            <p className="text-xs text-stone-500">Finca Registrada</p>
            <p className="font-bold text-amber-900">Finca El Cafetal</p>
          </aside>
        </header>

        {/* Tarjetas informativas */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-sm font-medium text-stone-500">Total de Lotes Activos</h3>
            <p className="text-3xl font-extrabold text-stone-800 mt-2">4 Lotes</p>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-sm font-medium text-stone-500">Estado Promedio Cultivo</h3>
            <p className="text-3xl font-extrabold text-emerald-600 mt-2">Saludable</p>
          </article>

          <article className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-sm font-medium text-stone-500">Última Recolección</h3>
            <p className="text-3xl font-extrabold text-amber-900 mt-2">120 Kg</p>
          </article>
        </section>

        {/* Tabla de Lotes */}
        <section className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
          <h3 className="text-xl font-bold text-stone-800 mb-4">Gestión de Lotes</h3>
          <section className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 text-sm">
                  <th className="pb-3">Lote</th>
                  <th className="pb-3">Variedad</th>
                  <th className="pb-3">Plantas</th>
                  <th className="pb-3">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700 text-sm">
                <tr>
                  <td className="py-3 font-semibold">Lote 1 - La Ladera</td>
                  <td className="py-3">Castillo</td>
                  <td className="py-3">1,200</td>
                  <td className="py-3">
                    <mark className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-medium">
                      Sano
                    </mark>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Lote 2 - El Alto</td>
                  <td className="py-3">Caturra</td>
                  <td className="py-3">850</td>
                  <td className="py-3">
                    <mark className="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-medium">
                      En Observación
                    </mark>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      </main>
    </article>
  );
}