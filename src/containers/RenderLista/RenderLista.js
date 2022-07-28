import React from 'react'
import CodeBlock from '@tenon-io/tenon-codeblock';

function RenderLista() {
    var pokemonArray = ['bulbasaur',
                   'ivysaur',
                   'venusaur',
                   'squirtle',
                   'wartortle',
                   'blastoise',
                   'charmander',
                   'charmeleon',
                   'charizard',];

    return (
        <div>
            {pokemonArray.map(function (el, i ) { 
               return <h3> {i + 1} - {el} </h3>
             })}
      <CodeBlock codeString = {code} />

        </div>
    )
}

export default RenderLista;


var code = `
import React from 'react'

function RenderLista() {
    var pokemonArray = ['bulbasaur',
                   'ivysaur',
                   'venusaur',
                   'squirtle',
                   'wartortle',
                   'blastoise',
                   'charmander',
                   'charmeleon',
                   'charizard',];

    return (
        <div>
            {pokemonArray.map(function (el, i ) { 
               return <h3> {el} </h3>
             })}
        </div>
    )
}

export default RenderLista;

`;