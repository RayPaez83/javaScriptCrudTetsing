const reverserString = require("../reverseString");

test("Properly  string reversed", () => {
  expect(reverserString("Raimond")).toBe("dnomiar");
});
test("Exist string reversed", () => {
  expect(reverserString).toBeDefined();
});
