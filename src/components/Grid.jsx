import React, { useState, useEffect } from "react";
import Pets from "./Pets";
import axios from "axios";

const Grid = () => {
  const [mascotas, setMascotas] = useState([]);
  useEffect(() => {
    let getData = async () => {
      const result = await axios("http://localhost:5000/pets");
      setMascotas(result.data);
    };
    getData();
    return () => console.log("clean");
  }, []);
  return (
    <div>
      {console.log(mascotas,"alskdfjlkasdhjfajlasfj")}
      {mascotas.map((e, i) => {
        if (i % 3 === 0) {
          return (
            <div className="arow" key={e.id}>
              <Pets mascotas={mascotas.slice(i, i + 3)} />
            </div>
          );
        }
      })}
    </div>
  );
};

let getData = async () => {};
export default Grid;
