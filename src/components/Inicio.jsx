import '../estilos/inicio.css'
import { useEffect, useState } from "react";
import InicioMobile from './InicioMobile';
import InicioDesktop from './InicioDesktop';

function Inicio() {
    const [esMobile, setEsMobile] = useState(window.innerWidth <= 480);
    
    useEffect(() => {
        const manejarResize = () => {
            setEsMobile(window.innerWidth <= 480);
        };

        window.addEventListener("resize", manejarResize);

        return () => window.removeEventListener("resize", manejarResize);
    }, []);

    return (
        <section id="inicio">
            {esMobile ? (<InicioMobile/>): (<InicioDesktop/>)}
        </section>
    )
}

export default Inicio;