import React from "react";
import Table from "react-bootstrap/Table";

const Listado = ({ dataFilter }) => {
  const colaboradores = dataFilter.map((item) => (
    <tr key={item.id}>
      <td>{item.nombre}</td>
      <td>{item.correo}</td>
      <td>{item.edad}</td>
      <td>{item.cargo}</td>
      <td>{item.telefono}</td>
    </tr>
  ));
  return (
    <div className="table-responsive text-center rounded">
      <Table variant="dark" className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>{colaboradores}</tbody>
      </Table>
    </div>
  );
};

export default Listado;
