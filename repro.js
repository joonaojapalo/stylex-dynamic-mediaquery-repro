const babel = require("@babel/core");

const input = `
  import * as stylex from '@stylexjs/stylex';

  const styles = stylex.create({
    highlightAt: (small, large) => ({
      backgroundColor: {
        "@media (max-width: 599px)": small ? "red" : null,
        "@media (min-width: 600px)": large ? "red" : null,
      },
    }),
  });

  <div {...stylex.props(styles.highlightAt(false, true))} />
`;

const output = babel.transformSync(input, {
  presets: [["@babel/preset-react"]],
  plugins: [["@stylexjs/babel-plugin"]],
});

console.log(output.code);
