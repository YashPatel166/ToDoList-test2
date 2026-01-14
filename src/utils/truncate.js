export const truncate = (str, length = 50, suffix = '...') => {
  if (str.length <= length) return str;
  return str.substring(0, length) + suffix;
};

export default truncate;

