const { getPartitionKey } = require("./dpk");

describe("getPartitionKey", () => {
  it("returns the literal '0' when given no input", () => {
    const trivialKey = getPartitionKey();
    expect(trivialKey).toEqual("0");
  });

  it("returns the partition key when input is given", () => {
    const event = { partitionKey: "abc" };
    const result = getPartitionKey(event);
    expect(result).toEqual("abc");
  });
});
