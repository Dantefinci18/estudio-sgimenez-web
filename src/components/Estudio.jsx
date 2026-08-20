import '../estilos/estudio.css'

function Estudio(){
    return(
        <section id="estudio">
            <div class="section-header">
                <h2 class="section-title">Sobre Nosotros</h2>
                <div class="section-rule"></div>
            </div>

            <div class="estudio-wrap">
                <div class="foto-wrapper">
                <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&auto=format&fit=crop&q=80"
                    alt="Equipo del Estudio Jurídico Martínez &amp; Villanueva"
                    class="foto-equipo"
                    onerror="this.style.display='none'; document.getElementById('foto-fallback').style.display='flex';"
                />
                <div id="foto-fallback" class="foto-fallback">
                    <span>⚖</span>
                    <span>Foto del Equipo</span>
                </div>
                <div class="foto-overlay">
                    <p class="foto-caption">
                    Equipo del Estudio Jurídico Martínez &amp; Villanueva &mdash; Buenos Aires, Argentina
                    </p>
                </div>
                </div>

                <div class="historia-grid">
                <div class="historia-text">
                    <h3>Nuestra Historia</h3>
                    <p>
                    El Estudio Jurídico fue fundado en el año 2004 por el Dr. Alejandro Martínez y la
                    Dra. Carmen Villanueva, con la convicción de que todo ciudadano merece acceso a una
                    defensa legal de calidad, sin importar la complejidad de su situación.
                    </p>
                    <p>
                    Desde nuestros humildes comienzos con una pequeña oficina en el centro de Buenos Aires,
                    crecimos hasta convertirnos en un estudio de referencia con un equipo de doce
                    profesionales especializados en distintas ramas del derecho argentino e internacional.
                    </p>
                    <p>
                    A lo largo de más de dos décadas hemos acompañado a cientos de familias y empresas
                    en sus momentos más difíciles, siempre guiados por el compromiso con la justicia,
                    la ética profesional y el trato humano como pilares fundamentales de nuestra práctica.
                    </p>
                </div>

                <div class="valores-list">
                    <div class="valor">
                    <div class="valor-icon">⚖</div>
                    <div class="valor-body">
                        <h4>Compromiso con la Justicia</h4>
                        <p>Cada caso recibe la misma dedicación y rigor, sin importar su envergadura. Siempre buscamos el mejor resultado posible para nuestros clientes.</p>
                    </div>
                    </div>
                    <div class="valor">
                    <div class="valor-icon">🤝</div>
                    <div class="valor-body">
                        <h4>Confianza y Transparencia</h4>
                        <p>Mantenemos una comunicación clara y honesta, informando en todo momento sobre el estado y las perspectivas reales de cada caso.</p>
                    </div>
                    </div>
                    <div class="valor">
                    <div class="valor-icon">📚</div>
                    <div class="valor-body">
                        <h4>Excelencia Profesional</h4>
                        <p>Nuestro equipo se actualiza de forma permanente ante los cambios legislativos y jurisprudenciales para ofrecer siempre la estrategia legal más sólida.</p>
                    </div>
                    </div>
                    <div class="valor">
                    <div class="valor-icon">❤</div>
                    <div class="valor-body">
                        <h4>Trato Humano</h4>
                        <p>Sabemos que detrás de cada expediente hay personas. Por eso brindamos un trato cálido, cercano y empático en cada consulta.</p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>

    )
}

export default Estudio;