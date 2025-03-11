export const firstLetterToUpperCase = (text) => {
  if (text?.length > 0) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  } else {
    return text;
  }
};

export const sortProjectsByPin = (projects) => {
  return [...projects].sort((a, b) => (b?.pin === true) - (a?.pin === true));
};
