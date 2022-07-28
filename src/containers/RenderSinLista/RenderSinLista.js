import React from 'react'
import CodeBlock from '@tenon-io/tenon-codeblock';

function RenderSinLista() {
    let times = 9;

    return (
        <div>
            {[...Array(times)].map( function (el, i) { 
            return <h1>{i}</h1> })}
             <CodeBlock codeString = {code} />
        </div>
    )
}

export default RenderSinLista









var code = `
function RenderSinLista() {
    return (
        <div>
            {[...Array(5)].map( function (el, i) { 
            return <h1>{i}</h1> })}
        </div>
    )
}`;
