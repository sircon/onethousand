import numeral from "numeral";

if (numeral.locale() !== "en-spaces") {
  numeral.register("locale", "en-spaces", {
    delimiters: {
      thousands: " ",
      decimal: ".",
    },
    abbreviations: {
      thousand: "k",
      million: "m",
      billion: "b",
      trillion: "t",
    },
    ordinal: function (number) {
      var b = number % 10;
      return ~~((number % 100) / 10) === 1
        ? "th"
        : b === 1
        ? "st"
        : b === 2
        ? "nd"
        : b === 3
        ? "rd"
        : "th";
    },
    currency: {
      symbol: "$",
    },
  });
  numeral.locale("en-spaces");
}

export const formatValue = (
  value: string | number,
  formatString: string
): string => {
  return numeral(value).format(formatString);
};
