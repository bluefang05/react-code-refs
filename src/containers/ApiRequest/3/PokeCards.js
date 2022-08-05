import React, { useEffect, useState } from "react";
import superagent from "superagent";
import Card from "./Card";
import "./PokeCards.css";
import left from "./left.png";
import right from "./right.png";
import CodeBlock from "react-highlight-codeblock";
function PokeDex() {
  const [searchNumber, setSearchNumber] = useState(1);
  const [pokemonData, setPokemonData] = useState("");
  const [cardArr, setCardArr] = useState([]);

  if(localStorage.getItem('pokeArr')){
    localStorage.setItem('pokeArr', [])}

  let arr = localStorage.getItem('pokeArr')? localStorage.getItem('pokeArr') : [] ;


  function addPokeCard(){
    let tempArr = [...cardArr]
    tempArr.push(searchNumber)
    setCardArr(tempArr);
    console.log(tempArr)

  }
 
  function removePokeCard(index) {
    let tempArr = [...cardArr]
    tempArr.splice(index,1);
    setCardArr(tempArr);
  }


  function getPokemonData(id) {
    superagent
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .end((err, res) => {
        console.log(res);
        if (res.text !== "Not Found" && id !== "") {
          setPokemonData(res.body);
          setSearchNumber(res.body.id);
          console.log(pokemonData, res.body.sprites.front_default);
        }
      });
  }

  useEffect(() => {
    superagent.get("https://pokeapi.co/api/v2/pokemon/1").end((err, res) => {
      setPokemonData(res.body);
      setSearchNumber(res.body.id);
    });
  }, []);

  return (
    <div>
      {/* api timer de medio segundo para cambiar el pokemon */}
      {/* usar condiciones si no hay termino usar numero  */}
      <h1>PokeApiCard</h1>
      <div className="searchPanel">
        <div className="controller">
          <img
            src={left}
            className="left-arrow arrow"
            alt="left-arrow arrow"
            onClick={() => {
              getPokemonData(searchNumber - 1);
            }}
          />
          <div className="portraitContainer">
            <div className="portraitNumber">{pokemonData.id}</div>
            <div className="portraitTitle">{pokemonData.name}</div>
            <div className="portrait">
              <img
                alt="PKM"
                src={
                  pokemonData !== "" ? pokemonData.sprites.front_default : ""
                }
              />
            </div>
          </div>
          <img
            src={right}
            className="right-arrow arrow"
            alt="right-arrow arrow"
            onClick={() => {
              getPokemonData(searchNumber + 1);
            }}
          />
        </div>
        <div className="searchInputContainer">
          <input  id="searchPokemon" className="searchInput" />
          <button
            onClick={() => {
              getPokemonData(document.getElementById("searchPokemon").value);
            }}
            className="searchButton"
          >
            Search
          </button>
          <button onClick={addPokeCard} className="AddPokemonCard">Add</button>
        </div>
      </div>
      <div className="deckBox">
      {
        cardArr.map(function(el, i){
          return<Card index={i} key={el} number={el} removePokeCard={removePokeCard} />
        } ) 
      }
      </div>
      <h1>Parent Component</h1>
      <CodeBlock
        code={code}
        editer={true}
        language="javascript"
        // style="monokai"
        showLineNumbers={true}
      />
      <h1>Child Component</h1>
      <CodeBlock
        code={code2}
        editer={true}
        language="javascript"
        // style="monokai"
        showLineNumbers={true}
      />
    </div>
  );
}

export default PokeDex;

let code = `import React, { useEffect, useState } from "react";
import superagent from "superagent";
import Card from "./Card";
import "./PokeCards.css";
import left from "./left.png";
import right from "./right.png";
import CodeBlock from "react-highlight-codeblock";
function PokeDex() {
  const [searchNumber, setSearchNumber] = useState(1);
  const [pokemonData, setPokemonData] = useState("");
  const [cardArr, setCardArr] = useState([]);

  if(localStorage.getItem('pokeArr')){
    localStorage.setItem('pokeArr', [])}

  let arr = localStorage.getItem('pokeArr')? localStorage.getItem('pokeArr') : [] ;


  function addPokeCard(){
    let tempArr = [...cardArr]
    tempArr.push(searchNumber)
    setCardArr(tempArr);
    console.log(tempArr)

  }
 
  function removePokeCard(index) {
    let tempArr = [...cardArr]
    tempArr.splice(index,1);
    setCardArr(tempArr);
  }


  function getPokemonData(id) {
    superagent
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .end((err, res) => {
        console.log(res);
        if (res.text !== "Not Found" && id !== "") {
          setPokemonData(res.body);
          setSearchNumber(res.body.id);
          console.log(pokemonData, res.body.sprites.front_default);
        }
      });
  }

  useEffect(() => {
    superagent.get("https://pokeapi.co/api/v2/pokemon/1").end((err, res) => {
      setPokemonData(res.body);
      setSearchNumber(res.body.id);
    });
  }, []);

  return (
    <div>
      {/* api timer de medio segundo para cambiar el pokemon */}
      {/* usar condiciones si no hay termino usar numero  */}
      <h1>PokeApiCard</h1>
      <div className="searchPanel">
        <div className="controller">
          <img
            src={left}
            className="left-arrow arrow"
            alt="left-arrow arrow"
            onClick={() => {
              getPokemonData(searchNumber - 1);
            }}
          />
          <div className="portraitContainer">
            <div className="portraitNumber">{pokemonData.id}</div>
            <div className="portraitTitle">{pokemonData.name}</div>
            <div className="portrait">
              <img
                alt="PKM"
                src={
                  pokemonData !== "" ? pokemonData.sprites.front_default : ""
                }
              />
            </div>
          </div>
          <img
            src={right}
            className="right-arrow arrow"
            alt="right-arrow arrow"
            onClick={() => {
              getPokemonData(searchNumber + 1);
            }}
          />
        </div>
        <div className="searchInputContainer">
          <input  id="searchPokemon" className="searchInput" />
          <button
            onClick={() => {
              getPokemonData(document.getElementById("searchPokemon").value);
            }}
            className="searchButton"
          >
            Search
          </button>
          <button onClick={addPokeCard} className="AddPokemonCard">Add</button>
        </div>
      </div>
      <div className="deckBox">
      {
        cardArr.map(function(el, i){
          return<Card index={i} key={el} number={el} removePokeCard={removePokeCard} />
        } ) 
      }
      </div>
      <CodeBlock
        code={code}
        callback={(code) => console.log(code)}
        editer={true}
        language="javascript"
        // style="monokai"
        showLineNumbers={true}
      />
    </div>
  );
}

export default PokeDex;
  


`;

let code2 =`import React, { useState, useEffect } from "react";
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




`;