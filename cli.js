import { JS2Py } from "./src/JS2Py.js";

const js = await Deno.readTextFile(Deno.args[0]);
const py = new JS2Py().convert(js);
console.log(py);
