export const getColor = (colorFilter = "#ffffff") => {
  const startIndexofColor = colorFilter?.indexOf("#");
  const filteredColor = colorFilter?.slice(startIndexofColor);
  return filteredColor;
};
