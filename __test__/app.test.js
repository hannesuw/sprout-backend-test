const { validName, findDisappeared } = require("../app");

test("Valid Name Function", () => {
  expect(validName("A. Kesya")).toBe(true);
  expect(validName("A. K. Putri")).toBe(true);
  expect(validName("Angelina K. Putri")).toBe(true);
  expect(validName("Angelina")).toBe(false);
  expect(validName("a. Kesya")).toBe(false);
  expect(validName("A Kesya")).toBe(false);
  expect(validName("A. Kesya Putri")).toBe(false);
  expect(validName("A. Kesya P.")).toBe(false);
  expect(validName("Angelina. Kesya Putri")).toBe(false);
});

test("Find Dissapear Function", () => {
  expect(findDisappeared([4, 3, 2, 7, 8, 2, 3, 1])).toEqual(
    expect.arrayContaining([5, 6])
  );
  expect(findDisappeared([1, 1])).toEqual(expect.arrayContaining([2]));
});
