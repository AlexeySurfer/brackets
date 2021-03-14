module.exports = function check(str, bracketsConfig) {

  let hash = {}, stack = [], curr;
  for (var i = 0; i < bracketsConfig.length; ++i)
    hash[bracketsConfig[i][0]] = bracketsConfig[i][1];
  for (let i = 0; i < str.length; i += 1) {
    curr = str[i];
    if (hash[curr]) stack.push(curr);
    else {
      if (curr !== hash[stack.pop()]) return false;
    }
  }
  return stack.length === 0;
}
