export const unique = (array) => {
  return [...new Set(array)];
};

export const uniqueBy = (array, key) => {
  const seen = new Set();
  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

export default { unique, uniqueBy };

