/*
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
  let commonSubstr = '';

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== s[i]) break;
    commonSubstr += t[i];   
  }

  const sRight = s.replace(commonSubstr, '');
  const tRight = t.replace(commonSubstr, '');
  const sum = sRight.length + tRight.length;

  if (sum % 2 === k % 2 && k >= sum) return 'Yes';
  if (k >= s.length + t.length) return 'Yes';

  return 'No';
}

module.exports = appendAndDelete;
