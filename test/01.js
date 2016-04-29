const tests = {
  input: `.row-float {
  gf: row 1.5rem float;
}

.blob-float {
  gf: blob 1/3 1.5rem;
}

.row-flex {
  gf: row 1.5rem;
}

.blob-flex {
  gf: blob 1/2 1.5rem;
}
`,
  output: `.row-float {
  clear: both;
  margin-right: -1.5rem;
}

.row-float::after {
  content: "";
  display: table;
  clear: both;
}

.blob-float {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(33.333333333333336% - 1.5rem);
}

.row-flex {
  clear: both;
  margin-right: -1.5rem;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
}

.row-flex::after {
  content: "";
  display: table;
  clear: both;
}

.blob-flex {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(50% - 1.5rem);
}
`,
};

export default tests;
