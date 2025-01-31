import React, { useState } from "react";
const Formulario = ({ data, setData, setDataFilter, dataFilter, setAlert }) => {
  const [datosColab, setDatosColab] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputs = (e) => {
    const inputs = {
      inputName: "nombre",
      inputEmail: "correo",
      inputAge: "edad",
      inputPosition: "cargo",
      inputPhone: "telefono",
    };

    const inputProp = inputs[e.target.id];
    if (inputProp) {
      setDatosColab({ ...datosColab, [inputProp]: e.target.value });
    }
  };

  const validarDatos = (e) => {
    e.preventDefault();
    const emailValidation =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (
      datosColab.nombre.trim() === "" ||
      datosColab.correo.trim() === "" ||
      datosColab.edad.trim() === "" ||
      datosColab.cargo.trim() === "" ||
      datosColab.telefono.trim() === ""
    ) {
      setAlert({
        error: true,
        mensaje: "completa los campos",
        color: "text-danger",
      });
      setTimeout(() => {
        setAlert({
          error: false,
          mensaje: "",
          color: "",
        });
      }, 5000);
      return;
    }

    if (!emailValidation.test(datosColab.correo)) {
      setAlert({
        error: true,
        mensaje: "ingrese un correo valido",
        color: "text-danger",
      });
      setTimeout(() => {
        setAlert({
          error: false,
          mensaje: "",
          color: "",
        });
      }, 5000);
      return;
    }
    setAlert({
      error: false,
      mensaje: "colaborador agregado con exito",
      color: "text-success",
    });

    setTimeout(() => {
      setAlert({
        error: false,
        mensaje: "",
        color: "",
      });
    }, 5000);

    const Nuevotrabajador = { ...datosColab, id: data.length + 1 };
    setData([...data, Nuevotrabajador]);
    setDataFilter([...dataFilter, Nuevotrabajador]);

    setDatosColab({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
  };

  return (
    <div className="formulario m-4 text-center bg-dark p-5 rounded">
      <form noValidate onSubmit={validarDatos}>
        <div className="mb-2">
          <input
            type="text"
            value={datosColab.nombre}
            className="form-control"
            id="inputName"
            placeholder="Nombre del Colaborador"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            value={datosColab.correo}
            className="form-control"
            id="inputEmail"
            placeholder="E-mail"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            value={datosColab.edad}
            className="form-control"
            id="inputAge"
            placeholder="Edad"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={datosColab.cargo}
            className="form-control"
            id="inputPosition"
            placeholder="Cargo"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={datosColab.telefono}
            className="form-control"
            id="inputPhone"
            placeholder="Telefono"
            onChange={handleInputs}
          />
        </div>

        <div className="pt-4">
          <button className="btn btn-info " type="submit">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
