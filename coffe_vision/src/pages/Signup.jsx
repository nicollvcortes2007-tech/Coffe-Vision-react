import React, { useState } from 'react';

export default function Signup({ cambiarVista }) {
  const [nombre, setNombre] = useState('');
  const [finca, setFinca] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    cambiarVista('dashboard');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-100 px-4 py-8">
      <article className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-stone-200">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold text-amber-900">Crear Cuenta</h2>
          <p className="text-stone-500 text-sm mt-1">Únete a Coffee+Vision para gestionar tu finca</p>
        </header>

        <form onSubmit={manejarEnvio} className="space-y-4">
          <fieldset className="p-0 border-0 m-0">
            <label className="block text-sm font-medium text-stone-700 mb-1">Nombre Completo</label>
            <input
              type="text"
              required
              placeholder="Juan Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
            />
          </fieldset>

          <fieldset className="p-0 border-0 m-0">
            <label className="block text-sm font-medium text-stone-700 mb-1">Nombre de la Finca</label>
            <input
              type="text"
              required
              placeholder="Finca El Cafetal"
              value={finca}
              onChange={(e) => setFinca(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
            />
          </fieldset>

          <fieldset className="p-0 border-0 m-0">
            <label className="block text-sm font-medium text-stone-700 mb-1">Correo Electrónico</label>
            <input
              type="email"
              required
              placeholder="caficultor@ejemplo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
            />
          </fieldset>

          <fieldset className="p-0 border-0 m-0">
            <label className="block text-sm font-medium text-stone-700 mb-1">Contraseña</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-800 focus:outline-none"
            />
          </fieldset>

          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-amber-900 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow"
          >
            Registrar Finca
          </button>
        </form>

        <footer className="mt-6 text-center text-sm text-stone-600">
          <p>
            ¿Ya tienes cuenta?{' '}
            <button
              onClick={() => cambiarVista('login')}
              className="text-amber-800 font-semibold hover:underline"
            >
              Inicia sesión
            </button>
          </p>
        </footer>
      </article>
    </main>
  );
}