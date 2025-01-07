export const getBaseUrl = () => {
  return "https://c2v5088h-8020.asse.devtunnels.ms/api/v1";

  // "http://137.184.95.36:8020/api/v1";
  // "http://10.0.70.36:8020/api/v1"
  // "http://10.0.70.36:8000/api/v1"
};

export const getImageUrl = () => {
  return process.env.IMAGE_URL || "http://137.184.95.36:8020";
};
