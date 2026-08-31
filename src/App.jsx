import Causas from "./components/Causas"
import Contacto from "./components/Contacto"
import Estudio from "./components/Estudio"
import Footer from "./components/Footer"
import Inicio from "./components/Inicio"
import Nav from "./components/Nav"
import Opiniones from "./components/Opiniones"
import Proceso from "./components/Proceso"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Nav/>
      <Inicio/>
      <Causas/>
      <Estudio/>
      <Proceso/>
      <Opiniones/>
      <Contacto/>
      <Footer/>
      <WhatsAppButton/>
    </>
  )
}

export default App
