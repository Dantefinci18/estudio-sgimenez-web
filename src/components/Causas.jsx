import '../estilos/causas.css'

function Causas(){
    return(
        <section id="causas">
            <div class="section-header">
                <h2 class="section-title">Áreas de Práctica</h2>
                <div class="section-rule"></div>
                <p class="section-desc">
                Brindo asesoramiento y representación en distintas ramas del derecho,
                con enfoque personalizado en cada situación.
                </p>
            </div>

            <div class="causas-grid">

                <div class="causa-card">
                <div class="causa-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 class="causa-title">Derecho Civil</h3>
                <p class="causa-desc">
                    Asesoramiento y representación en contratos, obligaciones, daños y perjuicios,
                    sucesiones y todo tipo de conflictos entre particulares o frente a entidades.
                </p>
                </div>

                <div class="causa-card">
                <div class="causa-icon">
                    <svg viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                </div>
                <h3 class="causa-title">Derecho Laboral</h3>
                <p class="causa-desc">
                    Defensa de trabajadores y empleadores en despidos, accidentes laborales,
                    discriminación, convenios colectivos, negociaciones sindicales y más.
                </p>
                </div>

                <div class="causa-card">
                <div class="causa-icon">
                    <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <h3 class="causa-title">Derecho Penal</h3>
                <p class="causa-desc">
                    Representación en procesos penales tanto en la defensa del imputado como en la
                    asistencia a la víctima. Delitos comunes, económicos y de alta complejidad.
                </p>
                </div>

                <div class="causa-card">
                <div class="causa-icon">
                    <svg viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                </div>
                <h3 class="causa-title">Derecho de Familia</h3>
                <p class="causa-desc">
                    Divorcios, alimentos, régimen de visitas, adopciones, violencia familiar y todo
                    lo relacionado con vínculos, filiaciones y relaciones conyugales.
                </p>
                </div>

                <div class="causa-card">
                <div class="causa-icon">
                    <svg viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                </div>
                <h3 class="causa-title">Derecho Comercial</h3>
                <p class="causa-desc">
                    Constitución de sociedades, contratos comerciales, concursos y quiebras,
                    fusiones, adquisiciones y resolución de conflictos societarios.
                </p>
                </div>

                <div class="causa-card">
                <div class="causa-icon">
                    <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                    </svg>
                </div>
                <h3 class="causa-title">Derecho Inmobiliario</h3>
                <p class="causa-desc">
                    Compraventa de propiedades, locaciones, desalojos, propiedad horizontal,
                    usucapión y todo conflicto vinculado a bienes inmuebles.
                </p>
                </div>

            </div>
        </section>
    )
}

export default Causas;