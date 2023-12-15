

const Listado = ({listaColaboradores, setListaColaboradores}) => {


  return (<>
  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Edad</th>
      <th scope="col">Cargo</th>
      <th scope="col">Telefono</th>

    </tr>
  </thead>
 { listaColaboradores.map(element => (     
  <tbody key={element.id}>
    <tr>
      <th scope="row">{element.id}</th>
      <td>{element.nombre}</td>
      <td>{element.correo}</td>
      <td>{element.edad}</td>
      <td>{element.cargo}</td>
      <td>{element.telefono}</td>
    </tr>
  </tbody>
))}
</table>

</>
  )
}

export default Listado