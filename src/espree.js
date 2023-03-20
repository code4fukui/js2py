import * as esprima from "https://code4fukui.github.io/esprima/es/esprima.min.js";

export const espree = {
  parse: (code) => esprima.parseModule(code),
};
