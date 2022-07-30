import React, { useEffect, useState } from "react";
import superagent from "superagent";
import "./NumbersApi.css";
import CodeBlock from "react-highlight-codeblock";

function Numbersapi() {
  const [fact, setFact] = useState("");

  function getFact() {
    superagent.get("http://numbersapi.com/random").end((err, res) => {
      setFact(res.text);
    });
  }

  useEffect(() => {
    getFact();
  }, []);
  return (
    <div>
      <h3>API request from http://numbersapi.com/random</h3>
      <h4>It gives a random number fact.</h4>
      <br />
      <button onClick={getFact} width="200px">
        New fact
      </button>
      <div className="fact">
        <p>Random number fact:</p>
        <p>{fact}</p>
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

export default Numbersapi;

const code = `import React, { useEffect, useState } from "react";
import superagent from "superagent";

function Numbersapi() {

    const [fact, setFact] = useState("");

    function getFact() {
      superagent.get("http://numbersapi.com/random").end((err, res) => {
        setFact(res.text);
      });
    }
  
    useEffect(() => {
      getFact();
    }, []);
  return (
    <h3>API request from http://numbersapi.com/random</h3>
    <h4>It gives a random number fact.</h4>
    <br />
    <button onClick={getFact} width="200px">
      New fact
    </button>
    <div className="fact">
      <p>Random number fact:</p>
      <p>{fact}</p>
    </div>  
  )
}

export default Numbersapi;

`;
