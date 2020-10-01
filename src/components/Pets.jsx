import React,{Fragment} from "react";
import Pet from "./Pet" 

const Pets = ({ mascotas }) => {
  
  return (
    <Fragment>
        {mascotas.map((e,i) => {
            return <Pet  myclass={"singlecard"} key={e.id} mascota={e}/>
        })}
    </Fragment>
  );
};

export default Pets;
