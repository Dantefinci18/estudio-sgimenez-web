import '../estilos/proceso.css'

const pasos = [
    {
        numero: '1',
        titulo: 'Primera consulta',
        desc: 'Analizamos tu situación.',
    },
    {
        numero: '2',
        titulo: 'Evaluación del caso',
        desc: 'Te explico las alternativas disponibles.',
    },
    {
        numero: '3',
        titulo: 'Estrategia',
        desc: 'Definimos el camino más conveniente.',
    },
    {
        numero: '4',
        titulo: 'Acompañamiento',
        desc: 'Te mantengo informado durante todo el proceso.',
    },
]

function Proceso() {
    return (
        <section id="proceso">
            <div className="section-header">
                <h2 className="section-title">¿Cómo trabajo?</h2>
                <div className="section-rule"></div>
            </div>

            <div className="proceso-steps">
                {pasos.map((paso, i) => (
                    <div className="proceso-step" key={i}>
                        <div className="proceso-numero">{paso.numero}</div>
                        <div className="proceso-content">
                            <h3 className="proceso-titulo">{paso.titulo}</h3>
                            <p className="proceso-desc">{paso.desc}</p>
                        </div>
                        {i < pasos.length - 1 && <div className="proceso-conector" />}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Proceso
