const getDobStuff = require('../getDobStuff');

test("Test Connections", () => {
  expect(getDobStuff()).toBe('true')
})