const tests = {
  input: `@typescale test {
  scale: 1.5;
  font-size: 0.8rem;
  line-height: 2rem;
}

.test {
  typescale: test 2 2;
}

.truc {
  typescale: 2 2;
}
`,
  output: `.test {
  font-size: 1.8rem;
  line-height: 4rem;
}

.truc {
  font-size: 1.5625rem;
  line-height: 3rem;
}
`,
};

export default tests;
