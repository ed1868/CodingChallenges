dblLinear = n => {
  let arr = [1],
    [p1, p2] = [0, 0];
  for (let i = 1; i <= n; i++) {
    let [temp1, temp2] = [2 * arr[p1] + 1, 3 * arr[p2] + 1];
    arr[i] = Math.min(2 * arr[p1] + 1, 3 * arr[p2] + 1);
    if (arr[i] === temp1) p1++;
    if (arr[i] === temp2) p2++;
  }
  return arr.pop();
};
