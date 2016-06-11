const tests = {
  input: `@button {
  border-width: 1px;
  color: orangered;
  background-color: white;
  border-color: silver;
  color-hover: whitesmoke;
  background-color-hover: orangered;
  border-color-hover: orangered;
  color-active: whitesmoke;
  background-color-active: silver;
  border-color-active: silver;
  class-active: active;
  class-disabled: disabled;
}

.my-button {
  button: test;
}
`,
  output: `.my-button, .my-button:visited {
  cursor: pointer;
  text-decoration: none;
  border: none;
  padding: 0;
  color: orangered;
  background-color: white;
  box-shadow: inset 0 0 0 1px silver;
}
.my-button:active, .my-button.active {
  color: whitesmoke;
  background-color: silver;
  box-shadow: inset 0 0 0 1px silver;
}
.my-button:hover, .my-button.active:hover {
  color: whitesmoke;
  background-color: orangered;
  box-shadow: inset 0 0 0 1px orangered;
}
.my-button:disabled, .my-button:disabled:active, .my-button:disabled:hover, .my-button.disabled, .my-button.disabled:active, .my-button.disabled:hover {
  opacity: 0.25;
  cursor: default;
  color: orangered;
  background-color: white;
  box-shadow: inset 0 0 0 1px silver;
}
`,
};

export default tests;
