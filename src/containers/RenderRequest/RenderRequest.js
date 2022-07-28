import React, { useEffect, useState } from "react";
import CodeBlock from "@tenon-io/tenon-codeblock";
import superagent from "superagent";

function RenderRequest() {
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
      <h2>
        Showing API request from http://numbersapi.com/random that gives a
        random number fact.
      </h2>
      <h3 className="fact">{"Random number fact: "+ fact}</h3>
      <CodeBlock codeString={code} />
    </div>
  );
}

export default RenderRequest;

var code = `import React, { useEffect, useState } from "react";
import CodeBlock from "@tenon-io/tenon-codeblock";
import superagent from "superagent";

function RenderRequest() {
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
      <h2>
        Showing API request from http://numbersapi.com/random that gives a
        random number fact.
      </h2>
      <h3 className="fact">{fact}</h3>
      <CodeBlock codeString={code} />
    </div>
  );
}

export default RenderRequest;

`;
