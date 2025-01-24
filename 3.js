function sortarray(array) 
{
    return array.sort((a, b) => a - b);
}
  const numbers = [15, 3, 10, 2, 18, 7];
  const sortedNumbers = sortarray(numbers);
  console.log(sortedNumbers);