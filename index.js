const romanMap = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

const romanMap2 = [
  { value: 900, symbol: "CM" },
  { value: 1000, symbol: "M" },
  { value: 400, symbol: "CD" },
  { value: 500, symbol: "D" },
  { value: 90, symbol: "XC" },
  { value: 100, symbol: "C" },
  { value: 40, symbol: "XL" },
  { value: 50, symbol: "L" },
  { value: 9, symbol: "IX" },
  { value: 10, symbol: "X" },
  { value: 4, symbol: "IV" },
  { value: 5, symbol: "V" },
  { value: 1, symbol: "I" },
];

var intToRoman = function(num) {
  let result = "";
  for(const {value, symbol} of romanMap) {
    while(!(num < value)) {
      result += symbol
      num -= value
    }
  }
  return result
};

var romanToInt = function(str = "") {
  let num = 0;
  for(const {value, symbol} of romanMap2) {
    while(str.includes(symbol)) {
      str = str.replace(symbol, "");
      num += value
    }
  }
  return num
};

console.log(intToRoman(3749));
console.log(romanToInt("III"));
