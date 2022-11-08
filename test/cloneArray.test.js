const cloneArray = require("../clone");

test("Properly crearte new array", () => {
  const array = ["one", "two", 3, 4, "cinco", "seis", 7, 8];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
