import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./utils/global.context";

const Card = ({ name, id }) => {
  const { state, dispatch } = useContext(AppContext);

  const themeClass = state.theme === "dark" ? "dark" : "light";

  const addFav = () => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: { id, name } });
  };

  return (
    <div className={`card ${themeClass}`}>
      {/* Imagen del dentista */}
      <img
        src={`/images/doctor.jpg`}
        alt={`Imagen de ${name}`}
        className="dentistImage"
      />

      {/* Nombre del dentista con enlace a la página de detalles */}
      <Link to={`/dentist/${id}`} className="detailLink">
        {name}
      </Link>

      {/* Imagen de estrella con evento onClick para agregar a favoritos */}
      <img
        src={`/images/estrella (1).png`}
        alt="Star"
        className="favStar"
        onClick={addFav}
      />
    </div>
  );
};

export default Card;
