function array_diff(a, b) {
  let filter = a.filter((word => {
    return !b.includes(word);
  }))
  return filter;
}
