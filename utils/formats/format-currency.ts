export const formatCurrency = (amount: any | null) => {
  if (amount !== null && amount !== 0) {
    const numberCurrency = parseInt(amount, 10);
    const doubleCurrency = numberCurrency * 10;

    return `Rp. ${doubleCurrency.toLocaleString("id-ID")}.000`;
  } else {
    return null;
  }
};
