export const getBaseUrl = () => {
  return "http://10.0.70.37:8020/api/v1";

  ("http://137.184.95.36:8020/api/v1");
  // "http://10.0.70.36:8020/api/v1"
  // "http://10.0.70.36:8000/api/v1"
};

export const getImageUrl = () => {
  return process.env.IMAGE_URL || "http://137.184.95.36:8020";
};
