export default function Home({ cambiarVista }) {
  return (
    <article className="min-h-screen w-full bg-white text-stone-800 font-sans flex flex-col">
      <header className="w-full border-b border-stone-100 py-4 px-8 md:px-12 flex items-center justify-between">
        <aside className="flex items-center gap-2">
          <figure className="m-0 flex items-center gap-2">
            <img 
              src="/src/assets/iconos/logo2.png" 
              alt="Coffee+visión" 
              className="h-20"
            />
          </figure>
        </aside>

        <nav className="hidden md:flex items-center gap-8 text-stone-700 text-sm font-medium">
          <a href="#inicio" className="hover:text-amber-800 transition">Inicio</a>
          <a href="#servicios" className="hover:text-amber-800 transition">Servicios</a>
          <a href="#contacto" className="hover:text-amber-800 transition">Contacto</a>
          <a href="#nosotros" className="hover:text-amber-800 transition">Sobre Nosotros</a>
        </nav>

        <nav className="flex items-center gap-3">
          <button
            onClick={() => cambiarVista('login')}
            className="px-5 py-2 rounded-full border border-stone-300 text-stone-800 hover:bg-stone-50 text-sm font-medium transition"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => cambiarVista('registro')}
            className="px-5 py-2 rounded-full bg-lime-600 hover:bg-lime-700 text-white text-sm font-medium transition shadow-sm"
          >
            Registro
          </button>
        </nav>
      </header>

      <main id="inicio" className="w-full px-8 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <section className="flex flex-col items-start space-y-6">
          <mark className="bg-lime-100 text-lime-800 text-xs font-semibold px-3 py-1 rounded-full border border-lime-200">
            Tecnología Agrícola Premium
          </mark>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-amber-950 leading-tight">
            Tecnología Inteligente para la Producción Cafetera
          </h1>

          <p className="text-stone-600 text-base lg:text-lg leading-relaxed max-w-lg">
            Monitorea cultivos de café, registra plagas y optimiza tu producción mediante herramientas digitales avanzadas diseñadas para el campo.
          </p>

          <nav className="flex items-center gap-4 pt-2">
            <button
              onClick={() => cambiarVista('registro')}
              className="px-6 py-3 bg-amber-950 hover:bg-amber-900 text-white rounded-lg font-medium text-sm flex items-center gap-2 transition shadow-md"
            >
              Comenzar →
            </button>
            <button
              onClick={() => {
                const elemento = document.getElementById('servicios');
                if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg font-medium text-sm transition"
            >
              Explorar
            </button>
          </nav>
        </section>

        <figure className="m-0 w-full h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-stone-100">
          <img
            src="src/assets/imagenes/cultivo.jpg"
            alt="Cultivo de café"
            className="w-full h-full object-cover"
          />
        </figure>
      </main>

      <section id="servicios" className="w-full py-16 px-8 md:px-16 bg-stone-50/50">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-950">
            Funcionalidades Principales
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-2">
            Herramientas diseñadas específicamente para optimizar la gestión de tus cultivos de café
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <article className="group bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-2 hover:border-lime-600 hover:shadow-md transition-all duration-200 cursor-pointer">
            <figure className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-lime-100 flex items-center justify-center mb-4 m-0 transition-colors duration-200">
              <svg className="w-5 h-5 stroke-amber-950 group-hover:stroke-lime-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
            </figure>
            <h3 className="text-lg font-bold text-amber-950 mb-2">
              Gestión de Cultivos
            </h3>
            <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
              Administra tus plantaciones de café con registro completo de variedades, ubicaciones y ciclos de producción.
            </p>
          </article>

          <article className="group bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-2 hover:border-lime-600 hover:shadow-md transition-all duration-200 cursor-pointer">
            <figure className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-lime-100 flex items-center justify-center mb-4 m-0 transition-colors duration-200">
              <svg className="w-5 h-5 stroke-amber-950 group-hover:stroke-lime-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m-8-8h16M6 6l12 12M18 6L6 18" />
              </svg>
            </figure>
            <h3 className="text-lg font-bold text-amber-950 mb-2">
              Control de Plagas
            </h3>
            <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
              Registra y monitorea plagas y enfermedades en tiempo real para tomar acciones preventivas.
            </p>
          </article>

          <article className="group bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-2 hover:border-lime-600 hover:shadow-md transition-all duration-200 cursor-pointer">
            <figure className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-lime-100 flex items-center justify-center mb-4 m-0 transition-colors duration-200">
              <svg className="w-5 h-5 stroke-amber-950 group-hover:stroke-lime-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
              </svg>
            </figure>
            <h3 className="text-lg font-bold text-amber-950 mb-2">
              Manejo de Fertilizantes
            </h3>
            <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
              Controla aplicaciones de fertilizantes, optimiza recursos y mejora la nutrición de tus cultivos.
            </p>
          </article>

          <article className="group bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-2 hover:border-lime-600 hover:shadow-md transition-all duration-200 cursor-pointer">
            <figure className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-lime-100 flex items-center justify-center mb-4 m-0 transition-colors duration-200">
              <svg className="w-5 h-5 stroke-amber-950 group-hover:stroke-lime-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </figure>
            <h3 className="text-lg font-bold text-amber-950 mb-2">
              Monitoreo de Cosechas
            </h3>
            <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
              Registra producción, calidad del grano y optimiza tus procesos de recolección.
            </p>
          </article>

          <article className="group bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-2 hover:border-lime-600 hover:shadow-md transition-all duration-200 cursor-pointer">
            <figure className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-lime-100 flex items-center justify-center mb-4 m-0 transition-colors duration-200">
              <svg className="w-5 h-5 stroke-amber-950 group-hover:stroke-lime-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </figure>
            <h3 className="text-lg font-bold text-amber-950 mb-2">
              Base de Datos Agrícola
            </h3>
            <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
              Almacena toda la información de tu finca en una plataforma segura y accesible desde cualquier lugar.
            </p>
          </article>

          <article className="group bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:border-2 hover:border-lime-600 hover:shadow-md transition-all duration-200 cursor-pointer">
            <figure className="w-10 h-10 rounded-xl bg-stone-100 group-hover:bg-lime-100 flex items-center justify-center mb-4 m-0 transition-colors duration-200">
              <svg className="w-5 h-5 stroke-amber-950 group-hover:stroke-lime-700 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </figure>
            <h3 className="text-lg font-bold text-amber-950 mb-2">
              Reportes en Tiempo Real
            </h3>
            <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
              Visualiza estadísticas, tendencias y métricas de producción con dashboards interactivos.
            </p>
          </article>
        </section>
      </section>

      <section className="w-full py-16 px-8 md:px-16 bg-white">
        <section className="max-w-6xl mx-auto bg-stone-100/70 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-stone-200/60 shadow-sm">
          <figure className="m-0 md:col-span-5 h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-md">
            <img
              src="src/assets/imagenes/cultivo.jpg"
              alt="Planta de café"
              className="w-full h-full object-cover"
            />
          </figure>

          <section className="md:col-span-7 flex flex-col justify-center space-y-6">
            <header>
              <h2 className="text-3xl md:text-4xl font-extrabold text-amber-950 leading-tight mb-3">
                Optimiza tu Producción Cafetera
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                CoffeeTech ayuda a los caficultores a transformar sus procesos tradicionales en operaciones modernas y eficientes mediante tecnología de punta.
              </p>
            </header>

            <ul className="space-y-4 m-0 p-0 list-none">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lime-200/80 text-lime-800 flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <section>
                  <h3 className="text-sm font-bold text-amber-950">Toma Decisiones Informadas</h3>
                  <p className="text-stone-500 text-xs md:text-sm">Accede a datos en tiempo real sobre el estado de tus cultivos, clima y producción.</p>
                </section>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lime-200/80 text-lime-800 flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <section>
                  <h3 className="text-sm font-bold text-amber-950">Mejora la Calidad del Café</h3>
                  <p className="text-stone-500 text-xs md:text-sm">Controla variables críticas que impactan directamente en el sabor y aroma de tu café.</p>
                </section>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lime-200/80 text-lime-800 flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <section>
                  <h3 className="text-sm font-bold text-amber-950">Aumenta la Rentabilidad</h3>
                  <p className="text-stone-500 text-xs md:text-sm">Optimiza recursos, reduce pérdidas y maximiza el rendimiento de tus plantaciones.</p>
                </section>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-lime-200/80 text-lime-800 flex items-center justify-center font-bold text-xs mt-0.5">
                  ✓
                </span>
                <section>
                  <h3 className="text-sm font-bold text-amber-950">Gestión Sostenible</h3>
                  <p className="text-stone-500 text-xs md:text-sm">Implementa prácticas agrícolas responsables con el medio ambiente.</p>
                </section>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </article>
  );
}