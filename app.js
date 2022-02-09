const validName = (name) => {
  const regex = /^[A-Z]([\.]|[a-z]+)\s[A-Z]([\.]\s|[a-z]+)([A-Z][a-z]+)?$/;
  return regex.test(name) ? true : false;
};

const findDisappeared = (nums) => {
  const result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) result.push(i);
  }
  return result;
};

module.exports = { validName, findDisappeared };
