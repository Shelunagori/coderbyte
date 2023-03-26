const crypto = require("crypto");

exports.getPartitionKey = (event) => {
  if (!event || !event.partitionKey) {
    return "0";
  }
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = event?.partitionKey || crypto.createHash("sha3-512")
    .update(JSON.stringify(event ?? ''))
    .digest("hex");

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  } else if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH
    ? crypto.createHash("sha3-512").update(candidate).digest("hex")
    : candidate;
};
