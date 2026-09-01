import '../estilos/inicio.css'

function InicioDesktop(){
    return(
        <div>
            <div className="hero-content">
                <span className="hero-badge">Abogada de Familia y Sucesiones 
                    &mdash; 
                    Buenos Aires, Argentina</span>

                <h1 className="hero-name">Sofía Giménez</h1>

                <h2 className="hero-title">
                    Defiendo tus <span className="highlight">Derechos</span><br />
                    con Compromiso
                </h2>
                <p className="hero-sub">
                        Asesoramiento legal personalizado, claro y cercano. Cada caso recibe la dedicación y el rigor que merece.
                </p>
                <a className="btn-reservar" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Reservar Turno
            </a>
            </div>
            <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=85" alt="Sofía Giménez" />
            </div>
        </div>
    )
}

export default InicioDesktop;