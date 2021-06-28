import {calculateRewardPoints,getMonthWiseDate,sortData} from "../../src/utility/Utility"

describe("Utility test suites", () => {
  test("Should calculate the rewards point if price>=50 and price<100 ", async () => {
    const price = 54;
    expect(calculateRewardPoints(price)).toBe(4);
  });
  test("Should calculate the rewards point if price> 100 ", async () => {
    const price = 120;
    expect(calculateRewardPoints(price)).toBe(90);
  });
  test("Should return zero if condition does not met", async () => {
    const price = 20;
    expect(calculateRewardPoints(price)).toBe(0);
  });
  test("Should return back date as per input month", async () => {
    const testDate = "Thu Mar 02 2021 18:00:00";
    const expectedDate =
      "Wed Dec 02 2020 18:00:00 GMT+0530 (India Standard Time)";
    expect(getMonthWiseDate(3,new Date(testDate)).toString()).toContain(expectedDate);
  });
  test("Should return the sorted array", async () => {
    const inputData=[
      {
        price: 55,
        rewardPoints: 5,
        transactionDate: new Date(
          "Mon Jun 28 2021 18:00:00"
        ),
      },
      {
        price: 58,
        rewardPoints: 8,
        transactionDate: new Date(
          "Fri Jun 19 2021 18:00:00"
        ),
      },
      {
        price: 90,
        rewardPoints: 40,
        transactionDate: new Date(
          "Sat Jun 05 2021 18:00:00"
        ),
      },
      {
        price: 99,
        rewardPoints: 49,
        transactionDate: new Date(
          "Wed Mar 28 2021 18:00:00"
        ),
      },
      {
        price: 120,
        rewardPoints: 90,
        transactionDate: new Date(
          "Tue 28 2021 18:00:00"
        ),
      },
      
    ];
    expect(sortData(inputData)[0].price).toBe(99);
    expect(sortData(inputData)[4].price).toBe(120);
  });
});

