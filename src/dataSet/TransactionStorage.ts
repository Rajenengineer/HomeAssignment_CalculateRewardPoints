import { getMonthWiseDate, sortData } from "../utility/Utility";
import TransactionRecord from "./TransactionRecord";

const TransactionStorage = function () {
  this.transactionList = [];

  this.getMonthWiseRecords = (month: number) => {
    const filteredTransactionList = this.transactionList.filter(
      (record) => record.transactionDate > getMonthWiseDate(month)
    );
    return sortData(filteredTransactionList);
  };
  this.getAllRecords = () => {
    return sortData(this.transactionList);
  };

  this.addTransaction = (price: number) => {
    this.transactionList.push(new TransactionRecord(price));
  };

  this.getTotalRewardPoints = () => {
    return this.transactionList.length
      ? this.transactionList.reduce((acc, key) => key.rewardPoints + acc, 0)
      : 0;
  };

  this.getMonthWiseReward = (month: number) => {
    const rewards = [];
    for (let i = 0; i < month; i++) {
      let filteredList = this.transactionList.filter(
        (record) =>
          record.transactionDate.getMonth() == new Date().getMonth() - i
      );
      rewards[i] = filteredList.reduce((acc, key) => key.rewardPoints + acc, 0);
    }
    return rewards;
  };
};

export default TransactionStorage;