import { env } from "process";
import crypto from "crypto";

export const createHash = (timestamp: string): string => {
  if (
    timestamp == null ||
    //these two should be arguments
    //these three should be in an interfaces
    env.MARVEL_PRIVATE_KEY == null ||
    env.MARVEL_PUBLIC_KEY == null
  ) {
    throw new Error(
      "Invalidated params. Check your environment variables and timestamp."
    );
  }
  return crypto
    .createHash("md5")
    .update(timestamp + env.MARVEL_PRIVATE_KEY + env.MARVEL_PUBLIC_KEY)
    .digest("hex");
};
