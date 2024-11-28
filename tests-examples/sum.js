function sum(a, b) {
  return a + b;
}

const createHash = (timestamp, publicKey, privateKey) => {
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

(module.exports = sum), createHash;
