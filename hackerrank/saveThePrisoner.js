
/*
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n,m,s) {
  const reminder = m % n;
  const index = s - 1;

  if (s === 1) return reminder === 0 ? n : reminder;

  if (reminder === 0) return index;

  const seat = index + reminder;
  if (seat <= n) return seat;

  return reminder - Math.abs(index - n);
}

module.exports = saveThePrisoner;
