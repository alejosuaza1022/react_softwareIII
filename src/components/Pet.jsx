import React from "react";

const Pet = ({ mascota, myclass }) => {
  mascota.url_img = "http://localhost:8000"+mascota.url_img
  return (
    <div className={myclass}>
    <div className="cita">
      <div className="my-row">
        <div className="my-column">
          <p>
            Nombre : <span>{mascota.name}</span>
          </p>
          <p>
            Tipo : <span>{mascota.type}</span>
          </p>
          <p>
            Raza :<span>{mascota.breed}</span>
          </p>
          <p>
            Fecha Nacimiento : <br/> <span>{mascota.birth_date}</span>
          </p>
         
        </div>
        {console.log(mascota.url_img)}
        <div className="my-column1"> <img src = {mascota.url_img} /></div>
      </div>
      <button
            className="button eliminar u-full-width"
            onClick={() => alert("función no disponible aún")}
          >
            Ver más
          </button>
    </div>
    </div>
  );
};

export default Pet;
