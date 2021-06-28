# Calculate Reward Points

The project has the functionality to calculate the reward points based on the transaction
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction

(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

## Libraries used
- Typescript
- Jest

## Project setup
```
npm install
```

### Compile to typescript
```
npm run build
```

### Run tests
```
npm test
```

## GHow to use it
Create an object of TransactionStorage class and add the transaction.
```
let transactions = new TransactionStorage();
transactions.addTransaction(130);
transactions.addTransaction(65);
transactions.addTransaction(180);
transactions.addTransaction(200);
transactions.addTransaction(10);
console.log(transactions.getAllRecords());
```
