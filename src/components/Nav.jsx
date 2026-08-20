import '../estilos/nav.css'

function Nav(){
    return (
        <nav>
            <a href="#inicio" class="nav-logo">
                <div class="nav-logo-emblem">⚖</div>
                <div class="nav-logo-name">
                    Martínez &amp; Villanueva
                <small>Abogados &amp; Asociados</small>
                </div>
            </a>
            <ul class="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#causas">Áreas de Práctica</a></li>
                <li><a href="#estudio">El Estudio</a></li>
                <li><a href="#" class="btn-cta" onclick="abrirModal(); return false;">Reservar Turno</a></li>
            </ul>
        </nav>
    )
}

export default Nav;