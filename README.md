# afirmar

Assertion library, but with the name in Spanish

The purpose is to be tiny but doing the proper comparisons by default.

All of these **pass**:

```js
// Normal assert
assert(true);

// Compare plain variables
assert(false, false);
assert(true, true);
assert("", "");
assert("abc", "abc");
assert(0, 0);
assert(1, 1);

// Compare nested variables
assert(["a"], ["a"]);
assert(["a", "b"], ["a", "b"]);
assert({}, {});
assert({ a: "b" }, { a: "b" });
assert(Object.keys({ a: "b" }), ["a"]);

// Check by RegExp
assert("abc", /^[a-z]+$/);
```

All of these **fail**:

```js
assert(false);
assert(false, true);
assert(true, false);
assert("a", "b");
assert(1, 2);
assert("abc", "def");

assert(["a"], ["b"]);
assert(["a", "b"], ["b", "a"]);
assert({ a: "b" }, { b: "a" });
assert(Object.keys({ a: "b" }), ["b"]);

assert("123", /^[a-z]+$/);
assert("abc", /^[a-z]$/);
assert("abc", /^xxx$/);
```
