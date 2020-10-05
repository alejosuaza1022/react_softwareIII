import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";

import Grid from "./components/Grid";

function App() {
  //mascotas EN LOCAL STORAGE
  
  const [mostrar, setMostrar] = useState(true);
  const [mascotas, setPets] = useState([]);

  const createPet = (mascota) => {
    var bodyFormData = new FormData();

    bodyFormData.append("id_owner", mascota.user_id);
    bodyFormData.append("name", mascota.name);
    bodyFormData.append("animal_breed", mascota.breed);
    bodyFormData.append("animal_type", mascota.type);
    bodyFormData.append("birth_date", mascota.fecha);
    bodyFormData.append("description", mascota.description);
    
    Object.values(mascota.images).forEach((x) =>
      bodyFormData.append("images", x)
    );

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    axios({
      method: "post",
      url: "http://localhost:5000/pet",
      data: bodyFormData,
      config: config,
    })
      .then((response) => alert(response.data))
      .catch((error) => alert("se ha producido un error"));
    setPets([...mascotas, mascota]);
  };

  

  // se ejecuta cuando se crea el componente y también cada que se actualiza
  useEffect(() => {
    let citas_inciales = JSON.parse(localStorage.getItem("mascotas"));
    if (citas_inciales)
      localStorage.setItem("mascotas", JSON.stringify(mascotas));
    else localStorage.setItem("mascotas", JSON.stringify([]));
  }, [mascotas]);

  return (
    <Fragment>
      <h1>Mi Futura Mascota</h1>
      <div className="cont">

        {mostrar ? (
          <div className="mybox">
            <Formulario createPet={createPet} />
          </div>
        ) : (
          <div className="mybox2">
          <Grid />
          </div>
        )}
        <div className="contenedorsumama">
          <button className="myboton" onClick={() => setMostrar(!mostrar)}>
            {mostrar ? "Ver Mascotas" : "Registar mascotas"}
          </button>
        </div>
        </div>
    </Fragment>
  );
}

export default App;

/*<h1>Mascotas</h1>
{mascotas.map((mascota) => (
   <Pet key={mascota.id} mascota={mascota} eliminarCita={eliminarCita} />
 ))}*/
