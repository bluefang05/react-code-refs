import React, { useEffect, useState } from "react";
import "./UseEffectUpdate.css";
import CodeBlock from "@tenon-io/tenon-codeblock";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function UseEffectUpdate() {
  let [count, setCount] = useState(0);
  let addOne = function () {
    setCount(count + 1);
  };

  useEffect(() => {
    toast(count);
  }, [count]);

  return (
    <div>
      <h1>{}</h1>
      <Badge badgeContent={count} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
      <Button variant="outlined" onClick={addOne}>
        add 1
      </Button>
      UseEffectUpdate
      <ToastContainer />
      <div id="ballContainer">
        {[...Array(count)].map(function (el, i) {
          return <div className="ball"></div>;
        })}
      </div>
      <CodeBlock codeString={code} />
    </div>
  );
}

export default UseEffectUpdate;

var code = `
import React, { useEffect, useState } from "react";
import "./UseEffectUpdate.css";
import CodeBlock from "@tenon-io/tenon-codeblock";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function UseEffectUpdate() {
  let [count, setCount] = useState(0);
  let addOne = function () {
    setCount(count + 1);
  };

  useEffect(() => {
    toast(count);
  }, [count]);

  return (
    <div>
      <h1>{}</h1>
      <Badge badgeContent={count} color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
      <Button variant="outlined" onClick={addOne}>
        add 1
      </Button>
      UseEffectUpdate
      <ToastContainer />
      <div id="ballContainer">
        {[...Array(count)].map(function (el, i) {
          return <div className="ball"></div>;
        })}
      </div>
      <CodeBlock codeString={code} />
    </div>
  );
}

export default UseEffectUpdate; 
`;
