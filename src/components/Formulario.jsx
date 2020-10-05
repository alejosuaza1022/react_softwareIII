import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
import Select from "./Select";
import OptionsBreed from "./OptionsBreed";

const Formulario = ({ createPet }) => {
  const [Mascota, update_pet] = useState({
    name: "",
    user_id: "",
    fecha: "",
    breed: "",
    type: "",
    filename: "",
    images: [],
    description: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "filename") {
      update_pet({
        ...Mascota,
        filename: e.target.value,
        images: e.target.files,
      });
      console.log(Mascota.filename);
      return;
    }
    update_pet({
      ...Mascota,
      [e.target.name]: e.target.value,
    });
  };
  const create_pet = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      user_id === "" ||
      fecha.trim() === "" ||
      breed === "" ||
      type === "" ||
      images === "" 
     
    ) {
      setError(true);
      console.log(Mascota);
      return;
    }
    console.log(Mascota);
    setError(false);
    Mascota.id = uuid();

    createPet(Mascota);
    update_pet({
      name: "",
      user_id: "",
      fecha: "",
      breed: "",
      type: "",
      filename: "",
      images: [],
      description: "",
    });
  };
  const {
    name,
    user_id,
    fecha,
    breed,
    description,
    type,
    images,
    filename,
  } = Mascota;
  return (
    <Fragment>
      <h1>Crear Mascota</h1>
      {error ? (
        <p className="alerta-error">todos los campos son oblilgatorios</p>
      ) : null}
      <form className="myform" onSubmit={create_pet}>
        <label>
          Nombre<span className="required">*</span>
        </label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={name}
        />
        <label>
          Dueño mascota<span className="required">*</span>
        </label>
        <input
          type="number"
          name="user_id"
          className="u-full-width"
          placeholder="Nombre dueño"
          onChange={handleChange}
          value={user_id}
        />
        <label>
          Fecha nacimiento<span className="required">*</span>
        </label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={fecha}
        />
        <label>
          Tipo de animal<span className="required">*</span>
        </label>
        <select
          className="u-full-width"
          value={type}
          name="type"
          onChange={handleChange}
        >
          <option defaultValue value="">
            Seleccione una opción
          </option>
          <Select />
        </select>
        <label>
          Raza de animal<span className="required">*</span>
        </label>
        <select
          className="u-full-width"
          value={breed}
          name="breed"
          onChange={handleChange}
        >
          <option defaultValue value="">
            Seleccione una opción
          </option>
          <OptionsBreed id={type} />
        </select>

        <label>
          Imagenes<span className="required">*</span>
        </label>
        <input
          multiple
          type="file"
          className="u-full-width"
          name="filename"
          value={filename}
          onChange={handleChange}
          accept="image/png, image/jpeg, image/jpg,image/jpe"
        />
        <label>Descripción</label>
        <textarea
          className="u-full-width"
          name="description"
          onChange={handleChange}
          value={description}
        ></textarea>
        <button type="submit" className="u-full-width myboton">
          Agregar Mascota
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
/*<select
className="u-full-width"
value={type}
name="type"
onChange={handleChange}
>
<option defaultValue value="">
  Seleccione una opción
</option>
<option value="1">Perro</option>
<option value="2">Gato</option>
<option value="3">Pajaro</option>
</select>

<select
          className="u-full-width"
          value={breed}
          name="breed"
          onChange={handleChange}
        >
          <option defaultValue value="">
            Seleccione una opción
          </option>
          <option value="1">Ninguno</option>
          <option value="2">pincher</option>
          <option value="3">pitbull</option>
        </select>*/
