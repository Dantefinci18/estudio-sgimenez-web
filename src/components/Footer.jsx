import '../estilos/footer.css'

function Footer(){
    return (
        <footer>
            <p>© {new Date().getFullYear()} <strong>Sofia Gimenez</strong> &mdash; Abogada. Todos los derechos reservados.</p>
            <p>sgimenez.estudio@gmail.com</p>
        </footer>
    )
}

export default Footer;