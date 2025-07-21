const getImagePrefix = () => {
  return process.env.NODE_ENV === "production" ? "/v3/" : "";
};

export { getImagePrefix };
