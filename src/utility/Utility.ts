export const calculateRewardPoints = (price: number) => {
  if (price >= 50 && price < 100) {
    return price - 50;
  } else if (price > 100) {
    return 2 * (price - 100) + 50;
  }
  return 0;
};
export const getMonthWiseDate = (month:number=1,currentDate: Date = new Date()) => {
  return new Date(currentDate.setMonth(currentDate.getMonth() - month));
};
export const sortData = (transactionList: Array<any>) => {
  return transactionList.sort((a, b) =>
    b.transactionDate.getTime() > a.transactionDate.getTime() ? -1 : 1
  );
};
