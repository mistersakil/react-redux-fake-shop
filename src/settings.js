export const sub_string_func = ({ str, length }) => {
  let totalLength = 200;
  let remainder = totalLength - length;
  str = str.substring(0, remainder);
  let lastIndexOfSpace = str.lastIndexOf(" ");
  return str.substring(0, lastIndexOfSpace);
};
export const uc_first_func = (str = null) => {
  str = str.charAt(0).toUpperCase() + str.substring(1);
  return str;
};

export const slug_func = (str = null, isSlug = true) => {
  let strToArray;
  if (isSlug) {
    strToArray = str.split(" ");
    str = strToArray.join("-");
  } else {
    strToArray = str.split("-");
    str = strToArray.join(" ");
  }
  return str;
};
