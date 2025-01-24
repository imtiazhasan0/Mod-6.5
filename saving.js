function monthlySavings(payments, livingCost) 
{
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
      return "invalid input";
    }

    let totalIncome = 0;
    for (const payment of payments) {
      if (payment >= 3000) {
        totalIncome += payment * 0.8;
      } else {
        totalIncome += payment;
      }
    }

    const savings = totalIncome - livingCost;
 
    if (savings > 0) {
        return savings;
    } 
    else if (savings === 0) {
        return 0;
    } 
    else {
        return "earn more";
    }
  }
  console.log(monthlySavings([1000, 2000, 3000], 5400));
  console.log(monthlySavings([1000, 2000, 2500], 5000));
  console.log(monthlySavings([900, 2700, 3400], 10000)); 
  console.log(monthlySavings(100, [900, 2700, 3400]));