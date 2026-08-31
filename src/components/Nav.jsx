import '../estilos/nav.css'

function Nav(){
    return (
        <nav>
            <a href="#inicio" class="nav-logo">
                <div class="nav-logo-name">
                    Sofia Gimenez
                <small><strong>Abogada</strong></small>
                </div>
            </a>
            <ul class="nav-links">
                <li><a href="#" class="btn-cta" onclick="abrirModal(); return false;">Reservar Turno</a></li>
            </ul>
        </nav>
    )
}

export default Nav;