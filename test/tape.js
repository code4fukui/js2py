import * as t from "https://deno.land/std/testing/asserts.ts";

export const test = (name, func) => {
  const tobj = {
    equal: (a, b, desc) => t.assertEquals(a, b),
    deepEqual: (a, b, desc) => t.assertEquals(a, b),
    plan: (n) => {}, // console.log("plan", n),
  }
  func(tobj);
};
test.skip = (name, func) => {};
