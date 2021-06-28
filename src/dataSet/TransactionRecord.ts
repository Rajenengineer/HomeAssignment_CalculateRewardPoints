import { calculateRewardPoints } from "../utility/Utility";

const TransactionRecord=function(price:number) {
    this.price = price;
    this.rewardPoints = calculateRewardPoints(price);
    this.transactionDate = new Date();
  
}
export default TransactionRecord;
