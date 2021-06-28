import TransactionRecord from "../../src/dataSet/TransactionRecord"
import TransactionStorage from "../../src/dataSet/TransactionStorage"

describe("Dataset test suites", () => {
  test("should populate the transaction record ", async () => {
    const price = 120;
    const transactionObj=new TransactionRecord(price)
    expect(transactionObj.price).toBe(120);
    expect(transactionObj.rewardPoints).toBe(90);
  });
  test("should populate the transaction data set ", async () => {
    const transactionObj=new TransactionStorage();
    expect(transactionObj.transactionList).toHaveLength(0);
  });
});

