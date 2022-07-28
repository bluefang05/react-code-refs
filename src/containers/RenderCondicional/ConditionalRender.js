import React, { useState } from "react";
import "./ConditionalRender.css";
import CodeBlock from 'react-highlight-codeblock'


function ConditionalRender() {
  const [visible, setVisible] = useState(false);
  const showDetails = function () {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

 

  return (
    <div className="example">
      Condicional Render
      <h1 onClick={showDetails}>Click me</h1>
      {visible ? <div>Hidden Details</div> : ""}
      <CodeBlock
    code={code}
    callback={code => console.log(code)}
    editer={true}
    language="javascript"
    style="monokai"
    showLineNumbers={true}
/>

    </div>
  );
}

export default ConditionalRender;


var code = 
`import React, { useState } from "react";
function ConditionalRender() {
  const [visible, setVisible] = useState(false);
  const showDetails = function () {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
 
  return (
    <div>
    ConditionalRender
      <h1 onClick={showDetails}>Titulo</h1>
      {visible ? <div>Detalles</div> : ""}
    </div>
  );
}
 
export default RenderCondicional;
`
