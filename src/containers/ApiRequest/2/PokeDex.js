import React, { useEffect, useState } from "react";
import superagent from "superagent";
import "./PokeDex.css";
import left from "./left.png";
import right from "./right.png";
import CodeBlock from "react-highlight-codeblock";
function PokeDex() {
  const [searchNumber, setSearchNumber] = useState(1);
  const [pokemonData, setPokemonData] = useState("");

  function getPokemonData(id) {
    superagent
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .end((err, res) => {
        console.log(res);
        if (res.text !== "Not Found") {
          setPokemonData(res.body);
          setSearchNumber(res.body.id);
          console.log(pokemonData, res.body.sprites.front_default);
        }
      });
  }

  useEffect(() => {
    getPokemonData(searchNumber);
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
          <input id="searchPokemon" className="searchInput" />
          <button
            onClick={() => {
              getPokemonData(document.getElementById("searchPokemon").value);
            }}
            className="searchButton"
          >
            Search
          </button>
        </div>
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

let code = 
`import React, { useEffect, useState } from "react";
import superagent from "superagent";
import "./PokeDex.css";
import left from "./left.png";
import right from "./right.png";
import CodeBlock from "react-highlight-codeblock";
function PokeDex() {
  const [searchNumber, setSearchNumber] = useState(1);
  const [pokemonData, setPokemonData] = useState("");

  function getPokemonData(id) {
    superagent
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .end((err, res) => {
          console.log(res)
        if(res.text !== "Not Found"){
            setPokemonData(res.body);
            setSearchNumber(res.body.id);
            console.log(pokemonData, res.body.sprites.front_default) 
        }
        
      });
  }

  useEffect(() => {
    getPokemonData(searchNumber);
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
          onClick={()=>{getPokemonData(searchNumber - 1)}}
          />
          <div className="portraitContainer">
            <div className="portraitNumber">{pokemonData.id}</div>
            <div className="portraitTitle">{pokemonData.name}</div>
            <div className="portrait"> 
            <img alt="PKM" src={pokemonData !== "" ? pokemonData.sprites.front_default :""}/></div>
          </div>
          <img
            src={right}
            className="right-arrow arrow"
            alt="right-arrow arrow"
            onClick={()=>{getPokemonData(searchNumber + 1)}}
          />
        </div>
        <div className="searchInputContainer">
          <input id="searchPokemon" className="searchInput" />
          <button 
          onClick={()=>
          {getPokemonData(document.getElementById("searchPokemon").value)
          }} 
          className="searchButton">Search</button>
        </div>
      </div>
    </div>
  );
}

export default PokeDex;

`;
