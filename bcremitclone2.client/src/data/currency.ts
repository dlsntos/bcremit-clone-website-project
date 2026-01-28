import currency  from "currency.js";

export const gbpToPhpConversion = (money:number) => {

  const gbpAmount = currency(money, { symbol: "£" });
  const gbpToPhpRate = currency(79.83);
  const phpAmount = gbpAmount.multiply(gbpToPhpRate);

  console.log(
    currency(phpAmount, {
      symbol: "P",
      precision: 2
    }).format()
  ); };