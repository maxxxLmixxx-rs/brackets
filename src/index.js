module.exports = function check(str, bracketsConfig) {
  let matcher = bracketsConfig.map(([o, c]) => (
    /[a-zA-Z0-9]/.test(o + c) ? o + c : '\\' + o + '\\' + c 
  )).join('|'), regExp = new RegExp(matcher, "g");
  while (regExp.test(str)) {
    str = str.replace(regExp, '');
  } return str.length === 0 ? true : false;
}