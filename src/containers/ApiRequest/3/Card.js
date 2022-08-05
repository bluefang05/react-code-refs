import React, { useState, useEffect } from "react";
import superagent from "superagent";
import "./Card.css";
function Card(props) {
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    superagent
      .get("https://pokeapi.co/api/v2/pokemon/" + props.number)
      .end((err, res) => {
        console.log(res);
        setPokemonData(res.body);
      });
  }, [props.number]);
  return (
    <div>
      <div className="PokeCard">
      <button className="removeCardButton" onClick={()=>props.removePokeCard(props.index)}>x</button>  
      <h3 className="pokemonCardNumber">#{pokemonData.id}</h3>
        <div className="cardPortraitContainer">
          
          <img
          alt="portrait"
            src={pokemonData !== "" ? pokemonData.sprites.front_default : ""}
            className="cardPortrait"
          />
        </div>
        <div className="">Name: {pokemonData !== "" ? <p>{pokemonData.name}</p> : ""}</div>
        <div className="">Type: {pokemonData !== "" ? pokemonData.types.map((el, i)=>{return <p> { el.type.name } </p> }) : ""}
        </div>
      </div>
    </div>
  );
}

export default Card;
