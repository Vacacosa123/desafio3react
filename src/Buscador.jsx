import { useState } from "react";

const Buscador = ({ listaColaboradores, setListaColaboradores }) => {
  const [buscar, setBuscar] = useState('');

  const listaAntigua = listaColaboradores
  const busqueda = (b) => {
    if(buscar === ''){
      setListaColaboradores(listaAntigua);
    }else{
    const colaboradorLista = listaColaboradores.filter((colaborador) =>
      colaborador.nombre.toLowerCase().includes(b.toLowerCase()) || colaborador.correo.toLowerCase().includes(b.toLowerCase()) || colaborador.cargo.toLowerCase().includes(b.toLowerCase()) || colaborador.toLowerCase().telefono.includes(b.toLowerCase()) || colaborador.edad.toLowerCase().includes(b.toLowerCase())
    );

    setListaColaboradores(colaboradorLista);
    }
  };


  return (
    <div className="buscador">
      <h6>Buscar Colaborador</h6>
      <input
        type="text"
        name="again"
        className="form-control"
        onChange={(e) => {setBuscar(e.target.value); busqueda(e.target.value)}}
        value={buscar}
        placeholder="Ingresar Dato colaborador"
      />
    </div>
  );
};

export default Buscador;