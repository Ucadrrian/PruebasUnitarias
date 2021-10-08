const functions = require("./index");
const context = require("../testing/Context");

test("Http trigger", async () => {
  const request = {
    query: { name: "Alfredo adrian" },
  };

  await functions(context, request);
  expect(context.res.body).toEqual("Welcome, Alfredo adrian");
  expect(context.log.mock.calls.length).toBe(1);
});
