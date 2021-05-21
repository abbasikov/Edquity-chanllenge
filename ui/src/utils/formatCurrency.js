export default (value) => {
  if (value)
    return `${(value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`;
  return "";
};
