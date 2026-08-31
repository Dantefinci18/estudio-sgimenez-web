import '../estilos/inicio.css'

function Inicio() {
    return (
        <section id="inicio">
            <div className="hero-ring"></div>
            <div className="hero-ring"></div>
            <div className="hero-ring"></div>

            <div className="hero-content">
                <span className="hero-badge">Abogada &mdash; Buenos Aires, Argentina</span>

                <h1 className="hero-title">
                    Defiendo tus<br />
                    <span className="highlight">Derechos</span> con<br />
                    Compromiso
                </h1>

                <p className="hero-sub">
                    Asesoramiento legal personalizado, claro y cercano. Cada caso recibe
                    la dedicación y el rigor que merece.
                </p>

                <a
                    className="btn-reservar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Reservar Turno
                </a>

                <div className="hero-stats">
                    <div>
                        <div className="stat-number">+10</div>
                        <div className="stat-label">Años de trayectoria</div>
                    </div>
                    <div>
                        <div className="stat-number">+300</div>
                        <div className="stat-label">Casos resueltos</div>
                    </div>
                    <div>
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Dedicación</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio;