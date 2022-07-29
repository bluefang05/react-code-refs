import React, { useState } from "react";
import "./ConditionalDisable.css";
import CodeBlock from "react-highlight-codeblock";
function ConditionalDisable1_2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
 return (
    <div>
      <h2>Login Button disabled 2</h2>
      <h4>Fill username and password</h4>

      <form id="example-2-form" action="/action_page.php" method="post">
        <div className="imgcontainer">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Username"
            id="uname"
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            id="psw"
          />

          <button disabled={username == "" || password == ""}  type="submit">
            Login
          </button>
          {username == "" || password == ""? <h1 id="disabled-label">Button is Disabled</h1> : ""}
        </div>
      </form>
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

export default ConditionalDisable1_2;

var code = 
`import React, { useState } from "react";
import "./ConditionalDisable.css";
function ConditionalDisable1_2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
 return (
    <div>
      <h2>Login Button disabled 2</h2>
      <h4>Fill username and password</h4>

      <form id="example-2-form" action="/action_page.php" method="post">
        <div className="imgcontainer">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Username"
            id="uname"
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            id="psw"
          />

          <button disabled={username == "" || password == ""}  type="submit">
            Login
          </button>
          {username == "" || password == ""? <h1 id="disabled-label">Button is Disabled</h1> : ""}
        </div>
      </form>
    </div>
  );
}

export default ConditionalDisable1_2;




`;
