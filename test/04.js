const tests = {
  input: `.my-button {
  button: default;
}

.my-button-2 {
  button-color: red pink blue green;
  button-border: 2px black red;
}
`,
  output: `.my-button, .my-button:visited {
  display: inline-block;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: grey;
  background-color: white;
}

.my-button:active, .my-button:hover, .my-button.active {
  color: white;
  background-color: grey;
}

.my-button:disabled, .my-button:disabled:active, .my-button:disabled:hover, .my-button.disabled, .my-button.disabled:active, .my-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
}

.my-button-2, .my-button-2:visited {
  display: inline-block;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  border: none;
  color: red;
  background-color: pink;
  box-shadow: inset 0 0 0 2px black;
}

.my-button-2:active, .my-button-2:hover, .my-button-2.active {
  color: blue;
  background-color: green;
  box-shadow: inset 0 0 0 2px red;
}

.my-button-2:disabled, .my-button-2:disabled:active, .my-button-2:disabled:hover, .my-button-2.disabled, .my-button-2.disabled:active, .my-button-2.disabled:hover {
  opacity: 0.25;
  cursor: default;
}
`,
};

export default tests;
