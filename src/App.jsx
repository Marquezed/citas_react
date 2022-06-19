import { useState, useEffect } from "react"
import Formulario from "./componentes/Formulario"
import Header from "./componentes/Header"
import ListadoPacientes from "./componentes/ListadoPacientes"

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
const[pacientes, setPacientes] = useState(INITIAL);
const[paciente, setPaciente] = useState ({});




useEffect(() => {
 localStorage.setItem('pacientes', JSON.stringify( pacientes ));
   }, [pacientes])


const eliminarPaciente =  id => {
  const pacientesAtualizados = pacientes.filter ( paciente => paciente.id !== id);
  setPacientes(pacientesAtualizados)
}
  return (
    <div className="container mx-auto mt-20">
     <Header
     numero= {1}
     / >
     <div className="mt-12 md:flex">
     <Formulario
     setPacientes={setPacientes}
     pacientes={pacientes}
     paciente= {paciente}
     setPaciente= {setPaciente}
     />
     <ListadoPacientes
    pacientes={pacientes}
    setPaciente= {setPaciente}
    eliminarPaciente = {eliminarPaciente}
    
     />
     </div>
    </div>
  )
}

export default App
