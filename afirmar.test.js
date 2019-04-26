import assert, { assertId, assertType } from "./afirmar";

describe("assert.js", () => {
  describe("assert()", () => {
    it("works with basic types", () => {
      assert(true);
      assert(false, false);
      assert(true, true);
      assert("", "");
      assert("abc", "abc");
      assert(0, 0);
      assert(1, 1);

      expect(() => assert(false)).toThrow();
      expect(() => assert(false, true)).toThrow();
      expect(() => assert(true, false)).toThrow();
      expect(() => assert("a", "b")).toThrow();
      expect(() => assert(1, 2)).toThrow();
      expect(() => assert("abc", "def")).toThrow();
    });

    it("works with complex types", () => {
      assert(["a"], ["a"]);
      assert(["a", "b"], ["a", "b"]);
      assert({}, {});
      assert({ a: "b" }, { a: "b" });
      assert(Object.keys({ a: "b" }), ["a"]);

      expect(() => assert(["a"], ["b"])).toThrow();
      expect(() => assert(["a", "b"], ["b", "a"])).toThrow();
      expect(() => assert({ a: "b" }, { b: "a" })).toThrow();
      expect(() => assert(Object.keys({ a: "b" }), ["b"])).toThrow();
    });

    it("works with regex", () => {
      assert("abc", /^[a-z]+$/);
      expect(() => assert("123", /^[a-z]+$/)).toThrow();
      expect(() => assert("abc", /^[a-z]$/)).toThrow();
      expect(() => assert("abc", /^xxx$/)).toThrow();
    });
  });

  describe("assertType()", () => {
    it("works with basic types", () => {
      assertType(true, "boolean");
      assertType(false, "boolean");
      expect(() => assertType(true, "string")).toThrow();
      expect(() => assertType(true, "number")).toThrow();
      expect(() => assertType(true, "array")).toThrow();
      expect(() => assertType(true, "object")).toThrow();

      assertType("", "string");
      assertType("abc", "string");
      expect(() => assertType("abc", "boolean")).toThrow();
      expect(() => assertType("abc", "number")).toThrow();
      expect(() => assertType("abc", "array")).toThrow();
      expect(() => assertType("abc", "object")).toThrow();

      assertType(0, "number");
      assertType(1, "number");
      expect(() => assertType(1, "boolean")).toThrow();
      expect(() => assertType(1, "string")).toThrow();
      expect(() => assertType(1, "array")).toThrow();
      expect(() => assertType(1, "object")).toThrow();

      assertType([], "array");
      assertType(["a", "b"], "array");
      expect(() => assertType([], "boolean")).toThrow();
      expect(() => assertType([], "string")).toThrow();
      expect(() => assertType([], "number")).toThrow();
      expect(() => assertType([], "object")).toThrow();

      assertType({}, "object");
      assertType({ a: "b" }, "object");
      expect(() => assertType({}, "boolean")).toThrow();
      expect(() => assertType({}, "string")).toThrow();
      expect(() => assertType({}, "number")).toThrow();
      expect(() => assertType({}, "array")).toThrow();
    });
  });
});
