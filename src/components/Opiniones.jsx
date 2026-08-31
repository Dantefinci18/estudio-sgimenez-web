import '../estilos/opiniones.css'

const opiniones = [
    {
        nombre: 'María L.',
        texto: 'Excelente atención y muy clara en sus explicaciones. Me ayudó a resolver mi divorcio de manera rápida y sin complicaciones. La recomiendo ampliamente.',
    },
    {
        nombre: 'Carlos R.',
        texto: 'Me asesoró en un tema laboral delicado con mucha profesionalidad. Siempre disponible para responder mis dudas. Quedé muy conforme con el resultado.',
    },
    {
        nombre: 'Ana G.',
        texto: 'Sofia me acompañó en un proceso de sucesión familiar muy complejo. Su dedicación y empatía marcaron una gran diferencia. Totalmente recomendable.',
    },
    {
        nombre: 'Rodrigo M.',
        texto: 'Muy profesional y honesta. Me explicó todo el proceso desde el principio y cumplió con los plazos prometidos. Sin dudas volvería a consultarla.',
    },
]

function Opiniones() {
    return (
        <section id="opiniones">
            <div className="section-header">
                <h2 className="section-title">Lo que dicen mis clientes</h2>
                <div className="section-rule"></div>
            </div>
            <div className="opiniones-grid">
                {opiniones.map((op, i) => (
                    <div className="opinion-card" key={i}>
                        <div className="opinion-stars">
                            {'★'.repeat(5)}
                        </div>
                        <p className="opinion-texto">"{op.texto}"</p>
                        <div className="opinion-autor">
                            <div className="opinion-avatar">
                                {op.nombre.charAt(0)}
                            </div>
                            <span>{op.nombre}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Opiniones
