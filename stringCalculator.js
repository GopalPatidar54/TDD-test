function add(numbers) {
  if (numbers === "") return 0;

  const delimiters = [",", "\n"];
  let numArray = numbers;

  // Handle custom delimiters
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterEndIndex);
    delimiters.push(customDelimiter);
    numArray = numbers.substring(delimiterEndIndex + 1);
  }

  // Split numbers using delimiters
  const regex = new RegExp(`[${delimiters.join("")}]`);
  const nums = numArray.split(regex).map(Number);

  // Check for negative numbers
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = add;
