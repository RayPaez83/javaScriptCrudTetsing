const functionSetData = require("../fetchData");

test("Properly call api get then", () => {
  expect.assertions(1);
  return functionSetData.fetchUSer().then((res) => {
    expect(res.name).toEqual("Leanne Graham");
  });
});

test("Properly call api get async", async () => {
  expect.assertions(1);
  const res = await functionSetData.fetchUSer();
  expect(res.name).toEqual("Leanne Graham");
});
