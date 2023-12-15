import { useState } from "react"
import Alert from "./Alert"


const Formulario = ({error, setError, listaColaboradores, setListaColaboradores}) => {

    //useState usados
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [edad, setEdad] = useState("")
  const [cargo, setCargo] = useState("")
  const [telefono, setTelefono] = useState("")

  //boton de visibilidad de boton
  const [alerta, setAlerta] = useState(false)


  //validador de datos
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (nombre === '' || correo === '' || edad === '' || cargo === ''||  regexCorreo.test(correo)==false || telefono === '')
    {
      
    setError(true)
    setAlerta(true)
    return;
    }
    setError(false)
    setAlerta(true)
    setListaColaboradores([...listaColaboradores, {id: listaColaboradores.length+1, nombre: nombre, correo: correo, edad:edad, cargo: cargo, telefono: telefono}])
    };
    
  return (
    <>
    <form className="formulario" onSubmit={validarDatos}>
    <input
    type="text"
    name="nombre"
    className="form-control"
    onChange={(e) => setNombre(e.target.value)}
    value={nombre}
    placeholder="Ingresar Nombre Colaborador"
    />
        <input
    type="text"
    name="correo"
    className="form-control"
    onChange={(e) => setCorreo(e.target.value)}
    value={correo}
    placeholder="Ingresar Correo Colaborador"
    />
        <input
    type="text"
    name="contraseña"
    className="form-control"
    onChange={(e) => setEdad(e.target.value)}
    value={edad}
    placeholder="Ingresar Edad Colaborador"
    />
        <input
    type="text"
    name="again"
    className="form-control"
    onChange={(e) => setCargo(e.target.value)}
    value={cargo}
    placeholder="Ingresar Cargo Colaborador"
    />
            <input
    type="text"
    name="again"
    className="form-control"
    onChange={(e) => setTelefono(e.target.value)}
    value={telefono}
    placeholder="Ingresar Telefono Colaborador"
    />

    <button type="submit" className="btn btn-primary" onClick={() => setAlerta(false)}>
    Agregar
    </button>

    </form>    

    {alerta && <Alert error={error}/>}

    </>
  )
}

export default Formulario