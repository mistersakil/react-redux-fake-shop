export const sub_string_func = ({ str, length }) => {
  let totalLength = 200;
  let remainder = totalLength - length;
  str = str.substring(0, remainder);
  let lastIndexOfSpace = str.lastIndexOf(" ");
  return str.substring(0, lastIndexOfSpace);
};
