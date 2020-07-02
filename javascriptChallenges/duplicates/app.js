duplicateCount = (text) => {
  let caseFilter = text
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g);
  if (caseFilter == null) {
    return 0;
  }

  return caseFilter.length;
};
