const same = (a, b) => {
  if (b.test) {
    if (b.test(a)) return true;
    throw new Error(`'${a}' does not match ${b}`);
  }
  if (Array.isArray(a) || Array.isArray(b)) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  if (typeof a === "object" || typeof b === "object") {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return a === b;
};

const assert = (claim, equals = true) => {
  if (same(claim, equals)) return;
  throw new Error(`'${claim}' is not '${equals}'`);
};

export const assertType = (obj, type) => {
  const plain = JSON.stringify(obj);
  if (type === "array") {
    if (Array.isArray(obj)) return true;
    throw new Error(`'${plain}' is not an 'array' (it is '${typeof obj}')`);
  }
  if (type === "object" && Array.isArray(obj)) {
    throw new Error(`'${plain}' is not an 'object' (it is an 'array')`);
  }
  if (typeof obj !== type) {
    throw new Error(`'${plain}' is not a '${type}' (it is '${typeof obj}')`);
  }
};

export default assert;
