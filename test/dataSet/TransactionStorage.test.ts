import TransactionStorage from '../../src/dataSet/TransactionStorage';

describe("Dataset test suites", () => {
  let transactionObj;
  beforeEach(()=>{
    transactionObj= new TransactionStorage();
    transactionObj.addTransaction(120);
  })
  afterEach(()=>{
    const transactionObj=null;
  })
  test('Should add transaction into transaction list', () => {
  
    expect(transactionObj.transactionList).toHaveLength(1);
  });
  test('Should return all records', () => {
    expect(transactionObj.getAllRecords()).toHaveLength(1);
  });
  test('Should return total reward points', () => {
    expect(transactionObj.getTotalRewardPoints()).toBe(90);
  });
  test('Should return total reward based on month', () => {
    expect(transactionObj.getMonthWiseReward(3)).toHaveLength(3);
    expect(transactionObj.getMonthWiseReward(3)[0]).toBe(90);
  });
});