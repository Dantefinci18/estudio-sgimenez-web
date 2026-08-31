import '../estilos/estudio.css'

function Estudio(){
    return(
        <section id="estudio">
            <div class="section-header">
                <h2 class="section-title">Sobre Mí</h2>
                <div class="section-rule"></div>
            </div>

            <div class="estudio-wrap">
                <div class="foto-wrapper">
                <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1400&auto=format&fit=crop&q=80"
                    alt="Dra. Sofia Gimenez — Abogada"
                    class="foto-equipo"
                    onError="this.style.display='none'; document.getElementById('foto-fallback').style.display='flex';"
                />
                <div id="foto-fallback" class="foto-fallback">
                    <span>⚖</span>
                    <span>Sofia Gimenez</span>
                </div>
                <div class="foto-overlay">
                    <p class="foto-caption">
                    Dra. Sofia Gimenez &mdash; Buenos Aires, Argentina
                    </p>
                </div>
                </div>

                <div class="historia-grid">
                <div class="historia-text">
                    <h3>Mi Trayectoria</h3>
                    <p>
                    Soy abogada matriculada en el Colegio Público de Abogados de la Capital Federal,
                    con más de diez años de experiencia en el ejercicio de la profesión. Me gradué con
                    honores en la Universidad de Buenos Aires y me especialicé en distintas ramas del
                    derecho privado y de familia.
                    </p>
                    <p>
                    A lo largo de mi carrera acompañé a cientos de personas en situaciones complejas,
                    brindando siempre un asesoramiento cercano, honesto y estratégico. Creo que el
                    acceso a una buena defensa legal no debería ser un privilegio.
                    </p>
                    <p>
                    Hoy ejerzo de manera independiente, lo que me permite dedicarle a cada cliente
                    la atención personalizada que su caso merece, sin intermediarios.
                    </p>
                </div>

                <div class="valores-list">
                    <div class="valor">
                    <div class="valor-body">
                        <h4>Compromiso con cada caso</h4>
                        <p>Cada expediente recibe mi atención personal y directa. No hay casos menores: todos merecen la misma dedicación y rigor profesional.</p>
                    </div>
                    </div>
                    <div class="valor">
                    <div class="valor-body">
                        <h4>Comunicación clara y honesta</h4>
                        <p>Te informo en todo momento sobre el estado de tu situación y las perspectivas reales, sin tecnicismos innecesarios ni falsas promesas.</p>
                    </div>
                    </div>
                    <div class="valor">
                    <div class="valor-body">
                        <h4>Actualización permanente</h4>
                        <p>Me mantengo al día con los cambios legislativos y jurisprudenciales para ofrecer siempre la estrategia legal más sólida y actualizada.</p>
                    </div>
                    </div>
                    <div class="valor">
                    <div class="valor-body">
                        <h4>Trato cercano y empático</h4>
                        <p>Detrás de cada expediente hay una persona. Por eso me tomo el tiempo de escucharte y acompañarte durante todo el proceso.</p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>

    )
}

export default Estudio;