function checkCashRegister(price, cash, cid) {
  const values = {
      'PENNY': 0.01,
      'NICKEL': 0.5,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
  }
  let cidTotal = 0;
  var change = [];

  for (let i=0; i< cid.length; i ++) {
    cidTotal += cid[i][1];
    cidTotal = parseFloat(cidTotal.toFixed(2));
  }

  if (cash - price == cidTotal) {
    return {status: "CLOSED", change: cid};
  } else if (cash - price > cidTotal) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {
      cash -= price;
      for (let i=cid.length-1; i>=0; i--) {
          if (cash > 0) {
              let coinChange = valueCoin(values[cid[i][0]], cid[i][1], cash);
              if (coinChange) {
                  change.push([cid[i][0], coinChange]);
                  cash -= coinChange;
              }
          }
      }
      if (cash > 0) {
          return {status: "INSUFFICIENT_FUNDS", change: []}
      } else return {status: "OPEN", change: change}
  }

  function valueCoin(coin_value, register, amount) {
    let changeLocal = 0;
    while (amount >= coin_value && register > 0) {
      changeLocal += coin_value;
      register -= coin_value;
      amount = parseFloat((amount - coin_value).toFixed(2));
    }
    return changeLocal;
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));