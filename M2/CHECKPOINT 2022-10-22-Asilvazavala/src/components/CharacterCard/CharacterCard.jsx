import "./CharacterCard.css";
import React from "react";
import { Link } from "react-router-dom";
import * as actions from '../../redux/actions';
import * as ReactRedux from "react-redux";


// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const CharacterCard = ({ name, image, faction, id }) => {
  const dispatch = ReactRedux.useDispatch();

  const onHandleClick = (e) => {
    dispatch(actions.deleteCharacter(id))
  }
  
  return (
    <div className="card">
      <button onClick={onHandleClick}>X</button>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{faction}</p>
      <Link to={`/character/${id}`}>{name}</Link>
    </div>
  );
};

export default CharacterCard;
