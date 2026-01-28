import currency from "currency.js";

export const gbpToPhpConversions = (money: number) => {
  if (money === undefined || money === null || isNaN(money)) {
    return "";
  }

  const gbpAmount = currency(money);
  const gbpToPhpRate = currency(81.08);
  const phpAmount = gbpAmount.multiply(gbpToPhpRate);
  const convertedAmount = currency(phpAmount, {
    symbol: "",
    precision: 2
  }).format()

  return convertedAmount;
};
