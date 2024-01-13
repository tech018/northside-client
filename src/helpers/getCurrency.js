export const getCurrency = () => {
  const userLocale = navigator.language || "en-US";

  // Create an Intl.NumberFormat object with the user's locale
  const numberFormat = new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: "USD", // You can change 'USD' to the desired currency code
  });

  // Get the currency symbol for the user's locale
  const currencySymbol = numberFormat.format(0).replace(/[0-9.,\s]/g, "");
  return currencySymbol;
};
