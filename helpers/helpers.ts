import crypto from "crypto";

export const createHash = (
  timestamp: string,
  publicKey?: string,
  privateKey?: string
): string => {
  if (timestamp == null || publicKey == null || privateKey == null) {
    throw new Error(
      "Invalidated params. Check your environment variables and timestamp."
    );
  }
  return crypto
    .createHash("md5")
    .update(timestamp + publicKey + privateKey)
    .digest("hex");
};

export const validateTimestamp = (timestamp: string): boolean => {
  if (timestamp == null) {
    return false;
  }
  return true;
};

export const validateKey = (key: string): boolean => {
  if (!key) {
    return false;
  }
  return true;
};
