const { strictEqual } = require("assert");

/**
 * Compléter les tests suivants en remplaçant la valeur "null" par la bonne réponse.
 */
strictEqual("a" === "a", true);
strictEqual("5" === 5, false);
strictEqual("5" == 5, true);
strictEqual(true === false, false);
strictEqual(true == 1, true);
strictEqual(true + true == 2, true);
strictEqual(false + false == 1, false);
strictEqual("b" + "c", "bc");
strictEqual(typeof "a", "string");
strictEqual(typeof 5, "number");
strictEqual(typeof true, "boolean");
strictEqual(typeof {}, "object");
strictEqual(typeof [], "object");
strictEqual(typeof undefined, "undefined");
strictEqual(typeof null, "object");
strictEqual({} instanceof Object, true);
strictEqual({} instanceof Array, false);
strictEqual(!(5 + 5 == 10), false);
strictEqual(isNaN("hello"), true);
strictEqual(isNaN(Number("lol")), true);
strictEqual(Boolean(1), true);
strictEqual(Boolean(""),  false);
strictEqual([] + [], ""); 
strictEqual(["b"] + ["a"],  "ba");